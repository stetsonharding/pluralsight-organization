import * as types from "./actionTypes"
import * as authorApi from '../../api/authorApi'

// export function loadAuthorSuccess(authors) {}



export function loadAuthors() {
    return function(dispatch) {
        return authorApi.getAuthors().then(authors => {
            dispatch({type: types.LOAD_AUTHORS, authors})
        }).catch(error => {
            throw error
        })
    }
}
