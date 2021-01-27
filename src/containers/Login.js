import React,{useState} from 'react';
import {Form,Button,Container,Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
import {Redirect} from 'react-router-dom';
import '../index.css';

const Login = props => {
    
  const [userName,setUserName] = useState(null);
  const [password,setPassword] = useState(null);

    const onFormSubmit = (event) =>{
        event.preventDefault();
        console.log(userName,password);
        props.onAuth(userName,password);
    }

    const handleUsernameChange = (event) => {
      setUserName(event.target.value);
    }

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    }

    let redirectPath = null;

    if(props.loggedIn){
      redirectPath = <Redirect to={`/dashboard/${localStorage.getItem('userName')}`}/>
    }


    return(
      <Container>
      <Row>
        <div className="mt-10 login_container">
        {redirectPath}
        <Form onSubmit={onFormSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" placeholder="Enter user name" value={userName} onChange={handleUsernameChange}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

</div>
</Row>
</Container>
    );
}

const mapStateToProps = state => {
  return {
    loggedIn:state.auth.loggedIn,
    userName:state.auth.userNiceName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth:(userName,password)=>dispatch(actions.auth(userName,password))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);