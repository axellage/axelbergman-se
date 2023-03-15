import "./TopBar.css"
import {Nav, Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";


export function TopBar() {

    return (
        <Navbar bg="light" expand="lg" id="home">
            <Container>
                <Navbar.Brand href="#home">Axel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Projects">Projects</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}