import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/favicon.png'

export default function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
                    <Image
                        src={ logo }
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Хорул Лого"
                    />
                    Хорул
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto gap-3">
                        <Nav.Link as={Link} to="/">Главная</Nav.Link>
                        <Nav.Link as={Link} to="/rules">Правила</Nav.Link>
                        <Nav.Link as={Link} to="/projectDevelopment">Развитие проекта</Nav.Link>
                        <Nav.Link as={Link} to="/purchase">Приобретение игры</Nav.Link>
                        <Nav.Link as={Link} to="/contacts">Контакты</Nav.Link>
                        <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}