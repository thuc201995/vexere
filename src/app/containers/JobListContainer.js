import { connect } from "react-redux";
import JobList from "../components/JobList";
import * as actions from "../actions/JobListAction";
const mapStateToProps = state => {
  const { jobList } = state;
  return {
    jobList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchJobList: () => {
      dispatch(actions.fetchJobList());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobList);
