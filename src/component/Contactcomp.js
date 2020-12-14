import React,{Component} from 'react';
import {Button,Container,Row,Col} from 'react-bootstrap';
import {FaGithub, FaLinkedin,FaYoutube } from "react-icons/fa";
import { IconContext } from 'react-icons';
import {Control,LocalForm,Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) =>(val) => !(val) || (val.length <=len);
const minLength = (len) =>(val) => (val) && (val.length >=len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const Checked = (val) => val;


export default class Contactcomp extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             agree:'false',
             password:'',
             confpassword:''
        }
    }

    Clicked = () =>{
        this.setState({agree:!this.state.agree})
        console.log(this.state.agree)
    }

    Pass = (e) =>{
        this.setState({password:e.target.value})
        console.log(this.state.password)
    }

    confPass = (event) => {
         if (event.target.value !== this.state.password) { 
             <p>Error</p>
              this.setState({confpassword: event.target.value}) } }
    
    handlerSubmit(values){
        console.log(JSON.stringify(values));
        alert(JSON.stringify(values));
    }

    render(){
    return(
        <Container>
        <Row>
            <Col>
            <div className = "p-5">
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
            <div className = "mt-5 p-5 ">
            <LocalForm className = "p-5 " onSubmit = {(values) => this.handlerSubmit(values)}>
                <Row className = "form-group" >
                    <Col>
                        <Control.text model = ".name"
                        name = "name"
                        className = "form-control"
                        placeholder="Enter your Name"
                        validators = {{
                            required, minLength:minLength(3), maxLength:maxLength(15)
                        }} 
                        />
                        <Errors
                            className="text-danger"
                            model=".name"
                            show="touched"
                            messages= {{
                                required:'Required',
                                minLength:'Must be greater than two characters',
                                maxLength:'Must be less tham 15 characters'
                            }}
                        />
                    </Col>
                </Row>

                <Row className = "form-group" >
                    <Col>
                        <Control.text model = ".email"
                        name="email" 
                        className = "form-control"
                        placeholder="Enter a valid email address"
                        validators = {{
                            required,validEmail
                        }}
                        />
                        <Errors
                        className="text-danger"
                        model=".email"
                        show="touched"
                        messages= {{
                            required:'Required',
                            validEmail:'Use a proper email address'
                        }}
                        />  
                    </Col>
                </Row>
                <Row className = "form-group" >
                    <Col>
                        <Control.text model = ".password"
                        name="password" 
                        className = "form-control"
                        placeholder="Enter password"
                        onChange = {this.Pass}
                        validators = {{
                            required
                        }}
                        />
                        <Errors
                        className="text-danger"
                        model=".password"
                        show="touched"
                        messages= {{
                            required:'Required'
                        }}
                        />  
                    </Col>
                </Row>
                <Row className = "form-group" >
                <Col>
                    <Control.text model = ".confpassword"
                    name="confpassword" 
                    className = "form-control"
                    placeholder="Enter password again"
                    onChange = {this.confPass}
                    validators = {{
                        required
                    }}
                    />
                    <Errors
                    className="text-danger"
                    model=".confpassword"
                    show="touched"
                    messages= {{
                        required:'Required',
                    }}
                    />  
                </Col>
                </Row>
                <Row className = "form-group" >
                    <Col>
                    <Control.textarea model = ".message"
                        name = "message"
                        className = "form-control"
                        placeholder="Enter your message"/>
                    </Col>
                </Row>
                <Row className = "form-group">
                    <Col>
                    <Control.checkbox model =".agree"
                        name = "agree" 
                        onClick = {this.Clicked}
                        className = "form-check-input"
                        validators = {{
                            Checked
                        }}
                    />
                    {' '}
                    <strong>i accept terms and services</strong>
                    <Errors
                    className="text-danger"
                    model=".agree"
                    
                    messages= {{
                        Checked:'Please accept our condition'
                    }}
                    /> 
                    </Col>
                </Row>
                <Button 
                    variant="primary" 
                    type="submit"
                    disabled={this.state.agree}>
                    Submit
                </Button>
            </LocalForm>
            </div>
            </Col>
        </Row>
        </Container>
    )
}
}