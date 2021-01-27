import * as actionTypes from './actionsTypes';
import axios from '../../axios-post';

export const paginationPostFetchStart = () => {
    return{
        type:actionTypes.PAGINATION_POST_FETCH_START
    }
}

export const paginationPostFetchSuccess = (posts,currentPage,totalPage) => {
    return{
        type:actionTypes.PAGINATION_POST_FETCH_SUCCESS,
        posts:posts,
        currentPage:currentPage,
        totalPage:totalPage
    }
}

export const paginationPostFetchFailure = error => {
    return{
        type:actionTypes.PAGINATION_POST_FETCH_FAILURE,
        error:error
    }
}

export const setCurrentPage = currentPage => {
    return{
        type:actionTypes.SET_CURRENT_PAGE,
        currentPage:currentPage 
    }
}

export const paginationPostFetch = (pageNo) => {
    return dispatch => {
        dispatch(paginationPostFetchStart());
        axios.post(`wp-json/allposts/v1/posts?page_no=${pageNo}`)
        .then(res=>{
            if(res.status === 200){
                console.log(res);
                dispatch(paginationPostFetchSuccess(res.data.posts_data,pageNo,res.data.page_count));
            }else{
                dispatch(paginationPostFetchFailure(res.message));
            }
        })
        .catch(err=>{
            dispatch(paginationPostFetchFailure(err));
        })
    }
}