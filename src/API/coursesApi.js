import { getAllCoursesQuery } from '../Queries/courseQueries'
import { getAllCourseDiscussionsQuery } from '../Queries/courseQueries'
import { getAllTestByCourseQuery } from '../Queries/courseQueries'
import axios from 'axios'

export const getAllCourses = () => {
    return axios.post('http://localhost:5000/graphql', {
        query: getAllCoursesQuery,
        variables: {}
      })
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        console.log(error);
      });
}

// From here - the updated functions!!! all of the abve - examples !!!!!!!

export const getAllCourseDiscussions = () => {
  axios.post('http://localhost:5000/graphql', {
      query: getAllCourseDiscussionsQuery,
      variables: {}
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const getAllTestByCourse = () => {
  axios.post('http://localhost:5000/graphql', {
      query: getAllTestByCourseQuery,
      variables: {}
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}