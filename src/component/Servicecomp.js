import React from 'react'
import styled from 'styled-components';
import { Container,Card,Button} from 'react-bootstrap';
import Data from './data/data.json';

const Styleserv = styled.div`
.card-center{
    justify-content:center;
}
`

function Servicecomp() {
    return (
        <Styleserv>
        <Container className = "text-center">
        <div className="m-5">
                <h1>Our Services</h1>
                <p className="par">Consectetur adipiscing nullam munc justo sagittls ultrices</p>
        </div>
        <div className = "row card-center">
        {Data.map(post => {
            return(
                <div className = "col-sm-3 m-1 " key = { post.id}>
                <Card.Img width = "100%" src = {post.img} alt= {post.name} fluid/>
                <Card.Body> 
                <Card.Title>{post.name}</Card.Title>
                <Card.Text>{post.preview}</Card.Text>
                </Card.Body>
                </div>
            )
        })}
        </div>
        </Container>
        </Styleserv>
    )
}

export default Servicecomp
