import { connect } from 'react-redux';

import Image from './Image';

const mapStateToProps = (state) => {
  return {
    image: state.uploadReducer.image,
    style: state.filterReducer.style
  };
}

export default connect(
  mapStateToProps
)(Image);
