import { getAllCoursesQuery } from '../Queries/courseQueries'
import { getAllCourseDiscussionsQuery } from '../Queries/courseQueries'
import { getAllCourseDiscussionCommentsQuery } from '../Queries/courseQueries'

import axios from 'axios'

export const getAllCourses = () => {
    return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
        query: getAllCoursesQuery,
        variables: {}
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
}

// From here - the updated functions!!! all of the abve - examples !!!!!!!

export const getAllCourseDiscussions = () => {
  return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
      query: getAllCourseDiscussionsQuery,
      variables: {}
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const getAllCourseDiscussionComments = () => {
  return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
      query: getAllCourseDiscussionCommentsQuery,
      variables: {}
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

