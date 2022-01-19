import React from 'react';

import { 
  Nav, Navbar, NavDropdown, Container, Form, FormControl, Tooltip, 
  OverlayTrigger, Button, Row, Col, Carousel, Card
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

{/* Se crea el HTML de cada pelicula, para que se muestre en la lista, solamente se le pasa el array que obtenemos
de la api */}
const ListMovie = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No hay peliculas.</p>;
  return (
    <>
      {repos.map((repo) => {
        return (
          <Col>
            <Card>         
              <a href={`/pelicula/${repo.id}`}>
              <div class="grid_2">
              <Card.Img variant="top" src={repo.imagen} />
              <div class="caption1">
                  <ul class="list_5">
                      <li> <p><FontAwesomeIcon icon="heart" /> {repo.rango}</p></li>
                    </ul>
                    <p class="m_3">{repo.nombre}</p>
              </div>
                </div>
              </a>
            </Card>
          </Col>
        );
      })}
    </>
  );
};
export default ListMovie;