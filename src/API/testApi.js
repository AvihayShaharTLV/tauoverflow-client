import { getAllTestDiscussionsQuery } from '../Queries/testQueries'
import { getAllTestDiscussionsCommentsQuery } from '../Queries/testQueries'
import { updateTestNumQuestionsQuery } from '../Queries/testQueries'
import { getTestNumQuestionsQuery } from '../Queries/testQueries'
import { createTestQuery } from '../Queries/testQueries'

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

export const getTestNumQuestions = () => {
  axios.post('http://localhost:5000/graphql', {
      query: getTestNumQuestionsQuery,
      variables: {}
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const updateTestNumQuestions = (userData) => {
  axios.post('http://localhost:5000/graphql', {
      query: updateTestNumQuestionsQuery,
      variables: {...userData}
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const createTest = (object) => {
  return axios.post('http://localhost:5000/graphql', {
      query: createTestQuery,
      variables: object
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}