import React from 'react';
import { Nav } from 'react-bootstrap';

function Navigate(){
    return(
        <Nav className="justify-content-end" activeKey="/">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Contact us</Nav.Link>
          </Nav.Item>
        </Nav>
    );
}

export default Navigate;