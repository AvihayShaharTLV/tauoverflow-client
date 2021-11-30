import { getAllUsersQuery, createUserQuery, updateUserQuery } from '../Queries/userQueries'
import axios from 'axios'

export const getAllUsers = () => {
    axios.post('http://localhost:5000/graphql', {
        query: getAllUsersQuery,
        variables: {}
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const createUser = (userData) => {
    axios.post('http://localhost:5000/graphql', {
        query: createUserQuery,
        variables: {...userData}
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const updateUser = (userData) => {
    axios.post('http://localhost:5000/graphql', {
        query: updateUserQuery,
        variables: {...userData}
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

// From here - the updated queries!!! all of the abve - examples !!!!!!!

export const getAllUserCourses = () => {
  axios.post('http://localhost:5000/graphql', {
      query: getAllUserCoursesQuery,
      variables: {}
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
