import React from 'react';
import { Container, Row, Col,Image,Button } from 'react-bootstrap';
import styled from 'styled-components';

const Aboutstyle = styled.div`
h1{
    color:violet;
}
.Apar{
    color:grey;
}
`

export default function Aboutcomp(){
    return(
        <Container>
            <Aboutstyle>
            <Row>
                <Col sm = {6} className = "mt-5 p-5">
                    <h1>About us</h1>
                    <p class = "Apar">A report is a document that presents information in an organized format for a specific audience and purpose.</p>
                    <br/>
                    <Button variant="warning" onClick={() => window.open('mailto:email@example.com?subject=Subject&body=Body%20goes%20here')} >Send Mail</Button>
                </Col>
                <Col>
                    <Image className = "p-2" src="../about.png" fluid/>
                </Col>
            </Row>
            </Aboutstyle>
        </Container>
    )
}