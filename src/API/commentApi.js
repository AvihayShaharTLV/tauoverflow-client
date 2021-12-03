import { createCourseCommentQuery } from '../Queries/CommentQueries'
import { updateCourseCommentQuery } from '../Queries/CommentQueries'
import { createTestCommentQuery } from '../Queries/CommentQueries'
import { updateTestCommentQuery } from '../Queries/CommentQueries'
import { createQuestionCommentQuery } from '../Queries/CommentQueries'
import { updateQuestionCommentQuery } from '../Queries/CommentQueries'

import axios from 'axios'

// Comment functions
export const createCourseComment = (userData) => {
    axios.post('http://localhost:5000/graphql', {
        query: createCourseCommentQuery,
        variables: {...userData}
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export const updateCourseComment = (userData) => {
    axios.post('http://localhost:5000/graphql', {
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

  export const createTestComment = (userData) => {
    axios.post('http://localhost:5000/graphql', {
        query: createTestCommentQuery,
        variables: {...userData}
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export const updateTestComment = (userData) => {
    axios.post('http://localhost:5000/graphql', {
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

  export const createQuestionComment = (userData) => {
    axios.post('http://localhost:5000/graphql', {
        query: createQuestionCommentQuery,
        variables: {...userData}
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export const updateQuestionComment = (userData) => {
    axios.post('http://localhost:5000/graphql', {
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
