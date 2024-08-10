import React from 'react';

const TextAtoms = ({ children, type }) => {
  switch (type) {
    case 'h1':
      return <h1>{children}</h1>;
    case 'h2':
      return <h2>{children}</h2>;
    case 'h3':
      return <h3>{children}</h3>;
    case 'h4':
      return <h4>{children}</h4>;
    case 'h5':
      return <h5>{children}</h5>;
    case 'h6':
      return <h6>{children}</h6>;
    case 'p':
      return <p>{children}</p>;
    default:
      return <span>{children}</span>;
  }
};

export default TextAtoms;