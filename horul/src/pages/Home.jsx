import { Container, Badge } from 'react-bootstrap';
import { FaClock, FaUser, FaUsers } from 'react-icons/fa';

export default function Home() {
    return (
        <Container className="text-center py-5 mt-2 mb-5">

            <h1 className="display-3 mb-5 fw-bold" style={{ letterSpacing: '0.07em' }}>Хорул</h1>

            <p className="lead text-muted mx-auto mb-4 fs-3" style={{ maxWidth: '600px' }}>
                «Хорул» — древняя тувинская настольная игра. В её основе лежат 12-летний цикл восточного календаря (12 животных) и шесть буддийских символов удачи.
            </p>

            <p className="lead text-muted mx-auto mb-4 fs-3" style={{ maxWidth: '500px' }}>
                Игроки выкладывают фишки, стараясь побить карты соперников и забрать взятку. Побеждает тот, кто наберёт больше всех взяток.
            </p>

            <div className="d-flex flex-column align-items-center gap-3 mt-5">
                <div className="d-flex gap-3">
                <Badge bg="success" className="fs-6 px-3 py-2">
                    <FaUsers className="me-2" />Количество игроков: 2–8
                </Badge>
                <Badge bg="success" className="fs-6 px-3 py-2">
                    <FaClock className="me-2" /> Время партии: 30–60 минут
                </Badge>
                </div>
                <Badge bg="success" className="fs-6 px-3 py-2">
                    <FaUser className="me-2" /> Возврастное ограничение: 12+
                </Badge>
            </div>

        </Container>
    );
}