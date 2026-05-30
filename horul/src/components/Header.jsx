import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Хорул</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Главная</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard">Дешборд</Nav.Link>
                        <Nav.Link as={Link} to="/rules">Правила</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}