import { Container, Table, Badge, Card, Accordion, Col, Row } from 'react-bootstrap';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function SectionTitle({ title })
{
    return (
        <Row className="align-items-center my-5">
            <Col><hr className="border-2 border-secondary opacity-100" /></Col>
            <Col xs="auto">
                <div className="d-flex align-items-center gap-2 px-4 py-1 rounded-pill bg-dark text-white shadow">
                    <span className="fw-bold fs-5 text-uppercase letter-spacing-1" style={{ letterSpacing: '0.2em' }}>{title}</span>
                </div>
            </Col>
            <Col><hr className="border-2 border-secondary opacity-100" /></Col>
        </Row>
    );
}

export default function Rules() {
    const animals = [
        { place: 1, emoji: '🐀', name: 'Мышь', img: 'animals/mouse.png' },
        { place: 2, emoji: '🐂', name: 'Корова', img: 'animals/cow.png' },
        { place: 3, emoji: '🐅', name: 'Тигр', img: 'animals/tiger.png' },
        { place: 4, emoji: '🐇', name: 'Заяц', img: 'animals/rabbit.png' },
        { place: 5, emoji: '🐉', name: 'Дракон', img: 'animals/dragon.png' },
        { place: 6, emoji: '🐍', name: 'Змея', img: 'animals/snake.png' },
        { place: 7, emoji: '🐴', name: 'Лошадь', img: 'animals/horse.png' },
        { place: 8, emoji: '🐏', name: 'Овца', img: 'animals/sheep.png' },
        { place: 9, emoji: '🐒', name: 'Обезьяна', img: 'animals/monkey.png' },
        { place: 10, emoji: '🐓', name: 'Петух', img: 'animals/peacock.png' },
        { place: 11, emoji: '🐕', name: 'Собака', img: 'animals/dog.png' },
        { place: 12, emoji: '🐖', name: 'Свинья', img: 'animals/pig.png' },
    ];

    const cards = [
        { place: 1, name: 'Хурту', translation: 'Флюгер / Знамя Победы', img: 'cards/hurtu.png' },
        { place: 2, name: 'Шындавал', translation: 'Тамга / Клеймо', img: 'cards/shindival.png' },
        { place: 3, name: 'Балык', translation: 'Рыба', img: 'cards/balyk.png' },
        { place: 4, name: 'Тун', translation: 'Морская раковина', img: 'cards/tun.png' },
        { place: 5, name: 'Олчей удазыны', translation: 'Узел счастья', img: 'cards/olcheyUdazini.png' },
        { place: 6, name: 'Хаан-Херети', translation: 'Птица счастья / Гаруда', img: 'cards/haanHereti.png' },
    ]

    const [openAnimal, setOpenAnimal] = useState(null);
    const [openCard, setOpenCard] = useState(null);

    return (
        <Container className="py-5 mt-2 mb-5" style={{ maxWidth: '900px' }}>
            <h1 className="display-5 fw-bold text-center mb-5" style={{ letterSpacing: '0.07em' }}>Правила игры</h1>

            <SectionTitle title="Подготовка к игре"/>

            <h5 className="fw-bold mt-4">Шаг 1. Перемешивание</h5>
            <p>Все 72 фишки тщательно перемешиваются рубашкой (орнаментом) вверх.</p>

            <h5 className="fw-bold mt-4">Шаг 2. Выбор способа раздачи</h5>

            <Accordion className="mb-4">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Вариант А — Раздача на руки (простой)</Accordion.Header>
                    <Accordion.Body>
                        <p>Раздайте фишки поровну всем игрокам:</p>
                        <Table bordered size="sm" className="text-center">
                            <thead className="table-dark">
                                <tr><th>Игроков</th><th>Фишек на игрока</th><th>Остаток</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>2</td><td>36</td><td>0</td></tr>
                                <tr><td>3</td><td>24</td><td>0</td></tr>
                                <tr><td>4</td><td>18</td><td>0</td></tr>
                                <tr><td>5</td><td>14</td><td>2 (убрать)</td></tr>
                                <tr><td>6</td><td>12</td><td>0</td></tr>
                                <tr><td>7</td><td>10</td><td>2 (убрать)</td></tr>
                                <tr><td>8</td><td>9</td><td>0</td></tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Вариант Б — Раздача стопками (аутентичный)</Accordion.Header>
                    <Accordion.Body>
                        <p>1. Сформируйте стопки по таблице:</p>
                        <Table bordered size="sm" className="text-center mb-3">
                            <thead className="table-dark">
                                <tr><th>Игроков</th><th>Стопок всего</th><th>Фишек в стопке</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>2, 3, 4, 6</td><td>12</td><td>6</td></tr>
                                <tr><td>8</td><td>9</td><td>8</td></tr>
                            </tbody>
                        </Table>
                        <p>2. Разложите стопки по кругу в центре стола.</p>
                        <p>3. Первый игрок (по жребию) берёт любую стопку и смотрит <strong>нижнюю</strong> фишку:</p>
                        <ul>
                            <li>Если это <strong>сильный символ</strong> — забирает всю стопку.</li>
                            <li>Если <strong>животное</strong> — возвращает стопку на место, перевернув животным вверх.</li>
                        </ul>
                        <p>4. Игроки по очереди берут по одной стопке, пока все не разберут.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <h5 className="fw-bold">Шаг 3. Готовность</h5>
            <p>
                Каждый игрок складывает свои фишки в стопку перед собой рубашкой вверх. Первый ход делает игрок,
                определённый жребием (или победитель предыдущей партии).
            </p>

            <SectionTitle title="Иерархия животных" />
            <p>Порядок соответствует легенде о Великой гонке к Нефритовому императору (от сильного к слабому):</p>
            <Row className="justify-content-center">
                <Col style={{ maxWidth: '500px' }}>
                    <Table bordered hover responsive className="text-center">
                        <thead className="table-dark">
                            <tr><th>Место</th><th>Животное</th></tr>
                        </thead>
                        <tbody>
                            {animals.map(a => (
                            <>
                                <tr key={a.place} style={{ cursor: 'pointer' }}
                                onClick={() => setOpenAnimal(openAnimal === a.place ? null : a.place)}>
                                    <td>{a.place}</td>
                                    <td>{a.emoji} {a.name}</td>
                                </tr>
                                {openAnimal === a.place && (
                                <tr key={`card-${a.place}`}>
                                    <td colSpan={2} className="text-center py-3" style={{background: "black"}}>
                                        <img src={a.img} style={{ width: 120, height: 120, objectFit: 'contain' }}/>
                                    </td>
                                </tr>
                            )}
                            </>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <SectionTitle title="Сильные символы (козыри)" />
            <p className="text-muted">Любой сильный символ сильнее любого животного.</p>
            <Row>
                <Col>
                    <Table bordered hover responsive className="text-center">
                        <thead className="table-dark">
                            <tr><th>Место</th><th>Символ (тув.)</th><th>Перевод</th></tr>
                        </thead>
                        <tbody>
                            {cards.map(c => (
                            <>
                                <tr key={c.place} style={{ cursor: 'pointer' }}
                                onClick={() => setOpenCard(openCard === c.place ? null : c.place)}>
                                    <td>{c.place}</td>
                                    <td>{c.name} </td>
                                    <td>{c.translation}</td>
                                </tr>
                                {openCard === c.place && (
                                <tr key={`card-${c.place}`}>
                                    <td colSpan={3} className="text-center py-3" style={{ background: "black" }}>
                                        <img src={c.img} style={{ width: 120, height: 240, objectFit: 'contain' }} />
                                    </td>
                                </tr>
                            )}
                            </>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <SectionTitle title="Процесс игры" />
            <p>Игроки ходят <strong>по часовой стрелке</strong>.</p>

            <Card className="mb-3">
                <Card.Header className="text-white fw-bold" style={{ background:"#3D251E"}}>Шаг 1. Заход</Card.Header>
                <Card.Body>
                    <p>Игрок выкладывает в центр стола <strong>от 1 до 4 фишек одинакового достоинства</strong>.</p>
                    <Table bordered size="sm">
                        <thead className="table-dark">
                            <tr><th><FaCheck />Можно</th><th><FaTimes/>Нельзя</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>🐀 + 🐀 (две Мыши)</td>
                                <td>🐀 + 🐂 (Мышь и Корова)</td>
                            </tr>
                            <tr>
                                <td> Хурту (одна фишка)</td>
                                <td> Хурту + Шындавал</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            <Card className="mb-3">
                <Card.Header className="text-white fw-bold" style={{ background: "#3D251E" }}>Шаг 2. Покрытие</Card.Header>
                <Card.Body>
                    <p>Следующий игрок <strong>обязан</strong> выложить <strong>такое же количество фишек</strong>, что и предыдущий. Это можно сделать двумя способами:</p>
                    <p><strong>А) Побить</strong> — выложить фишки, каждая из которых <strong>сильнее</strong> соответствующей фишки соперника.</p>
                    <p className="text-muted fst-italic">Пример: Соперник выложил Мышь. Вы можете побить Коровой, Тигром, любым козырем.</p>
                    <p><strong>Б) Покрыть любой мастью</strong> — если нет фишек, чтобы побить, выложите <strong>любые</strong> свои фишки в нужном количестве, даже если они слабее.</p>
                    <p className="text-muted fst-italic">Пример: Соперник выложил Тигра. Нет животных сильнее и нет козырей — выложите Свинью.</p>
                    <Card className="bg-warning bg-opacity-25 border-warning mt-3">
                        <Card.Body className="py-2">
                            ⚠️ <strong>Важно:</strong> Пропустить ход или сбросить меньше фишек <strong>нельзя</strong>. Вы всегда выкладываете ровно столько фишек, сколько требуется.
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>

            <Card className="mb-3">
                <Card.Header className="text-white fw-bold" style={{ background: "#3D251E" }}>Шаг 3. Определение победителя взятки</Card.Header>
                <Card.Body>
                    <p>Когда все игроки сделали ход:</p>
                    <ol>
                        <li>Сравниваются <strong>самые сильные фишки</strong>, выложенные каждым игроком.</li>
                        <li>Игрок с самой сильной фишкой забирает <strong>все фишки из центра стола</strong> в свою стопку взяток.</li>
                    </ol>
                    <p className="text-muted mb-0 fst-italic">При равенстве самых сильных фишек взятку забирает тот, кто ходил первым из них.</p>
                </Card.Body>
            </Card>

            <Card className="mb-4">
                <Card.Header className="text-white fw-bold" style={{ background: "#3D251E" }}>Шаг 4. Новый ход</Card.Header>
                <Card.Body>
                    <p className="mb-0">Право следующего хода переходит к игроку, выигравшему взятку. Игра продолжается, пока у всех игроков не закончатся фишки.</p>
                </Card.Body>
            </Card>

            <p className="text-muted fst-italic">Пример: Играют 4 человека. Первый игрок выкладывает Мышь.</p>
            <Table bordered hover responsive className="text-center">
                <thead className="table-dark">
                    <tr><th>Игрок</th><th>Действие</th><th>Пояснение</th></tr>
                </thead>
                <tbody>
                    <tr><td>1 (заход)</td><td>Выложил Мышь</td><td>—</td></tr>
                    <tr><td>2</td><td>Бьёт Коровой</td><td>Корова сильнее Мыши</td></tr>
                    <tr><td>3</td><td>Покрывает Овцой (любая масть)</td><td>Нет животных сильнее Коровы</td></tr>
                    <tr><td>4</td><td>Покрывает Свиньёй (любая масть)</td><td>Нет животных сильнее Коровы</td></tr>
                    <tr className="table-success"><td colSpan={3}><strong>Результат:</strong> Игрок 2 (Корова) забирает все 4 фишки и ходит следующим.</td></tr>
                </tbody>
            </Table>


            <SectionTitle title="Завершение игры" />
            <ol>
                <li>Когда все фишки закончились, каждый игрок подсчитывает количество выигранных взяток.</li>
                <li><strong>Побеждает игрок (или команда), набравший наибольшее количество взяток.</strong></li>
                <li>При равном количестве взяток объявляется ничья.</li>
            </ol>

            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <div className="w-100 d-flex justify-content-center">
                            <span
                            className="fw-bold fs-5 text-uppercase px-4 py-1 rounded-pill text-white shadow"
                            style={{ letterSpacing: '0.2em', background: 'linear-gradient(180deg, #964B00, #000000)', }}
                            >
                            Шпаргалка
                            </span>
                        </div>
                    </Accordion.Header>
                        <Accordion.Body>
                            <Card className="bg-dark text-white border-secondary">
                                <Card.Body className="font-monospace" style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}>
                                    <strong>ПОДГОТОВКА:</strong>{'\n'}
                                    • Перемешайте 72 фишки.{'\n'}
                                    • Раздайте поровну (или стопками по 6–8 фишек).{'\n\n'}
                                    <strong>ИЕРАРХИЯ:</strong>{'\n'}
                                    • Козыри: Хурту {'>'} Шындавал {'>'} Балык {'>'} Тун {'>'} Олчей удазыны {'>'} Хаан-Херети{'\n'}
                                    • Животные: Мышь {'>'} Корова {'>'} Тигр {'>'} Заяц {'>'} Дракон {'>'} Змея {'>'} Лошадь {'>'} Овца {'>'} Обезьяна {'>'} Петух {'>'} Собака {'>'} Свинья{'\n'}
                                    • Любой козырь сильнее любого животного.{'\n\n'}
                                    <strong>ХОД ИГРЫ:</strong>{'\n'}
                                    1. ЗАХОД: выложи 1–4 одинаковые фишки.{'\n'}
                                    2. ПОКРОЙ: выложи СТОЛЬКО ЖЕ фишек (обязательно!){'\n'}
                                    {'   '}• Хочешь выиграть? Бей более сильными!{'\n'}
                                    {'   '}• Нет сильных? Покрой любыми!{'\n'}
                                    3. ВЗЯТКА: забирает тот, у кого самая сильная фишка.{'\n'}
                                    4. НОВЫЙ ХОД: начинает победитель взятки.{'\n\n'}
                                    <strong className="text-success">ЦЕЛЬ: набрать больше всех взяток</strong>
                                </Card.Body>
                            </Card>
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}