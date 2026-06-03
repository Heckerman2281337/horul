import { Container } from "react-bootstrap";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-dark text-white-50 py-3 mt-auto">
            <Container className="text-center">
                <small>© {currentYear} Хорул. Все права защищены. Юрисдикционный текст здесь.</small>
            </Container>
        </footer>
    );
}