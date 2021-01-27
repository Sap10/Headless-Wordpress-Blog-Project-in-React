import React from 'react';
import {Card,Button,Row,Col} from 'react-bootstrap';
import renderHTML from 'react-render-html';
import {withRouter} from 'react-router-dom';

const post = props =>{
    
    const detailsSinglePoseRouter = id =>{
       props.history.push('/post/' + id);
    }

    return(
        <div className="my-5">
        <Row>
        <Col>
        <Card>
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {renderHTML(props.description)}
          </Card.Text>
          <Button variant="primary" onClick={()=>detailsSinglePoseRouter(props.id)}>View post</Button>
        </Card.Body>
     </Card>
     </Col>
     </Row>
     </div>
    );
}

export default withRouter(post);