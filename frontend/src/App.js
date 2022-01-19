
import React from "react";
import {
  BrowserRouter,
  Route, 
  Link,
  Routes,
} from "react-router-dom";
import About from "./components/About";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Buscador from "./components/Buscador";
import Login from "./components/Login";
import Register from "./components/Register";
import PeliculaView from "./components/PeliculaView";
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const App = () => {
  return (
    <section className="App">
      {/* Se empiezan las paginas con las rutas */}
    <BrowserRouter>
      <Routes>
        {/* El template principal donde esta el menu, en donde va salir el contenido y el pie de pagina */}
        <Route path="/" element={<Layout />}> 
        {/* Ruta principal cuando entramos a la pagina */}
          <Route index element={<Home />} />
          {/* About */}          
          <Route path="about" element={<About />} />
          {/* Ruta del buscador de peliculas por nombre*/}
          <Route path="buscador" element={<Buscador />} />
          {/* Rutas del login y registro */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* Mostrar Pelicula */}
          <Route path="pelicula/:id" element={<PeliculaView />} />
          {/* Si no hay ninguna de las rutas mandar a HOME */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </section>
    
  );
};

export default App;
