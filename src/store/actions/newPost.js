 import * as actionTypes from './actionsTypes';
 import axios from '../../axios-post';

 export const postCreateStart = () => {
     return{
         type:actionTypes.NEW_POST_CREATE_START
     }
 }

 export const postCreateSuccess = (token) => {
     return{
         type:actionTypes.NEW_POST_CREATE_SUCCESS,
         token:token
     }
 }

 export const postCreateFailure = err => {
     return {
         type:actionTypes.NEW_POST_CREATE_FAILURE,
         error:err
     }
 }

 export const newPostTitle = param => {
     return {
         type:actionTypes.NEW_POST_TITLE,
         title:param
     }
 }
 
 export const newPostContent = param => {
     return {
         type:actionTypes.NEW_POST_CONTENT,
         payload:param
     }
 }

 export const newPost = (title,content) => {
     return dispatch => {
        dispatch(postCreateStart());
        const token = localStorage.getItem('token');
        const data = {
            title:title,
            content:content,
            status:'publish'
        }
        axios.post(`/wp-json/wp/v2/posts`,data,{
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            }
        })
            .then(res=>{
                console.log(res);
                dispatch(postCreateSuccess(token))
            })
            .catch(err=>{
                console.log(err);
                dispatch(postCreateFailure(err))
            })
     }
 }