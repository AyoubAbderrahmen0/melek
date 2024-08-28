import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import Products from './Components/Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCreativeCommonsNd, faProductHunt } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-primary">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" className='ms-3 fs-4'>
                <FontAwesomeIcon icon={faHouse} className='me-2' /> Home
              </Nav.Link>
              <Nav.Link href="#action2" className='ms-3 fs-4'>
                <FontAwesomeIcon icon={faCreativeCommonsNd} className='me-2' /> About
              </Nav.Link>
              <Nav.Link href="#action3" className='ms-3 fs-4'>
                <FontAwesomeIcon icon={faProductHunt} className='me-2' /> Products
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Products />
    </div>
  );
}

export default App;
