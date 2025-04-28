import React from 'react';
import { Container as BContainer } from 'react-bootstrap';

const Container = ({ children }) => {
  return (
    <BContainer>
      {children}
    </BContainer>
  );
};

export default Container;
