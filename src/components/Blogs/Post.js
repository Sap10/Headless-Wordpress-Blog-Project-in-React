import React from 'react';
import {Card,Button,Row,Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

const Post = props => {

const fullPost = (id) => {
    props.history.push('/post/' + id);
}

return(
    <>
    <Row>
    <Col sm={12}>
    <Card className="my-5">
    <Card.Header>{props.date}</Card.Header>
    <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
    {props.excerpt}
    </Card.Text>
    <Button variant="primary" onClick={()=>fullPost(props.id)}>View Post</Button>
    </Card.Body>
    </Card>
    </Col>
    </Row>
    </>
    );
}

export default withRouter(Post);