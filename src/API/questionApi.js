import { getAllQuestionsRateQuery } from '../Queries/questionQueries'
import { getAllQuestionsUserRateQuery } from '../Queries/questionQueries'
import { getAllQuestionDiscussionsQuery } from '../Queries/questionQueries'
import { getAllQuestionDiscussionsCommentsQuery } from '../Queries/questionQueries'
import {  } from '../Queries/questionQueries'
import {  } from '../Queries/questionQueries'
import {  } from '../Queries/questionQueries'


import axios from 'axios'

// Question functions
export const getAllQuestionsRate = () => {
  axios.post('http://localhost:5000/graphql', {
      query: getAllQuestionsRateQuery,
      variables: {}
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const getAllQuestionsUserRate = () => {
  axios.post('http://localhost:5000/graphql', {
      query: getAllQuestionsUserRateQuery,
      variables: {}
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const  getAllQuestionDiscussions = () => {
  axios.post('http://localhost:5000/graphql', {
      query: getAllQuestionDiscussionsQuery,
      variables: {}
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const  getAllQuestionDiscussionsComments = () => {
  axios.post('http://localhost:5000/graphql', {
      query: getAllQuestionDiscussionsCommentsQuery,
      variables: {}
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

