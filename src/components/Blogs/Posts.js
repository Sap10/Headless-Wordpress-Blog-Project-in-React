import React,{useEffect} from 'react';
import * as actions from '../../store/actions/index';
import Post from './Post';
import Pagination from './Pagination';
import {connect} from 'react-redux';
import {Container} from 'react-bootstrap';

const Posts = props => {
    
    const {pageId} = props;
    let currPage = Number(props.currentPage);
    let total_page = Number(props.totalPage);
    
    useEffect(()=>{
        props.paginationPosts(currPage);
    },[pageId]);

    const posts = props.allPosts && props.allPosts.map((post,index)=>{
     return (
         <Post key={index} 
         title={post.title} 
         excerpt={post.excerpt} 
         date={post.date}
         id={post.id}
         />
     )
    });

    return(
        <React.Fragment>
        <Container>
        {posts}
        </Container>
        <div className="mb-5">
        <Pagination currentPage={currPage} totalPage={total_page} 
        />
        </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        currentPage:state.pagination.currentPage,
        allPosts:state.pagination.posts,
        totalPage:state.pagination.totalPages
    }
}

const mapDispatchToProps = dispatch => {
    return {
        paginationPosts:(pageNo)=>dispatch(actions.paginationPostFetch(pageNo)),
        setCurrentPage:(currentpage)=>dispatch(actions.setCurrentPage(currentpage))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);