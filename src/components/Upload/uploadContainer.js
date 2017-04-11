import { connect } from 'react-redux';

import Upload from './Upload';
import * as uploadActionCreators from './../../actions/uploadAction';

const mapDispatchToProps = (dispatch) => {
  return {
    upload: (file, mimetype) => {
      dispatch(uploadActionCreators.uploadImage(file, mimetype))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Upload);
