import React, {useEffect } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import { Container} from 'react-bootstrap';
import Post from './post';

const Posts = props =>{

    useEffect(()=>{
        props.onFetchPosts();
    },[]);

    const posts = (
        props.posts.map(post=>{
            return <Post key={post.id} 
            title={post.title.rendered} 
            description={post.excerpt.rendered}
            id={post.id}
            />
        })
    );

    console.log(props.posts);
    return(
    <Container>
    {posts}
      </Container>
    );

}

const mapStateToProps = state => {
    return {
        posts:state.posts.posts,
        loading:state.posts.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts:()=>dispatch(actions.postFetch())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Posts);