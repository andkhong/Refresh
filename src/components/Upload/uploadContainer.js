import { connect } from 'react-redux';

import Upload from './Upload';
import * as uploadActionCreators from './../../actions/uploadAction';

const mapDispatchToProps = (dispatch) => {
  return {
    upload: (file, type) => {
      dispatch(uploadActionCreators.uploadImage(file, type))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Upload);
