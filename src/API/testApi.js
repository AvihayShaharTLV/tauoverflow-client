import { getAllSolutionsQuery, getAllTestDiscussionsQuery } from '../Queries/testQueries'
import { getAllTestDiscussionsCommentsQuery } from '../Queries/testQueries'
import { updateTestNumQuestionsQuery } from '../Queries/testQueries'
import { getTestNumQuestionsQuery } from '../Queries/testQueries'
import { createTestQuery } from '../Queries/testQueries'
import { createExamQuery } from '../Queries/testQueries'
import { createSolutionQuery, getAllExamsQuery } from '../Queries/testQueries'
import { getAllTestsQuery } from '../Queries/testQueries'

import axios from 'axios'

// Test functions
export const getAllTestDiscussions = () => {
  return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
      query: getAllTestDiscussionsQuery,
      variables: {}
    })
    .then(function (response) {
       return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const getAllTestDiscussionsComments = () => {
  return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
      query: getAllTestDiscussionsCommentsQuery,
      variables: {}
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const getTestNumQuestions = () => {
  axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
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
  axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
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
  return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
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

export const createExam = (object) => {
  return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
      query: createExamQuery,
      variables: object,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const getAllExams = () => {
  return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
      query: getAllExamsQuery,
      variables: {}
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const getAllSolutions = () => {
  return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
      query: getAllSolutionsQuery,
      variables: {}
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}


export const createSolution = (object) => {
  return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
      query: createSolutionQuery,
      variables: object,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const getAllTests = () => {
  return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
      query: getAllTestsQuery,
      variables: {}
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}