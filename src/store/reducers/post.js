import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../utility';

const initialState = {
    posts:[],
    loading:false,
    error:null
}

const postFetchStart = (state,action) => {
    return updateObject(state,{loading:true})
}

const postFetchSuccess = (state,action) => {
    return updateObject(state,{loading:false,posts:action.posts})
}

export const postFetchFailure = (state,action) => {
    return updateObject(state,{loading:false,error:action.error})
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.POST_FETCH_START: return postFetchStart(state,action);
        case actionTypes.POST_FETCH_SUCCESS: return postFetchSuccess(state,action);
        case actionTypes.POST_FETCH_FAILURE: return postFetchFailure(state,action);
        default:
            return state;
    }
}

export default reducer;