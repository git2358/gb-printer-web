import { useState, useEffect } from 'react';
import useItemsStore from '../../stores/itemsStore';
import useSettingsStore from '../../stores/settingsStore';
import getFrameGroups from '../../../tools/getFrameGroups';
import { useImportExportSettings } from '../../../hooks/useImportExportSettings';
import { compressAndHashFrame, loadFrameData, saveFrameData } from '../../../tools/applyFrame/frameData';
import { padFrameData } from '../../../tools/saveLocalStorageItems';
import type { FrameGroup } from '../../../../types/FrameGroup';
import type { Frame } from '../../../../types/Frame';
import type { ExportTypes } from '../../../consts/exportTypes';
import { useStores } from '../../../hooks/useStores';
import { getFramesForGroup } from '../../../tools/getFramesForGroup';

const getValidFrameGroupId = (groups: FrameGroup[], byId: string): string => {
  const group = groups.find(({ id }) => id === byId);
  if (!group) {
    return groups[0]?.id || '';
  }

  return group.id;
};

interface UseFrames {
  selectedFrameGroup: string,
  groupFrames: Frame[],
  setSelectedFrameGroup: (id: string) => void,
  frameGroups: FrameGroup[],
  exportJson: (what: ExportTypes) => void,
  palette: string[],
  setActiveFrameGroupName: (name: string) => void,
  activeFrameGroup: FrameGroup,
  convertFormat: () => void,
  enableDebug: boolean,
}

const useFrames = (): UseFrames => {
  const { enableDebug, savFrameTypes, activePalette } = useSettingsStore();
  const { frames, palettes, frameGroups: frameGroupsState, addFrames, updateFrameGroups } = useItemsStore();
  const { updateLastSyncLocalNow } = useStores();
  const { downloadSettings } = useImportExportSettings();

  const palette = palettes.find(({ shortName }) => shortName === activePalette) || palettes[0];

  const frameGroups = getFrameGroups(frames, frameGroupsState);
  const [groupFrames, setGroupFrames] = useState<Frame[]>([]);
  const [selectedFrameGroup, setSelectedFrameGroup] = useState(getValidFrameGroupId(frameGroups, savFrameTypes));

  useEffect(() => {
    if (selectedFrameGroup) {
      setGroupFrames(getFramesForGroup(frames, selectedFrameGroup));
    } else {
      setGroupFrames([]);
    }
  }, [frames, selectedFrameGroup]);

  const activeFrameGroup = frameGroups.find(({ id }) => (id === selectedFrameGroup)) || frameGroups[0];

  const setActiveFrameGroupName = (name: string) => {
    updateFrameGroups([{ ...activeFrameGroup, name }]);
    updateLastSyncLocalNow();
  };

  const exportJson = (what: ExportTypes) => downloadSettings(what, selectedFrameGroup);

  const convertFormat = async () => {
    const updatedFrames = await Promise.all(frames.map(async (frame): Promise<Frame> => {
      const stateData = await loadFrameData(frame.hash);

      if (!stateData) {
        return frame;
      }

      const imageStartLine = stateData.upper.length / 20;
      const tileData = padFrameData(stateData);

      const { dataHash: newHash } = await compressAndHashFrame(tileData, imageStartLine);


      if (frame.hash === newHash) {
        return frame;
      }

      const saveHash = await saveFrameData(tileData, imageStartLine);

      return {
        ...frame,
        hash: saveHash,
      };
    }));

    addFrames(updatedFrames);
  };

  return {
    selectedFrameGroup,
    groupFrames,
    setSelectedFrameGroup,
    frameGroups,
    exportJson,
    palette: palette?.palette,
    setActiveFrameGroupName,
    activeFrameGroup,
    convertFormat,
    enableDebug,
  };
};

export default useFrames;
