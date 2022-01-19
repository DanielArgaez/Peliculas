import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { 
  Nav, Navbar, NavDropdown, Container, Form, FormControl, Tooltip, 
  OverlayTrigger, Button, Row, Col, Carousel, Card
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from 'react-router-dom';
import WithListLoading from './CargandoList';
import Listdatos from './Peli/PeliculaComp';

//Pagina para ver la info de la pelicula
const PeliculaView = () => {

  // CON ESTO OBTENEMOS LA ID DEL LINK/RUTA: "pelicula/{id}/"
  const { id } = useParams();
  console.log("id", id) 

  const ListLoading = WithListLoading(Listdatos);
  //Creamos los set que serivan para obtener los datos que pidamoas de la api
  const [pelicula, setPelicula] = useState({
    loading: false,
    datos: null
  });
  const [listaPeliculas, setListaPeliculas] = useState({
    loading: false,
    datos: null
  });

  // ESTA FUNCION SIRVE PARA QUE SE HAGA ALGO APENAS ENTRE LA PAGINA
  useEffect(async () =>  {
    //Obtenemos la pelicula con la id que nos dieron
    await setPelicula({ loading: true });
    const apiUrl = `http://localhost:8000/api/pelicula/${id}`; // USAMOS EL ID QUE OBTUVIMOS DEL LINK
    await fetch(apiUrl)
      .then((res) => res.json())
      .then(async (resp) => {
        await setPelicula({loading: false, datos: resp });
        console.log(resp)
    });

    //Obtenemos las peliculas para mostrarlas a la derecha
    await setListaPeliculas({ loading: true });
    await fetch(`http://localhost:8000/api/peliculas`)
      .then((res) => res.json())
      .then(async (resp) => {
        await setListaPeliculas({loading: false, datos: resp });
        console.log(listaPeliculas)
    });

  }, [setPelicula, setListaPeliculas]); //Aqui ponemos los sets que hicimos arriba

  
  return (
    <section className="PeliculaView">
      {/* Si hay datos de la pelicula entonces lo mostramos, de lo contrario no mostramos nada */}
    {pelicula.datos ? (
    <Container style={{'padding': '20px'}}>
    <h2>{`${pelicula.datos.nombre}`} ({`${pelicula.datos.fecha}`})</h2>
    <Row>
      <Col>
        <Row>
          <Col>
            <img src={pelicula.datos.imagen} width="300" height="407" />
          </Col>
          <Col>
            <div class="desc1 span_3_of_2">
                  <p class="datos_option"><strong>Fecha: </strong>{`${pelicula.datos.fecha}`}</p>
                  <p class="datos_option"><strong>Director: </strong>{`${pelicula.datos.directores[0].nombre}`}</p>
                  <p class="datos_option"><strong>Rango: </strong>{`${pelicula.datos.rango}`}/5</p> 
                    <p class="datos_option"><strong>Duracion: </strong>{`${pelicula.datos.duracion}`} min</p> 
                  <div class="down_btn">
                <Button type="submit" className="btn btn-danger mb-2" 
                        size="lg" >
                <FontAwesomeIcon icon="heart" /> Favorito
                </Button></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{textAlign: 'justify', textJustify: 'inter-word', marginTop: '8px'}}>{`${pelicula.datos.descripcion}`}</p>
          </Col>
        </Row>
      </Col>

      <Col  xs="3">
        <ListLoading isLoading={listaPeliculas.loading} repos={listaPeliculas.datos} />      
      </Col>
    </Row>
    {/* no mostraos nada porque no hay datos de la pelicula */}
  </Container>) : ( <></>)} 
  </section>
  
  );
}

export default PeliculaView;