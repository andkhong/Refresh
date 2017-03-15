import { connect } from 'react-redux';
import * as filterActionCreators from './../../actions/filterAction';
import Filter from './Filter';

const mapStateToProps = (state) => {
  return { filter: state.filterReducer.filters };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (setting) => {
      dispatch(filterActionCreators.updateFilter(setting))
    },
    reset: (filter) => {
      dispatch(filterActionCreators.resetFilter(filter))
    },
    resetImage: () => {
      dispatch(filterActionCreators.resetImage())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
