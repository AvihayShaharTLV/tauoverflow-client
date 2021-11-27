import { getAllCoursesQuery } from '../Queries/courseQueries'
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