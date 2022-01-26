import { getAllDepartmentsQuery } from '../Queries/departmentsQueries'
import { getAllCoursesInDepartmentsQuery } from '../Queries/departmentsQueries'

import axios from 'axios'

export const getAllDepartments = () => {
    return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
        query: getAllDepartmentsQuery, 
        variables: {}
    })
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const getAllCoursesInDepartments = () => {
    return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
        query: getAllCoursesInDepartmentsQuery, 
        variables: {}
    })
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            console.log(error);
        });
}
