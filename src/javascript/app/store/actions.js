// View
export const SET_CURRENT_GALLERY_VIEW = 'SET_CURRENT_GALLERY_VIEW';
export const SET_IS_FULLSCREEN = 'SET_IS_FULLSCREEN';

// Lightbox
export const SET_LIGHTBOX_IMAGE_INDEX = 'SET_LIGHTBOX_IMAGE_INDEX';
export const LIGHTBOX_NEXT = 'LIGHTBOX_NEXT';
export const LIGHTBOX_PREV = 'LIGHTBOX_PREV';
export const LIGHTBOX_FULLSCREEN = 'LIGHTBOX_FULLSCREEN';
export const SET_LIGHTBOX_IMAGE_HASH = 'SET_LIGHTBOX_IMAGE_HASH';

// Palettes
export const PALETTE_SET_ACTIVE = 'PALETTE_SET_ACTIVE';
export const PALETTE_DELETE = 'PALETTE_DELETE';
export const SET_EDIT_PALETTE = 'SET_EDIT_PALETTE';
export const PALETTE_CANCEL_EDIT = 'PALETTE_CANCEL_EDIT';
export const PALETTE_UPDATE = 'PALETTE_UPDATE';
export const SAVE_EDIT_PALETTE = 'SAVE_EDIT_PALETTE';
export const PALETTE_EDIT = 'PALETTE_EDIT';
export const PALETTE_CLONE = 'PALETTE_CLONE';

// Dialogs
export const CONFIRM_ASK = 'CONFIRM_ASK';
export const CONFIRM_ANSWERED = 'CONFIRM_ANSWERED';
export const FRAMES_MESSAGE_SHOW = 'FRAMES_MESSAGE_SHOW';
export const FRAMES_MESSAGE_HIDE = 'FRAMES_MESSAGE_HIDE';

// Frames
export const ADD_FRAME = 'ADD_FRAME';
export const DELETE_FRAME = 'DELETE_FRAME';
export const EDIT_FRAME = 'EDIT_FRAME';
export const CANCEL_EDIT_FRAME = 'CANCEL_EDIT_FRAME';
export const UPDATE_FRAME = 'UPDATE_FRAME';
export const NAME_FRAMEGROUP = 'NAME_FRAMEGROUP';

// Generic config
export const SET_HANDLE_EXPORT_FRAME = 'SET_HANDLE_EXPORT_FRAME';
export const SET_SAV_FRAME_TYPES = 'SET_SAV_FRAME_TYPES';
export const UPDATE_EXPORT_FILE_TYPES = 'UPDATE_EXPORT_FILE_TYPES';
export const UPDATE_EXPORT_SCALE_FACTORS = 'UPDATE_EXPORT_SCALE_FACTORS';
export const SET_HIDE_DATES = 'SET_HIDE_DATES';
export const SET_PREFERRED_LOCALE = 'SET_PREFERRED_LOCALE';
export const SET_IMPORT_LAST_SEEN = 'SET_IMPORT_LAST_SEEN';
export const SET_IMPORT_DELETED = 'SET_IMPORT_DELETED';
export const SET_FORCE_MAGIC_CHECK = 'SET_FORCE_MAGIC_CHECK';
export const SET_IMPORT_PAD = 'SET_IMPORT_PAD';
export const SET_PAGESIZE = 'SET_PAGESIZE';
export const SHOW_SERIALS = 'SHOW_SERIALS';
export const USE_SERIALS = 'USE_SERIALS';
export const SET_DEBUG = 'SET_DEBUG';

// Images
export const ADD_IMAGES = 'ADD_IMAGES';
export const DELETE_IMAGE = 'DELETE_IMAGE';
export const DELETE_IMAGES = 'DELETE_IMAGES';
export const EDIT_IMAGE = 'EDIT_IMAGE';
export const EDIT_IMAGE_SELECTION = 'EDIT_IMAGE_SELECTION';
export const CANCEL_EDIT_IMAGE = 'CANCEL_EDIT_IMAGE';
export const UPDATE_IMAGE = 'UPDATE_IMAGE';
export const UPDATE_IMAGES_BATCH = 'UPDATE_IMAGES_BATCH';
export const IMAGE_FAVOURITE_TAG = 'IMAGE_FAVOURITE_TAG';
export const REHASH_IMAGE = 'REHASH_IMAGE';

// Drag Drop
export const IMPORT_DRAGOVER_START = 'IMPORT_DRAGOVER_START';
export const IMPORT_DRAGOVER_END = 'IMPORT_DRAGOVER_END';

// Dropbox
export const DROPBOX_LOGOUT = 'DROPBOX_LOGOUT';
export const SET_DROPBOX_STORAGE = 'SET_DROPBOX_STORAGE';
export const DROPBOX_LOG_ACTION = 'DROPBOX_LOG_ACTION';
export const LAST_UPDATE_DROPBOX_REMOTE = 'LAST_UPDATE_DROPBOX_REMOTE';
export const DROPBOX_SETTINGS_IMPORT = 'DROPBOX_SETTINGS_IMPORT';
export const DROPBOX_START_AUTH = 'DROPBOX_START_AUTH';

// Git
export const SET_GIT_STORAGE = 'SET_GIT_STORAGE';
export const GITSTORAGE_LOG_ACTION = 'GITSTORAGE_LOG_ACTION';
export const GIT_SETTINGS_IMPORT = 'GIT_SETTINGS_IMPORT';

