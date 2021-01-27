import * as actionTypes from './actionsTypes';
import axios from '../../axios-post';

export const postFetchStart = () => {
    return{
        type:actionTypes.POST_FETCH_START
    }
}
 
export const postFetchSuccess = posts => {
    return{
        type:actionTypes.POST_FETCH_SUCCESS,
        posts:posts
    }
}

export const postFetchFailure = error => {
    return{
        type:actionTypes.POST_FETCH_FAILURE,
        error:error
    }
}

export const postFetch = () => {
    return dispatch => {
        dispatch(postFetchStart());
        axios.get(`wp-json/wp/v2/posts`)
        .then(res=>{
            dispatch(postFetchSuccess(res.data));
        })
        .catch(err=>{
            dispatch(postFetchFailure(err));
        });
    }
}