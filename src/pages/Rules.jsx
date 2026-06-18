import { Container, Table, Badge, Card, Accordion, Col, Row } from 'react-bootstrap';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function SectionTitle({ title })
{
    return (
        <div className="d-flex align-items-center justify-content-center gap-2 gap-sm-3 my-4 my-sm-5 px-1">
            <hr
                className="flex-grow-1 border-2 border-secondary opacity-100 m-0"
                style={{ minWidth: '15px' }}
            />

            <div className="d-flex align-items-center px-3 py-1 px-sm-4 rounded-pill bg-dark text-white shadow-sm flex-shrink-1 text-center">
                <span
                    className="fw-bold text-uppercase"
                    style={{
                        letterSpacing: '0.05em',
                        fontSize: 'clamp(0.7rem, 3.5vw, 0.875rem)', // Слегка уменьшил нижний порог до 0.7rem для экстремально узких экранов
                        whiteSpace: 'normal'
                    }}
                >
                    {title}
                </span>
            </div>

            <hr
                className="flex-grow-1 border-2 border-secondary opacity-100 m-0"
                style={{ minWidth: '15px' }}
            />
        </div>
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
        <Container className="py-5 mt-2 px-3 px-md-4" style={{ maxWidth: '900px' }}>
            <h1 className="display-4 fw-bold text-center mb-5" style={{ letterSpacing: '0.07em' }}>Правила игры</h1>

            <SectionTitle title="Подготовка к игре"/>

            <h5 className="fw-bold mt-4">Шаг 1. Перемешивание</h5>
            <p>Все 72 фишки тщательно перемешиваются рубашкой (орнаментом) вверх.</p>

            <h5 className="fw-bold mt-4">Шаг 2. Выбор способа раздачи</h5>

            <Accordion className="mb-4">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Вариант А — Раздача на руки (простой)</Accordion.Header>
                    <Accordion.Body>
                        <p>Раздайте фишки поровну всем игрокам:</p>
                        <Table bordered responsive size="sm" className="text-center">
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
                                    <td colSpan={2} className="text-center py-3">
                                        <img src={a.img} style={{ width: 160, height: 160, objectFit: 'contain' }}/>
                                    </td>
                                </tr>
                            )}
                            </>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <p className="text-muted text-center fst-italic">Прим. нажмите на строку для просмотра карты</p>
            <Accordion flush>
                <Accordion.Item eventKey="0" style={{ backgroundColor: 'transparent' }}>
                    <Accordion.Header>
                        <div className="w-100 d-flex justify-content-center">
                            <span
                                className="fw-bold fs-6 text-uppercase px-4 py-2 rounded-pill shadow-sm"
                                style={{
                                    letterSpacing: '0.15em',
                                    color: '#8b1c1c', 
                                    backgroundColor: 'rgba(230, 194, 122, 0.1)'
                                }}
                            >
                                Почему так?
                            </span>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Card className="bg-dark text-white border-secondary">
                            <Card.Body  style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}>
                                <p className="text-center mb-4 fst-italic text-light" style={{ opacity: 0.85 }}>
                                    Нефритовый Император решил выбрать 12 животных, чтобы они стали
                                    символами времени. Он объявил гонку через реку: кто прибудет первым,
                                    тот и возглавит зодиак.
                                </p>

                                <div className="d-flex flex-column gap-3">
                                    <div className="p-3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                        🐀🐂 Маленькая умная <strong>Крыса</strong> заметила сильную и выносливую <strong>Корову</strong>, которая готовилась войти в воду, и обратилась к ней:<br />
                                        <span className="fst-italic text-white-50 mt-2 d-inline-block">
                                            — О мудрая Корова, позволь мне пересечь реку на тебе. Я слишком мала, чтобы сделать это сама.
                                        </span><br />
                                        <span className="mt-2 d-inline-block">
                                            Добрая Корова посадила Крысу себе на спину. Когда до берега осталось всего несколько шагов, Крыса ловко прыгнула и вступила на берег <strong>первой</strong>. Корова, не обидевшись на хитрость, заняла почетное <strong>второе место</strong>.
                                        </span>
                                    </div>

                                    <div className="p-3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                        🐅 <strong>Третьим</strong> финишировал <strong>Тигр</strong>. Его сила и упорство помогли преодолеть бурный поток.
                                    </div>

                                    <div className="p-3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                        🐇 <strong>Четвертым</strong> прибыл <strong>Заяц</strong>, который благодаря своей ловкости прыгал по камням и плывущим бревнам, легко адаптируясь к любым трудностям.
                                    </div>

                                    <div className="p-3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                        🐉 Вскоре небо озарилось сиянием, и к Вратам подлетел <strong>Дракон</strong>. Могучий и благородный, он мог бы стать первым, но задержался, чтобы вызвать дождь над полями и помочь людям. Он занял <strong>пятое место</strong>.
                                    </div>

                                    <div className="p-3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                        🐍🐎 Позади бежала <strong>Лошадь</strong>. Ее мощные ноги уверенно несли ее вперед, когда вдруг из-под копыта выскользнула хитрая <strong>Змея</strong>. Она все это время пряталась, чтобы в последний момент проскользнуть вперед. Так Змея заняла <strong>шестое место</strong>, оставив Лошади <strong>седьмое</strong>.
                                    </div>

                                    <div className="p-3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                        🐏🐒🐓 Следом прибыли <strong>Овца, Обезьяна и Петух</strong>, которые сообща перебрались через бурную реку. Петух нашел плот, Овца расчистила путь, а Обезьяна ловко управляла.
                                    </div>

                                    <div className="p-3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                        🐕 <strong>Собака</strong>, прекрасная пловчиха, могла финишировать раньше, но отвлеклась, играя с волнами. Поэтому она вступила на берег <strong>одиннадцатой</strong>.
                                    </div>

                                    <div className="p-3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                        🐖 <strong>Последней</strong>, неспешно, перебралась <strong>Свинья</strong>. Она задержалась, решив перекусить и немного вздремнуть, но упорство помогло ей пройти гонку, став <strong>двенадцатой</strong>.
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

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
                                    <td colSpan={3} className="text-center py-3">
                                        <img src={c.img} style={{ width: 160, height: 160, objectFit: 'contain' }} />
                                    </td>
                                </tr>
                            )}
                            </>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <p className="text-muted text-center fst-italic">Прим. нажмите на строку для просмотра карты</p>
            <SectionTitle title="Процесс игры" />
            <p>Игроки ходят <strong>по часовой стрелке</strong>.</p>

            <Card className="mb-3">
                <Card.Header className="text-white fw-bold" style={{ background:"#3D251E"}}>Шаг 1. Заход</Card.Header>
                <Card.Body>
                    <p>Игрок выкладывает в центр стола <strong>от 1 до 4 фишек одинакового достоинства</strong>.</p>
                    <Table bordered size="sm">
                        <thead className="table-dark">
                            <tr>
                                <th>
                                <FaCheck style={{ verticalAlign: 'middle', marginRight: 4, position: 'relative', top: -1 }} />
                                    Можно
                                </th>
                                <th>
                                <FaTimes style={{ verticalAlign: 'middle', marginRight: 4, position: 'relative', top: -1 }} />
                                    Нельзя
                                </th>
                            </tr>
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

            <SectionTitle title="Шпаргалка"></SectionTitle>
            <Card className="bg-dark text-white border-secondary mb-2">
                <Card.Body className="p-3 p-sm-4" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                    <div className="mb-3">
                        <h6 className="text-warning fw-bold text-uppercase mb-2">1. Подготовка</h6>
                        <div>• Перемешать 72 фишки.</div>
                        <div>• Раздать поровну или стопками по 6–8 шт.</div>
                    </div>

                    <div className="mb-3">
                        <h6 className="text-warning fw-bold text-uppercase mb-2">2. Иерархия рангов</h6>
                        <div className="mb-1">
                            <span className="text-info fw-bold">Козыри:</span> Хурту &gt; Шындавал &gt; Балык &gt; Тун &gt; Олчей удазыны &gt; Хаан-Херети
                        </div>
                        <div>
                            <span className="text-success fw-bold">Животные:</span> Мышь &gt; Корова &gt; Тигр &gt; Заяц &gt; Дракон &gt; Змея &gt; Лошадь &gt; Овца &gt; Обезьяна &gt; Петух &gt; Собака &gt; Свинья
                        </div>
                        <div className="text-muted fst-italic mt-1">* Любой козырь бьет любое животное.</div>
                    </div>

                    <div>
                        <h6 className="text-warning fw-bold text-uppercase mb-2">3. Игровой цикл</h6>
                        <div>• <strong>Заход:</strong> От 1 до 4 карт строго одного ранга.</div>
                        <div>• <strong>Покрытие:</strong> Столько же карт (высшим рангом для победы, либо любыми на сброс).</div>
                        <div>• <strong>Взятка:</strong> Уходит владельцу самой сильной фишки на столе.</div>
                        <div className="mt-2 fw-bold text-center border-top border-secondary pt-2 text-uppercase text-light">
                            Цель: Взять как можно больше взяток
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}