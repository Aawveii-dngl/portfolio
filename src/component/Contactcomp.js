import React from 'react';
import {Button,Form,Container,Row,Col } from 'react-bootstrap';

export default function Contactcomp(){
    return(
        <div>
        <Row>
            <Col>
            <div class = "p-5">
            <h1>GET IN TOUCH</h1>
            <h4>Hey we are looking forward to start a project with you</h4>
            <p>The term déjà vu is French and means, literally, "already seen." Those who have experienced the feeling describe it as an overwhelming sense of familiarity with something that shouldn't be familiar at all. Say, for example, you are traveling to England for the first time</p>
            </div>
            </Col>
            <Col>
            <div class = "mt-5 p-5 ">
            <Form class = "p-5 ">
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter your Name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter a valid email address" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3}  placeholder="Enter your message"/>
            </Form.Group>
            <Form.Check type="checkbox" className="my-1 mr-sm-2 a" label="I accept the Terms of Service"/>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </div>
            </Col>
        </Row>
        </div>
    )
}