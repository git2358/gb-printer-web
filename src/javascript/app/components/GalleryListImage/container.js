import { connect } from 'react-redux';

const mapStateToProps = (state, { palette, hash }) => ({
  palette: state.palettes.find(({ shortName }) => shortName === palette).palette,
  isR: state.rgbnImages.r === hash,
  isG: state.rgbnImages.g === hash,
  isB: state.rgbnImages.b === hash,
  isN: state.rgbnImages.n === hash,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateRGBN: (part, checked) => {
    dispatch({
      type: 'UPDATE_RGBN_PART',
      payload: {
        [part]: checked ? ownProps.hash : '',
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
