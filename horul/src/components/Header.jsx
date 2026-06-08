import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/favicon.png'

export default function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
            <Container>
                {/*as={Link} to="/" - Добавить в Navbar.Brand когда будет больше страниц в навигации*/}
                <Navbar.Brand className="d-flex align-items-center gap-2">
                    <Image
                        src={ logo }
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Хорул Лого"
                    />
                    Хорул</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                        
                    <Nav className="ms-left gap-3"> {/*Когда добавяться другие страницы сделать mx-auto*/}
                        <Nav.Link as={Link} to="/">Главная</Nav.Link>
                        <Nav.Link as={Link} to="/rules">Правила</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}