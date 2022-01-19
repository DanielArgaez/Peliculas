import React from "react";
import { Link } from "react-router-dom";
import { 
  Nav, Navbar, NavDropdown, Container, Form, FormControl, Tooltip, 
  OverlayTrigger, Button, Row, Col, Carousel, Card
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Login = () => {
  return (
    <section className="Buscador">
    <Container style={{'padding': '20px', maxWidth: '500px'}}>
    <h2>Iniciar Sesion</h2>
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
  </Container>
  </section>
  );
};

export default Login;