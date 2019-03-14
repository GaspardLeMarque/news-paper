import React, { Component } from 'react'
import { Container, Row, Col, Button, Nav, InputGroup, FormControl } from 'react-bootstrap'
export default class Header extends Component {
  render() {
    return (

        <Container>
            <Row>
                <Col className="col text text-center">
                    <h1>news paper</h1>
                </Col>
            </Row>
            <Row>
                <Col> 
                    <Nav className="justify-content-md-center">
                        <Nav.Link href="/Politics">Politics</Nav.Link>
                        <Nav.Link href="/Tech">Tech</Nav.Link>
                        <Nav.Link href="/Opinions">Opinion</Nav.Link>
                        <Nav.Link href="/Fun and Games">Fun&Games</Nav.Link>
                    </Nav>
                </Col>
            </Row>
    
            <Row>
                <Col>
                    <InputGroup size="lg">
                        <FormControl 
                            aria-label="Large" 
                            placeholder="Search what was lost..." 
                            aria-describedby="inputGroup-sizing-sm" 
                        />
                        <InputGroup.Append>
                            <Button variant="outline-primary btn-lg">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row> 
        </Container>

    )
  }
}
