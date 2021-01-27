import React,{useEffect} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import renderHTML from 'react-render-html';

const SinglePost = props =>{
    const id = props.match.params.id;
    const path = props.match.path;
    useEffect(()=>{
        props.onFetchSinglePost(id);
    },[]);
    
    let heading = '';
    let body = '';

    for(let key in props.post.title){
        heading = props.post.title[key];
    }

    for(let key in props.post.content) {
        body = props.post.content[key];
        break;
    }

return(
   <Container>
    <Row>
      <Col xs={18} md={12}>
        <h1>{heading}</h1>
      </Col>
   
    </Row>
  
  
    <Row>
    <Col xs={18} md={12}>
    <p>{renderHTML(body)}</p>
    </Col>
    </Row>
  </Container>
)
}

const mapStateToProps = state => {
    return{
        post:state.singlePost.post
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onFetchSinglePost:(id)=>dispatch(actions.singlePostFetch(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SinglePost);