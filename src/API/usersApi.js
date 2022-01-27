import { getAllUsersQuery, createUserQuery, updateUserQuery, createUserCourseQurey,getAllUserCoursesQuery, deleteUserCourseQurey } from '../Queries/userQueries'
import axios from 'axios'

export const getAllUsers = () => {
  return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
    query: getAllUsersQuery,
    variables: {}
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const createUser = (object) => {
  return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
    query: createUserQuery,
    variables: object,
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log('could not create a user', error);
    });
}


// // From here - the updated queries!!! all of the abve - examples !!!!!!!

export const getAllUserCourses = () => {
  return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
    query: getAllUserCoursesQuery,
    variables: {}
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const createUserCourse = (object) => {
  return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
    query: createUserCourseQurey,
    variables: object
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const deleteUserCourse = (object) => {
  return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
      query: deleteUserCourseQurey,
      variables: object,
    })
    .then(function (response) {
     return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

