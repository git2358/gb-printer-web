import { Dispatch, MiddlewareAPI } from 'redux';
import { ExportFrameMode } from 'gb-image-decoder';
import { QueueImage } from '../../../types/QueueImage';
import { Dialog } from '../../../types/Dialog';
import { DropBoxSettings, GitStorageSettings, SyncLastUpdate } from '../../../types/actions/StorageActions';
import { CurrentEditBatch, Image, RGBNHashes } from '../../../types/Image';
import { Palette } from '../../../types/Palette';
import { FrameGroup } from '../../../types/FrameGroup';
import { Frame } from '../../../types/Frame';
import { GalleryViews } from '../../consts/GalleryViews';
import { ImportItem } from '../../../types/ImportItem';
import { ProgressLog } from '../../../types/actions/LogActions';
import { Plugin } from '../../../types/Plugin';
import { Progress } from './reducers/progressReducer';
import { RecentImport } from './reducers/recentImportsReducer';
import { TrashCount } from './reducers/trashCountReducer';
import { VideoParams } from '../../../types/VideoParams';
import { WindowDimensions } from './reducers/windowDimensionsReducer';
import { PrinterInfo } from '../../../types/Printer';
import { PrinterFunctionName } from '../../../types/actions/PrinterActions';

// ToDo: infer from store somehow...?
export interface State {
  activePalette: string | undefined,
  bitmapQueue: QueueImage[],
  canShare: boolean,
  confirm: Dialog[],
  dragover: boolean,
  dropboxStorage: DropBoxSettings,
  editImage: CurrentEditBatch | null,
  editFrame: string | null,
  editPalette: Palette | null,
  enableDebug: boolean,
  exportFileTypes: string[],
  exportScaleFactors: number[],
  filtersActiveTags: string[],
  filtersVisible: boolean,
  forceMagicCheck: boolean,
  frameGroupNames: FrameGroup[],
  frameQueue: Frame[],
  frames: Frame[],
  framesMessage: number,
  galleryView: GalleryViews,
  gitStorage: GitStorageSettings,
  handleExportFrame: ExportFrameMode,
  hideDates: boolean,
  images: Image[],
  imageSelection: string[],
  importDeleted: boolean,
  importQueue: ImportItem[],
  importLastSeen: boolean,
  importPad: boolean,
  isFullscreen: boolean,
  lastSelectedImage: string | null,
  progressLog: ProgressLog,
  lightboxImage: number | null,
  pageSize: number,
  palettes: Palette[],
  plugins: Plugin[],
  preferredLocale: string,
  printerBusy: boolean,
  printerData: PrinterInfo,
  printerFunctions: PrinterFunctionName[],
  printerUrl: string,
  printerParams: string,
  progress: Progress,
  recentImports: RecentImport[],
  rgbnImages: RGBNHashes | null,
  savFrameTypes: string,
  sortBy: string,
  sortOptionsVisible: boolean,
  syncBusy: boolean,
  syncLastUpdate: SyncLastUpdate,
  syncSelect: boolean,
  useSerials: boolean,
  showSerials: boolean,
  trashCount: TrashCount,
  videoParams: VideoParams,
  windowDimensions: WindowDimensions,
}

export type TypedStore = MiddlewareAPI<Dispatch, State>;
