import * as actionsTypes from '../actions/actionsTypes';
//import { singlePostFetchFailure, singlePostFetchStart, singlePostFetchSuccess } from '../actions/singlePost';
import {updateObject} from '../utility';

const initialState = {
    post:{},
    loading:false,
    error:null,
    path:false
}

const singlePostFetchStart = (state,action) => {
    return updateObject(state,{loading:true})
}

const singlePostFetchSuccess = (state,action) => {
    return updateObject(state,{post:action.post,loading:false})
}

const singlePostFetchFailure = (state,action) => {
    return updateObject(state,{loading:false,error:action.error})
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionsTypes.SINGLE_POST_FETCH_START: return singlePostFetchStart(state,action);
        case actionsTypes.SINGLE_POST_FETCH_SUCCESS: return singlePostFetchSuccess(state,action);
        case actionsTypes.SINGLE_POST_FETCH_FAILURE: return singlePostFetchFailure(state,action);
        default:
            return state;
    }
}

export default reducer;