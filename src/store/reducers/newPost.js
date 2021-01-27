import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../utility';

const initialState = {
    title:'',
    content:'',
    userid:'',
    token:'',
    postCreated:false,
    loading:false,
    error:null
}

const postCreateStart = (state,action) => {
    return updateObject(state,{loading:true});
}

const postCreateSuccess = (state,action) => {
    return updateObject(state,{
        loading:false,
        token:action.token,
        postCreated:true
    });
}

const postCreateFailure = (state,action) => {
    return updateObject(state,{
        loading:false,
        error:action.error
    });
}

const postTitle = (state,action) => {
    return updateObject(state,{
        title:action.title
    });
}

const newPostContent = (state,action) => {
    return updateObject(state,{
        content:action.payload
    });
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.NEW_POST_CREATE_START:return postCreateStart(state,action);
        case actionTypes.NEW_POST_CREATE_SUCCESS:return postCreateSuccess(state,action);
        case actionTypes.NEW_POST_CREATE_FAILURE:return postCreateFailure(state,action);
        case actionTypes.NEW_POST_TITLE:return postTitle(state,action);
        case actionTypes.NEW_POST_CONTENT:return newPostContent(state,action);
        default:
            return state;
    }
}

export default reducer;