import React from 'react';
import { Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

const navbar = props =>{
    return(
        <>
  <div className="header">
  <Navbar bg="dark" variant="dark">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
       <NavLink to="/" className="nav-link">Home</NavLink>
    </li>
    { props.loggedIn? <li className="nav-item">
    <NavLink to="/logout" className="nav-link">Logout</NavLink>
    </li> : <li className="nav-item">
    <NavLink to="/login" className="nav-link">Login</NavLink>
    </li>}
    {props.loggedIn && <NavLink to="/dashboard/:username" className="nav-link">dashboard</NavLink>}
    <li className="nav-item">
    <NavLink to="/blogs" className="nav-link">Blogs</NavLink>
    </li>
    </ul>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  </div>
</>
    );
}

const mapStateToProps = state => {
  return{
    loggedIn:state.auth.loggedIn
  }
}

export default connect(mapStateToProps)(navbar);