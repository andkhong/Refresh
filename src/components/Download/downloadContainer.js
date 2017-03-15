import { connect } from 'react-redux';

import * as downloadActionCreators from './../../actions/downloadAction';
import Download from './Download';

const mapStateToProps = (state) => {
  return {
    image: state.uploadReducer.image,
    style: state.filterReducer.style
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    downloadImage: (setting) => {
      dispatch(downloadActionCreators.downloadImage(setting))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Download);
