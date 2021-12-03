import { getAllTestDiscussionsQuery } from '../Queries/testQueries'
import { getAllTestDiscussionsCommentsQuery } from '../Queries/testQueries'

import axios from 'axios'

// Test functions
export const getAllTestDiscussions = () => {
  axios.post('http://localhost:5000/graphql', {
      query: getAllTestDiscussionsQuery,
      variables: {}
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const getAllTestDiscussionsComments = () => {
  axios.post('http://localhost:5000/graphql', {
      query: getAllTestDiscussionsCommentsQuery,
      variables: {}
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
