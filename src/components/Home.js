import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { 
  Nav, Navbar, NavDropdown, Container, Form, FormControl, Tooltip, 
  OverlayTrigger, Button, Row, Col, Carousel, Card
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WithListLoading from './CargandoList';
import ListMovie from './Peli/PeliculaComp';

const Home = () => {
  // Empezamos la parte de "cargando...", usamos la funcion WithListLoading con el componente ListMovie
  // para generar las peliculas en una lista y mostrarlos
  const ListLoading = WithListLoading(ListMovie);
  const [peliculas, setListaPeliculas] = useState({
    loading: false,
    datos: null,
  });

  useEffect(() => {
    setListaPeliculas({ loading: true });
    const apiUrl = `http://localhost:8000/api/peliculas`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setListaPeliculas({ loading: false, datos: repos });
      });
  }, [setListaPeliculas]);
  return (
    <section className="Home">
    <Container style={{'padding': '0px'}}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://p.w3layouts.com/demos/movie_store/web/images/banner2.jpg"
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://p.w3layouts.com/demos/movie_store/web/images/banner.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://p.w3layouts.com/demos/movie_store/web/images/banner1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
    <Container style={{'padding': '9px'}}>
      <h2>Peliculas Destacadas</h2>
      <Row xs={1} md={5} className="g-4">      
      <ListLoading isLoading={peliculas.loading} repos={peliculas.datos} />
    </Row>
    </Container>
    </section>
  );
};

export default Home;