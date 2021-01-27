 import * as actionTypes from './actionsTypes';
 import axios from '../../axios-post';

 export const authStart = () => {
    return{
        type:actionTypes.AUTH_START
    }
 }

 export const authSuccess = (token,userNiceName,user_email) => {
     return{
         type:actionTypes.AUTH_SUCCESS,
         token:token,
         niceName:userNiceName,
         user_email:user_email
     }
 }

 export const authFailure = error => {
     return{
         type:actionTypes.AUTH_FAILURE,
         error:error
     }
 }

 export const auth = (userName,password) => {
     return dispatch => {
         dispatch(authStart());
         const authData = {
            username:userName,
            password:password
         }
         axios.post(`/wp-json/jwt-auth/v1/token`,authData)
            .then(res=>{
                //console.log(res.data);
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('userName',res.data.user_nicename);
                localStorage.setItem('userEmail',res.data.user_email);
                dispatch(authSuccess(res.data.token,res.user_nicename,res.user_email));
            })
            .catch(err=>{
                //console.log(err);
                dispatch(authFailure(err));
            })
     }
 }

 export const logout = () =>{
     localStorage.removeItem('token');
     localStorage.removeItem('userName');
     localStorage.removeItem('userEmail');
     return {
         type:actionTypes.AUTH_LOGOUT
     }
 }

 export const authCheckState = () => {
     return dispatch => {
         const token = localStorage.getItem('token');
         const userName = localStorage.getItem('userName');
         const userEmail = localStorage.getItem('userEmail');
         if(!token){
             dispatch(logout());
         }else{
             dispatch(authSuccess(token,userName,userEmail));
         }
     }
 }