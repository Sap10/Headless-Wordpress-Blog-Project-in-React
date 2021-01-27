import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../utility';

const initialState = {
    currentPage:1,
    totalPages:1,
    loading:false,
    error:null,
    posts:null
}

const postFetchStart = (state,action) => {
    return updateObject(state,{loading:true});
}

const postFetchSuccess = (state,action) => {
    return updateObject(state,{
        loading:false,
        posts:action.posts,
        currentPage:action.currentPage,
        totalPages:action.totalPage
    });
}

const postFetchFailure = (state,action) => {
    return updateObject(state,{loading:false,error:action.error});
}

const setCurrentPage = (state,action) => {
    return updateObject(state,{currentPage:action.currentPage});
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.PAGINATION_POST_FETCH_START : return postFetchStart(state,action);
        case actionTypes.PAGINATION_POST_FETCH_SUCCESS: return postFetchSuccess(state,action);
        case actionTypes.PAGINATION_POST_FETCH_FAILURE: return postFetchFailure(state,action);
        case actionTypes.SET_CURRENT_PAGE: return setCurrentPage(state,action);
        default:
            return state;
    }
}

export default reducer;