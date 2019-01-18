import { RSAA } from "redux-api-middleware";
const jobApi = "http://jobs.github.com:8080/positions.json?description=react";
const axios = require("axios");
export const jobListType = {
  FETCH_JOB_LISTS_REQUEST: "FETCH_JOB_LISTS_REQUEST",
  FETCH_JOB_LISTS_SUCCESS: "FETCH_JOB_LISTS_SUCCESS",
  FETCH_JOB_LISTS_FAILURE: "FETCH_JOB_LISTS_FAILURE"
};
export const fetchJobList = () => {
  axios
    .get(jobApi)
    .then(function(response) {
      // handle success
      console.log(response);
      return { type: "Test" };
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .then(function() {
      // always executed
    });
};