// Storage (Git + Dropbox)
export const STORAGE_SYNC_DONE = 'STORAGE_SYNC_DONE';
export const STORAGE_DIFF_DONE = 'STORAGE_DIFF_DONE';
export const STORAGE_SYNC_START = 'STORAGE_SYNC_START';
export const STORAGE_SYNC_SELECT = 'STORAGE_SYNC_SELECT';
export const STORAGE_SYNC_CANCEL = 'STORAGE_SYNC_CANCEL';
export const JSON_EXPORT = 'JSON_EXPORT';
export const JSON_IMPORT = 'JSON_IMPORT';

// Tags / Filters
export const SET_ACTIVE_TAGS = 'SET_ACTIVE_TAGS';
export const SET_AVAILABLE_TAGS = 'SET_AVAILABLE_TAGS';
export const SHOW_FILTERS = 'SHOW_FILTERS';
export const HIDE_FILTERS = 'HIDE_FILTERS';

// Selection
export const IMAGE_SELECTION_REMOVE = 'IMAGE_SELECTION_REMOVE';
export const IMAGE_SELECTION_ADD = 'IMAGE_SELECTION_ADD';
export const IMAGE_SELECTION_SET = 'IMAGE_SELECTION_SET';
export const IMAGE_SELECTION_SHIFTCLICK = 'IMAGE_SELECTION_SHIFTCLICK';

// Sorting
export const SET_SORT_BY = 'SET_SORT_BY';
export const SHOW_SORT_OPTIONS = 'SHOW_SORT_OPTIONS';
export const HIDE_SORT_OPTIONS = 'HIDE_SORT_OPTIONS';

// Plugins
export const PLUGIN_REMOVE = 'PLUGIN_REMOVE';
export const PLUGIN_ADD = 'PLUGIN_ADD';
export const PLUGIN_UPDATE_PROPERTIES = 'PLUGIN_UPDATE_PROPERTIES';
export const PLUGIN_UPDATE_CONFIG = 'PLUGIN_UPDATE_CONFIG';
export const PLUGIN_IMAGE = 'PLUGIN_IMAGE';
export const PLUGIN_IMAGES = 'PLUGIN_IMAGES';

// Progress
export const EXECUTE_PLUGIN_PROGRESS = 'EXECUTE_PLUGIN_PROGRESS';
export const PRINTER_PROGRESS = 'PRINTER_PROGRESS';
export const CREATE_GIF_PROGRESS = 'CREATE_GIF_PROGRESS';
export const LOG_CLEAR = 'LOG_CLEAR';

// WiFi-Printer
export const SET_PRINTER_PARAMS = 'SET_PRINTER_PARAMS';
export const SET_PRINTER_URL = 'SET_PRINTER_URL';
export const REMOTE_CALL_FUNCTION = 'REMOTE_CALL_FUNCTION';
export const HEARTBEAT_TIMED_OUT = 'HEARTBEAT_TIMED_OUT';
export const PRINTER_FUNCTIONS_RECEIVED = 'PRINTER_FUNCTIONS_RECEIVED';
export const PRINTER_DATA_RECEIVED = 'PRINTER_DATA_RECEIVED';
export const PRINTER_RESET = 'PRINTER_RESET';

// Features
export const ANIMATE_IMAGES = 'ANIMATE_IMAGES';
export const UPDATE_RGBN_PART = 'UPDATE_RGBN_PART';
export const SET_VIDEO_PARAMS = 'SET_VIDEO_PARAMS';
export const CANCEL_ANIMATE_IMAGES = 'CANCEL_ANIMATE_IMAGES';
export const SAVE_RGBN_IMAGE = 'SAVE_RGBN_IMAGE';
export const SHARE_IMAGE = 'SHARE_IMAGE';
export const START_DOWNLOAD = 'START_DOWNLOAD';
export const DOWNLOAD_SELECTION = 'DOWNLOAD_SELECTION';
export const BATCH_TASK = 'BATCH_TASK';

// Generic action types
export const GLOBAL_UPDATE = 'GLOBAL_UPDATE';
export const WINDOW_DIMENSIONS = 'WINDOW_DIMENSIONS';
export const ERROR = 'ERROR';
export const TRY_RECOVER_IMAGE_DATA = 'TRY_RECOVER_IMAGE_DATA';
export const IMPORT_FILES = 'IMPORT_FILES';
export const ADD_TO_QUEUE = 'ADD_TO_QUEUE';

// New import workflow
export const BITMAPQUEUE_ADD = 'BITMAPQUEUE_ADD';
export const BITMAPQUEUE_CANCEL = 'BITMAPQUEUE_CANCEL';
export const IMPORTQUEUE_ADD = 'IMPORTQUEUE_ADD';
export const IMPORTQUEUE_ADD_MULTI = 'IMPORTQUEUE_ADD_MULTI';
export const IMPORTQUEUE_CANCEL = 'IMPORTQUEUE_CANCEL';
export const IMPORTQUEUE_CANCEL_ONE = 'IMPORTQUEUE_CANCEL_ONE';
export const FRAMEQUEUE_ADD = 'FRAMEQUEUE_ADD';
export const FRAMEQUEUE_CANCEL_ONE = 'FRAMEQUEUE_CANCEL_ONE';

// Trash
export const SHOW_HIDE_TRASH = 'SHOW_HIDE_TRASH';
export const SET_TRASH_COUNT_FRAMES = 'SET_TRASH_COUNT_FRAMES';
export const SET_TRASH_COUNT_IMAGES = 'SET_TRASH_COUNT_IMAGES';
export const UPDATE_TRASH_COUNT = 'UPDATE_TRASH_COUNT';
