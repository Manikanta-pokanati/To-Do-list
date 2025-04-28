import React from 'react';
import useStore from '../../stores/store';
import { Button, Navbar as BNavbar, Container } from 'react-bootstrap';

const Navbar = () => {
  const { user, logout } = useStore();

  return (
    <BNavbar bg="primary" variant="dark" className="mb-4">
      <Container>
        <BNavbar.Brand>📝 To-Do App</BNavbar.Brand>
        {user && <Button variant="light" onClick={logout}>Logout</Button>}
      </Container>
    </BNavbar>
  );
};

export default Navbar;
