import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GuiLayout from './GuiLayout/component';
import { Container, Nav, Navbar } from 'react-bootstrap';

function App() {

  return (
    <>
      <Navbar expand="sm" className="bg-body-secondary">
        <Container>
          <Navbar.Brand href='#home'>ED Tracker GUI</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <GuiLayout>
      </GuiLayout>
    </>
  );
}

export default App;
