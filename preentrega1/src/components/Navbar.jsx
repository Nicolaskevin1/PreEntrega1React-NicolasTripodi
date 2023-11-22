import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from './Cartwidget/Cartwidget';

export default function NavBar() {
    return (
        <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Comidas</Nav.Link>
            <Nav.Link href="#pricing">Precio</Nav.Link>
            <Nav.Link href="#pricing"><Cartwidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
      );
}


