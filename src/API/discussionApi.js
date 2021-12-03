import { createCourseDiscussionQuery } from '../Queries/CommentQueries'
import { updateCourseDiscussionQuery } from '../Queries/CommentQueries'
import { createTestDiscussionQuery } from '../Queries/CommentQueries'
import { updateTestDiscussionQuery } from '../Queries/CommentQueries'
import { createQuestionDiscussionQuery } from '../Queries/CommentQueries'
import { updateQuestionDiscussionQuery } from '../Queries/CommentQueries'

import axios from 'axios'

// Comment functions
export const createCourseDiscussion = (userData) => {
    axios.post('http://localhost:5000/graphql', {
        query: createCourseDiscussionQuery,
        variables: {...userData}
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export const updateCourseDiscussion = (userData) => {
    axios.post('http://localhost:5000/graphql', {
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

  export const createTestDiscussion = (userData) => {
    axios.post('http://localhost:5000/graphql', {
        query: createTestDiscussionQuery,
        variables: {...userData}
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export const updateTestDiscussion = (userData) => {
    axios.post('http://localhost:5000/graphql', {
        query: updateTestDiscussionQuery,
        variables: {...userData}
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export const createQuestionDiscussion = (userData) => {
    axios.post('http://localhost:5000/graphql', {
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
    axios.post('http://localhost:5000/graphql', {
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
