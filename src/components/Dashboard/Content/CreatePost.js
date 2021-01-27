import React,{useEffect} from 'react';
import {Form,Button,Container,Row,Col,Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

const CreatePost = props => {

  // useEffect(()=>{
    
  // },[]);

  const handleFormSubmit = event =>{
    event.preventDefault();
    props.newPost(props.title,props.content);
  }
  
  const handleTitle = event => {
    props.setTitle(event.target.value);
  }

  const handleContent = event => {
    props.setContent(event.target.value);
  }

    return(
      <Container fluid="md">
    <Row>
        <Col>
        <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" name="title" value={props.title} onChange={handleTitle} />
      
        </Form.Group>
      
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Content</Form.Label>
        <Form.Control as="textarea" rows={3} name="content" value={props.content} onChange={handleContent}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Alert show={props.postCreated} variant="success" classname="mt-10">
        <Alert.Heading>Success!</Alert.Heading>
        <p>
          Successfully created
        </p>
        <hr />
      </Alert>
      <Alert show={props.error} variant="danger" classname="mt-10">
      <Alert.Heading>Error!</Alert.Heading>
      <p>
        An error occured!
      </p>
      <hr />
      </Alert>
      </Col>
      </Row>
      </Container>
    );
}

const mapStateToProps = state => {
  return{
    title:state.newPost.title,
    content:state.newPost.content,
    postCreated:state.newPost.postCreated,
    error:state.newPost.error
  }
}

const mapDispatchToProps = dispatch => {
  return{
    setTitle:(title)=>dispatch(actions.newPostTitle(title)),
    setContent:(content)=>dispatch(actions.newPostContent(content)) ,
    newPost:(title,content)=>dispatch(actions.newPost(title,content))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreatePost);