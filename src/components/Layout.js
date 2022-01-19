import { Outlet, Link } from "react-router-dom";
import { 
    Nav, Navbar, NavDropdown, Container, Form, FormControl, Tooltip, 
    OverlayTrigger, Button, Row, Col 
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * 
 * TEMPLATE PRINCIPAL
 * MENU
 * ----
 * CONTENIDO
 * ----
 * PIE DE PAGINA
 * **/

const Layout = () => {
  return (
    <>
    
    <Container  style={{'background': 'white', marginTop: '15px', borderRadius: '4px', border: 'solid 0px white', padding: '0px'}}>
        {/* Menu */}
        <Navbar  expand="lg" bg="light" variant="light" style={{borderRadius: '4px 4px 0px 0px'}}>
            <Container>
                <Navbar.Brand href="/"><span style={{color: '#d8232a'}}><FontAwesomeIcon icon="ticket-alt" /></span> Peliculas</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />            
                <Navbar.Collapse  className='mr-auto' id="basic-navbar-nav">
                    <Nav bg="light" variant="light" className="justify-content-center" style={{ flex: 1}}>
                        <OverlayTrigger key="bottom" placement="bottom"
                            overlay={<Tooltip id={`tooltip-bottom`} >Inicio</Tooltip>}>
                                {/* Nav.Link sirve para entrar a la ruta que asignamos en APP.js */}
                            <Nav.Link href="/">
                                <FontAwesomeIcon icon="home" />
                            </Nav.Link>
                        </OverlayTrigger>
                        <OverlayTrigger key="peliculas" placement="bottom"
                            overlay={<Tooltip id={`tooltip-bottom`}>Favoritos</Tooltip>}>
                            {/* Nav.Link sirve para entrar a la ruta que asignamos en APP.js */}
                            <Nav.Link href="/favoritos">
                                <FontAwesomeIcon icon="film" />
                            </Nav.Link>
                        </OverlayTrigger>
                        <OverlayTrigger key="buscador" placement="bottom"
                            overlay={<Tooltip id={`tooltip-bottom`}>Buscador</Tooltip>}>
                            <Nav.Link href="/buscador">
                                <FontAwesomeIcon icon="search" />
                            </Nav.Link>
                        </OverlayTrigger>
                        <OverlayTrigger key="login" placement="bottom"
                            overlay={<Tooltip id={`tooltip-bottom`}>Login</Tooltip>}>
                            <Nav.Link href="/login">
                                <FontAwesomeIcon icon="user-circle" />
                            </Nav.Link>
                        </OverlayTrigger>
                        <OverlayTrigger key="register" placement="bottom"
                            overlay={<Tooltip id={`tooltip-bottom`}>Register</Tooltip>}>
                            <Nav.Link href="/register">
                                <FontAwesomeIcon icon="book-reader" />
                            </Nav.Link>
                        </OverlayTrigger>
                    </Nav>
                    <Row>
                        <Col sm={4}>
                            <Container>
                            
                            </Container>
                            
                        </Col>
                    </Row>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        {/* Contenido de cada pagina, cuando se entra a una pagina el contenido cambia y se muestra atravez de
         <Outlet /> */}
        <Container style={{'padding': '0px'}}>
            <Outlet />
        </Container>       
    </Container>

    {/* Pie de pagina */}
    <Container  style={{'background': 'white', marginTop: '15px', marginBottom: '15px', borderRadius: '4px', border: 'solid 0px white', padding: '0px'}}>
    <footer id="footer">
        <div id="footer-3d">
            <div class="gp-container">
                <span class="first-widget-bend"></span>
            </div>		
        </div>
        <div id="footer-widgets" class="gp-footer-larger-first-col">
            <div class="gp-container">
                <div class="footer-widget footer-1">
                    <div class="wpb_wrapper">
                        <img src="images/f_logo.png" alt="" />
                    </div> 
                <br></br>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p class="text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div class="footer_box">
                <div class="col_1_of_3 span_1_of_3">
                        <h3>Informaci&oacute;n</h3>
                        <ul class="first">
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Peliculas</a></li>
                            <li><a href="#">Acerca de</a></li>
                        </ul>
                </div>
                <div class="col_1_of_3 span_1_of_3">
                        <h3></h3>
                        <ul class="first">
                        </ul>
                </div>
                <div class="col_1_of_3 span_1_of_3">
                        <h3>Siguenos</h3>
                        <ul class="first">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Youtube</a></li>
                        </ul>
                        <div class="copy">
                        <p style={{textAlign:'center'}}>© 2022 Peliculas.<br></br> Todos los derechos reservados.</p>
                        </div>
                </div>
                <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </footer>
    </Container>  
    </>
  )
};

export default Layout;