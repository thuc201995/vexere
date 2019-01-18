const innitialState = () => {
  return {
    isFetching: false
  };
};

const JobListReducer = (state = innitialState(), action) => {
  console.log(action);

  switch (action.type) {
    default:
      return state;
  }
};
export default JobListReducer;
