import React from 'react';
import { Container,Image,Row,Col} from 'react-bootstrap';
import styled from 'styled-components';
import {FaGithub, FaLinkedin,FaYoutube } from "react-icons/fa";
import { IconContext } from 'react-icons';

const Style = styled.div`
.navbar {
    background-color: grey;
    margin: auto;
}
.navbar-brand, .navbar-nav, .nav-link{
    color: #bbb;
    
    &:hover{
        color:white;
    }
}
`

export default function Homecomp(){
    return(
        <Style>
            <Container >
            <Image width="180px" className="rounded mx-auto d-block" src="https://mma.prnewswire.com/media/960682/Thank_U_Next_LUXE_Brands.jpg?w=950" fluid />
            <h5>Ariana Grande</h5>
            <h6>Singer</h6>
            <hr/>
            VOCALIST | SONGWRITER 
            <br/>
            <IconContext.Provider value={{ color:'grey', size:'3rem',}} >
                 <Row className="justify-content-md-center">
                    <Col xs lg ="1"><a href= "https://github.com/Aawveii-dngl/portfolio"><FaGithub /></a></Col>
                    <Col xs lg ="1"><a href = "https://www.linkedin.com/in/"><FaLinkedin/></a></Col>
                    <Col xs lg ="1"><a href = "https://www.youtube.com/"><FaYoutube/></a></Col>
                </Row>
            </IconContext.Provider>
            </Container>
        </Style>
    )
}
