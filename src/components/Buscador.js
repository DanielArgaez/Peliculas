import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { 
  Nav, Navbar, NavDropdown, Container, Form, FormControl, Tooltip, 
  OverlayTrigger, Button, Row, Col, Carousel, Card
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WithListLoading from './CargandoList';
import ListMovie from './Peli/PeliculaComp';

const Buscador = () => {
  const ListLoading = WithListLoading(ListMovie);
  const [input, setInput] = useState(''); 
  const [appState, setAppState] = useState({
    loading: false,
    movies: null,
  });
  const apiUrl = `http://localhost:8000/api/peliculas/search/`;

  let buscar = (apiUrl, name = '') => {
    setAppState({ loading: true });
    setInput(name)
    fetch(`${apiUrl}${name}/`)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, movies: repos });
      });
  };

  useEffect(() => {
    //setAppState({ loading: true });
    //buscar(apiUrl)
  }, [setAppState]);

  return (
    <section className="Buscador">
    <Container style={{'padding': '20px'}}>
    <h2>Buscador</h2>
    <Form style={{
            border: '2px solid red',
            padding: '15px',
            borderRadius: '9px',
            paddingLeft: '40px',
            boxShadow: '4px 3px 4px red'
    }}>
        <Row className="align-items-center">
            <Col xs="10">
                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                    Name
                </Form.Label>
                <Form.Control
                value={input} onChange={e => buscar(apiUrl,e.target.value)}
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="Jane Doe"
                    size="lg" 
                />
            </Col>
            <Col xs="auto">
            <Button type="submit" className="mb-2" 
                    size="lg" >
            <FontAwesomeIcon icon="search" /> Buscar
            </Button>
            </Col>
        </Row>
        </Form>
    </Container>
  <Container style={{'padding': '9px'}}>
    <h2>Resultados de busqueda</h2>
    <Row xs={1} md={5} className="g-4">
      <ListLoading isLoading={appState.loading} repos={appState.movies} />
    </Row>
  </Container>
  </section>
  );
};

export default Buscador;