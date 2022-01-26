import { createCourseDiscussionQuery } from '../Queries/discussionQueries'
import { updateCourseDiscussionQuery } from '../Queries/discussionQueries'
import { createTestDiscussionQuery } from '../Queries/discussionQueries'
import { updateTestDiscussionQuery } from '../Queries/discussionQueries'
import { createQuestionDiscussionQuery } from '../Queries/discussionQueries'
import { updateQuestionDiscussionQuery } from '../Queries/discussionQueries'

import axios from 'axios'

// Comment functions
export const createCourseDiscussion = (object) => {
    return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
        query: createCourseDiscussionQuery,
        variables: object,
      })
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export const updateCourseDiscussion = (userData) => {
    axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
        query: updateCourseDiscussionQuery,
        variables: {...userData}
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export const createTestDiscussion = (object) => {
    return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
        query: createTestDiscussionQuery,
        variables: object,
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export const updateTestDiscussion = (object) => {
    return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
        query: updateTestDiscussionQuery,
        variables: object,
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export const createQuestionDiscussion = (userData) => {
    axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
        query: createQuestionDiscussionQuery,
        variables: {...userData}
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export const updateQuestionDiscussion = (userData) => {
    axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
        query: updateQuestionDiscussionQuery,
        variables: {...userData}
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
