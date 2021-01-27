import React from 'react';
import {Accordion,Button,Card} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

const Sidebar = props => {

  const userName = localStorage.getItem('userName');

  const addPost = (userName) =>{
    props.history.push(`/dashboard/${userName}/create-post`);
  }

    return(
      <>
      <nav id="sidebar" class="sidebar-wrapper">
      <div class="sidebar-content">
        <div class="sidebar-brand">
           
        </div>
        <div class="sidebar-header">

        </div>

      
        <div class="sidebar-menu">
        <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body onClick={()=>addPost(userName)}>New Post</Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hel</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
        </div>
    
      </div>
    
      <div class="sidebar-footer">
        
      </div>
    </nav>
    </>
    );
}

export default withRouter(Sidebar);