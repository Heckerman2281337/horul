import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaTelegramPlane, FaPhone } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-dark text-white-50 py-4 mt-auto">
            <Container className="text-center">
                {/* Пока оставить так
                <div className="d-flex justify-content-center gap-4 mb-2">
                    <a href="mailto:your@email.com" className="text-white-50 text-decoration-none">
                        <FaEnvelope className="me-1" /> your@email.com
                    </a>
                    <a href="https://t.me/yourusername" className="text-white-50 text-decoration-none" target="_blank" rel="noreferrer">
                        <FaTelegramPlane className="me-1" /> @yourusername
                    </a>
                    <a href="tel:+1234567890" className="text-white-50 text-decoration-none">
                        <FaPhone className="me-1" /> +1 234 567 890
                    </a>
                </div>
                <small>© {currentYear} Все права защищены. Юрисдикционный текст здесь.</small>
                    */}
            </Container>
        </footer>
    );
}