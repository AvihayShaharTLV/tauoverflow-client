import { createCourseCommentQuery } from '../Queries/commentQueries'
import { updateCourseCommentQuery } from '../Queries/commentQueries'
import { createTestCommentQuery } from '../Queries/commentQueries'
import { updateTestCommentQuery } from '../Queries/commentQueries'
import { createQuestionCommentQuery } from '../Queries/commentQueries'
import { updateQuestionCommentQuery } from '../Queries/commentQueries'

import axios from 'axios'

// Comment functions
export const createCourseComment = (object) => {
    return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
        query: createCourseCommentQuery,
        variables: object,
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export const updateCourseComment = (userData) => {
    axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
        query: updateCourseCommentQuery,
        variables: {...userData}
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export const createTestComment = (object) => {
    return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
        query: createTestCommentQuery,
        variables: object,
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export const updateTestComment = (userData) => {
    axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
        query: updateTestCommentQuery,
        variables: {...userData}
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export const createQuestionComment = (object) => {
    return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
        query: createQuestionCommentQuery,
        variables: object,
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export const updateQuestionComment = (userData) => {
    axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
        query: updateQuestionCommentQuery,
        variables: {...userData}
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
