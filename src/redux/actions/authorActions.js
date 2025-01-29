import * as types from "./actionTypes"
import * as authorApi from '../../api/authorApi'
import { beginAPICall } from "./apiStatusActions"


// export function loadAuthorSuccess(authors) {}



export function loadAuthors() {
    return function(dispatch) {
        console.log('authors thunk called')
        dispatch(beginAPICall())
        return authorApi.getAuthors().then(authors => {
            dispatch({type: types.LOAD_AUTHORS, authors})
        }).catch(error => {
            throw error
        })
    }
}
