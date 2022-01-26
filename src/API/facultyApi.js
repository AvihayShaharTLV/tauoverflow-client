import { getAllFacultiesQuery } from '../Queries/facultiesQueries'

import axios from 'axios'

export const getAllFaculties = () => {
    return axios.post('https://tauoverflow-server-xkrnxu6gaq-uw.a.run.app/graphql', {
        query: getAllFacultiesQuery,
        variables: {}
    })
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            console.log(error);
        });
}