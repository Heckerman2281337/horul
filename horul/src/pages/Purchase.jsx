import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { FaBox, FaShoppingCart, FaShoppingBag } from 'react-icons/fa';

export default function Purchase() {
    return (
        <Container className="text-center py-5 mt-5 mb-5">
            <h1 className="display-5 fw-bold mb-5">Приобретение игры</h1>

            <p className="lead text-muted mx-auto mb-5" style={{ maxWidth: '500px' }}>
                Вы можете приобрести игру на следующих платформах или напрямую через краудфандинг
            </p>

            <h2 className="fw-bold mb-4">Что внутри коробки?</h2>
            <Row className="justify-content-center mb-5">
                <Col md={6}>
                    <Card className="bg-dark text-white-50 border-secondary">
                        <Card.Body>
                            <FaBox size={32} className="mb-3 text-white" />
                            <ListGroup variant="flush">
                                <ListGroup.Item className="bg-dark text-white-50 border-secondary"> Фишки игроков</ListGroup.Item>
                                <ListGroup.Item className="bg-dark text-white-50 border-secondary"> Правила игры</ListGroup.Item>
                                <ListGroup.Item className="bg-dark text-white-50 border-secondary"> Мешочек</ListGroup.Item>
                                <ListGroup.Item className="bg-dark text-white-50 border-secondary"> Шпаргалки</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <h2 className="fw-bold mb-4">Купить</h2>
            <Row className="justify-content-center g-4">
                <Col md={4}>

                    <Card className="bg-dark border-secondary h-100">
                        <Card.Body className="d-flex flex-column align-items-center justify-content-center gap-3 py-4">
                            <FaShoppingCart size={32} className="text-white" />
                            <Card.Title className="text-white">Краудфандинг</Card.Title>
                            <Card.Text className="text-white-50 small">Поддержите нас напрямую</Card.Text>
                            <Button variant="outline-light" href="https://your-campaign-link.com" target="_blank">Перейти</Button>
                        </Card.Body>
                    </Card>

                </Col>

                <Col md={4}>

                    <Card style={{ backgroundColor: '#7F30E3' }} className="border-secondary h-100">
                        <Card.Body className="d-flex flex-column align-items-center justify-content-center gap-3 py-4">
                            <FaShoppingBag size={32} className="text-white" />
                            <Card.Title className="text-white">Wildberries</Card.Title>
                            <Card.Text className="text-white-50 small">Удобная покупка на Wildberries</Card.Text>
                            <Button variant="outline-light" href="https://wildberries.ru" target="_blank">Перейти</Button>
                        </Card.Body>
                    </Card>

                </Col>

                <Col md={4}>

                    <Card style={{ backgroundColor: '#005BFF' }} className="border-secondary h-100">
                        <Card.Body className="d-flex flex-column align-items-center justify-content-center gap-3 py-4">
                            <FaShoppingBag size={32} className="text-white" />
                            <Card.Title className="text-white">Ozon</Card.Title>
                            <Card.Text className="text-white-50 small">Удобная покупка на Ozon</Card.Text>
                            <Button variant="outline-light" href="https://ozon.ru" target="_blank">Перейти</Button>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    );
}