import { Container } from 'react-bootstrap';

export default function Home() {
    return (
        <Container className="text-center py-5 mt-5">
            <h1 className="display-3 fw-bold">Хорул</h1>
            <p className="lead text-muted mx-auto mb-4" style={{ maxWidth: '600px' }}>
                «Хорул» — древняя тувинская настольная игра для 2–8 человек. В её основе лежат 12-летний цикл восточного календаря (12 животных) и шесть буддийских символов удачи.
            </p>
        </Container>
    );
}