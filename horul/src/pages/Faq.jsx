import { Container, Accordion, AccordionItem } from 'react-bootstrap';
import { FaQuestion } from 'react-icons/fa';

export default function Faq() {
    return (
        <Container className="text-center py-5 mt-5 mb-5" style={{ maxWidth: '700px' }}>

            <h1 className="display-5 fw-bold mb-5">Часто задаваемые вопросы</h1>

            <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><FaQuestion size={20} className="text-primary me-3"/> Вопрос 1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> <FaQuestion size={20} className="text-primary me-3" /> Вопрос 2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header> <FaQuestion size={20} className="text-primary me-3" /> Вопрос 3</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </Container>
    );
}