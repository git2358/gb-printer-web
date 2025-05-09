import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { ROOT_ID, useGalleryTreeContext } from '../galleryTree';
import { useGalleryParams } from '../../../hooks/useGalleryParams';
import { getFilteredImages } from '../../../tools/getFilteredImages';
import useFiltersStore from '../../stores/filtersStore';
import useSettingsStore from '../../stores/settingsStore';
import type { TreeImageGroup } from '../../../../types/ImageGroup';
import type { Image } from '../../../../types/Image';

interface UseNavigationTools {
  getGroupPath: (groupId: string) => string,
  currentGroup: TreeImageGroup,
  getImagePageIndexInGroup: (imageHash: string, parentGroup: TreeImageGroup) => number,
  getPagedImagePath: (hash: string) => string,
  navigateToGroup: (groupId: string) => void,
  navigateToImage: (hash: string) => void,
}

interface ShouldNavigate {
  imageHash? :string,
  groupId?: string,
  page?: {
    slug: string,
    viewId: string,
  },
}

export const useNavigationTools = (): UseNavigationTools => {
  const routerNavigate = useNavigate();
  const { paths, root } = useGalleryTreeContext();
  const [shouldNavigate, setShouldNavigate] = useState<ShouldNavigate>({});
  const { sortBy, filtersActiveTags, recentImports } = useFiltersStore();
  const { pageSize } = useSettingsStore();
  const { path: currentPath } = useGalleryParams();

  const imageFilter = useCallback((images: Image[]): Image[] => (
    getFilteredImages(images, {
      filtersActiveTags,
      sortBy,
      recentImports,
    })
  ), [filtersActiveTags, recentImports, sortBy]);

  const getImagePageIndexInGroup = useCallback((imageHash: string, parentGroup: TreeImageGroup) => {
    const sortedImages = imageFilter(parentGroup.images);
    const imageIndex = sortedImages.findIndex(({ hash }) => (
      hash === imageHash
    ));

    return Math.floor(imageIndex / pageSize) + 1;
  }, [imageFilter, pageSize]);

  const getGroupPath = useCallback((groupId: string): string => {
    if (groupId === ROOT_ID) {
      return '/gallery/page/1';
    }

    const groupPath = paths.find(({ group: { id } }) => (groupId === id))?.absolutePath || '';
    return `/gallery/${groupPath}page/1`;
  }, [paths]);

  const currentGroup = useMemo<TreeImageGroup>(() => (
    paths.find(({ absolutePath }) => (absolutePath === currentPath))?.group || root
  ), [currentPath, paths, root]);

  const navigateToGroup = (groupId: string) => {
    setShouldNavigate({ groupId });
  };

  const getPagedImagePath = useCallback((imageHash: string): string => {
    const pathMap = paths.find(({ group: { images } }) => (
      images.map(({ hash }) => hash).includes(imageHash)
    ));

    const viewSlug = pathMap?.absolutePath || '';
    const group = pathMap?.group || root;

    const pageIndex = getImagePageIndexInGroup(imageHash, group);

    return `/gallery/${viewSlug}page/${pageIndex}`;
  }, [getImagePageIndexInGroup, paths, root]);

  const navigateToImage = (hash: string) => {
    setShouldNavigate({ imageHash: hash });
  };

  useEffect(() => {
    if (shouldNavigate.imageHash) {
      routerNavigate(getPagedImagePath(shouldNavigate.imageHash));
      setShouldNavigate({});
    } else if (shouldNavigate.groupId) {
      routerNavigate(getGroupPath(shouldNavigate.groupId));
      setShouldNavigate({});
    }
  }, [getGroupPath, getPagedImagePath, routerNavigate, shouldNavigate]);

  return {
    currentGroup,
    getGroupPath,
    getPagedImagePath,
    getImagePageIndexInGroup,
    navigateToGroup,
    navigateToImage,
  };
};
