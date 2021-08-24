import { connect } from 'react-redux';
import getFrameGroups from '../../../../../tools/getFrameGroups';

const mapStateToProps = (state) => ({
  exportScaleFactors: state.exportScaleFactors,
  exportFileTypes: state.exportFileTypes,
  pageSize: state.pageSize,
  savFrameTypes: state.savFrameTypes,
  savFrameGroups: getFrameGroups(state.frames),
  handleExportFrame: state.handleExportFrame,
  importLastSeen: state.importLastSeen,
  hideDates: state.hideDates,
  printerUrl: state.printerUrl,
  printerParams: state.printerParams,
  useSerials: state.useSerials,
});

const mapDispatchToProps = (dispatch) => ({
  setSavFrameTypes(savFrameTypes) {
    dispatch({
      type: 'SET_SAV_FRAME_TYPES',
      payload: savFrameTypes,
    });
  },
  setHandleExportFrame(handleExportFrame) {
    dispatch({
      type: 'SET_HANDLE_EXPORT_FRAME',
      payload: handleExportFrame,
    });
  },
  setImportLastSeen(importLastSeen) {
    dispatch({
      type: 'SET_IMPORT_LAST_SEEN',
      payload: importLastSeen,
    });
  },
  setHideDates(hideDates) {
    dispatch({
      type: 'SET_HIDE_DATES',
      payload: hideDates,
    });
  },
  setPageSize(pageSize) {
    dispatch({
      type: 'SET_PAGESIZE',
      payload: pageSize,
    });
  },
  changeExportScaleFactors(factor, checked) {
    dispatch({
      type: 'UPDATE_EXPORT_SCALE_FACTORS',
      payload: {
        factor,
        checked,
      },
    });
  },
  changeExportFileTypes(fileType, checked) {
    dispatch({
      type: 'UPDATE_EXPORT_FILE_TYPES',
      payload: {
        fileType,
        checked,
      },
    });
  },
  updatePrinterUrl(printerUrl) {
    dispatch({
      type: 'SET_PRINTER_URL',
      payload: printerUrl,
    });
  },
  updatePrinterParams(printerParams) {
    dispatch({
      type: 'SET_PRINTER_PARAMS',
      payload: printerParams,
    });
  },
  setUseSerials(useSerials) {
    dispatch({
      type: 'USE_SERIALS',
      payload: useSerials,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
