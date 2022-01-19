import React from 'react';

// Sirve para cargar la lista de las peliculas, pero antes ponemos un cargando 

function WithListLoading(Component) {
  return function WithListLoading({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Cargando Información...
      </p>
    );
  };
}
export default WithListLoading;