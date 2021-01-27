import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../utility';

const initialState = {
    userName:'',
    password:'',
    token:'',
    userNiceName:'',
    userEmail:'',
    loggedIn:false,
    loading:false,
    error:null
}

const authStart = (state,action) =>{
    return updateObject(state,{loading:true})
}

const authSuccess = (state,action) =>{
    return updateObject(state,
        {
        loading:false,
        token:action.token,
        userNiceName:action.niceName,
        userEmail:action.user_email,
        loggedIn:true
    })
}

const authFailure = (state,action) =>{
    return updateObject(state,{loading:false,error:action.error})
}

const authLogout = (state,action) => {
    return updateObject(state,
        {
            token:null,
            userNiceName:null,
            userEmail:null,
            loggedIn:false
        });
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.AUTH_START:return authStart(state,action);
        case actionTypes.AUTH_SUCCESS:return authSuccess(state,action);
        case actionTypes.AUTH_FAILURE:return authFailure(state,action);
        case actionTypes.AUTH_LOGOUT:return authLogout(state,action);
        default:
            return state;
    }
}

export default reducer;