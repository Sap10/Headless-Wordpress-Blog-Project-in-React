import * as actionTypes from './actionsTypes';
import axios from '../../axios-post';

export const singlePostFetchStart = () => {
    return{
        type:actionTypes.SINGLE_POST_FETCH_START
    }
} 

export const singlePostFetchSuccess = post => {
    return{
        type:actionTypes.SINGLE_POST_FETCH_SUCCESS,
        post:post
    }
}

export const singlePostFetchFailure = err => {
    return{
        type:actionTypes.SINGLE_POST_FETCH_FAILURE,
        error:err
    }
}

export const singlePostFetch = id => {
    return dispatch => {
        dispatch(singlePostFetchStart());
        axios.get(`wp-json/wp/v2/posts/${id}`)
            .then(res=>{
                dispatch(singlePostFetchSuccess(res.data));
            })
            .catch(err=>{
                dispatch(singlePostFetchFailure(err));
            });
    }
}