import {React,Component, StrictMode} from 'react';
import {Button,Form,Container,Row,Col, Alert } from 'react-bootstrap';
import {FaGithub, FaLinkedin,FaYoutube } from "react-icons/fa";
import { IconContext } from 'react-icons';

export default class Contactcomp extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            message:''
        }
    }
    Handlename = event => {
        this.setState({
            name:event.target.value
        });
    }
    handlerEmail = (event)=> {
        this.setState({
            email:event.target.value
        });
    }
    Handlemessage = event => {
        this.setState({
            message:event.target.value
        });
    }
    Handlesubmit = event =>{
        console.log(this.state);
        alert(`${this.state.name} ${this.state.email} ${this.state.message}`);
        event.preventDefault();
    }

    render(){
    return(
        <Container>
        
        <Row>
            <Col>
            <div class = "p-5">
            <h1>GET IN TOUCH</h1>
            <h4>Hey we are looking forward to start a project with you</h4>
            <p>The term déjà vu is French and means, literally, "already seen." Those who have experienced the feeling describe it as an overwhelming sense of familiarity with something that shouldn't be familiar at all. Say, for example, you are traveling to England for the first time</p>
            <IconContext.Provider value={{ color:'grey', size:'3rem',}} >
                 <Row className="justify-content-md-center">
                    <Col xs lg ="2"><a href= "https://github.com/Aawveii-dngl/portfolio"><FaGithub /></a></Col>
                    <Col xs lg ="2"><a href = "https://www.linkedin.com/in/rakesh-shrestha-180171186/"><FaLinkedin/></a></Col>
                    <Col xs lg ="2"><a href = "https://www.youtube.com/"><FaYoutube/></a></Col>
                </Row>
            </IconContext.Provider>
            </div>
            </Col>
            <Col>
            <div class = "mt-5 p-5 ">
            <Form class = "p-5 " onSubmit = {this.Handlesubmit}>
            <Form.Group >
                <Form.Control type="text" placeholder="Enter your Name" value = {this.state.name} onChange = {this.Handlename}/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter a valid email address" value = {this.state.email} onChange = {this.handlerEmail}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control type="textarea" rows={3}  placeholder="Enter your message" value = {this.state.message} onChange = {this.Handlemessage}/>
            </Form.Group>
            <Form.Check type="checkbox" className="my-1 mr-sm-2 a" label="I accept the Terms of Service"/>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </div>
            </Col>
        </Row>
        </Container>
    )
}
}