import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"


const Navigation = () => {
  return (
    <Navbar expand="xxl" className="bg-info top-0 position-fixed w-100">
    <Container fluid>
      <Navbar.Brand>Net Board</Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
      <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xxl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
            placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
            title
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="boards">Boards</Link>
            <Link to="profile">Profile Settings</Link>
            <Link to="createaccount">Create Account</Link>
            <Link to="login">Log In</Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  )
}

export default Navigation