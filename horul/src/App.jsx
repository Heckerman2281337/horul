import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Rules from './pages/Rules.jsx'
import Home from './pages/Home.jsx';
import Faq from './pages/Faq.jsx';
import ProjectDevelopment from './pages/ProjectDevelopment.jsx';
import Purchase from './pages/Purchase.jsx';
import Footer from './components/Footer.jsx';

function App() {
    return (
        <BrowserRouter>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/rules" element={<Rules />} />
                        <Route path="/projectDevelopment" element={<ProjectDevelopment />} />
                        <Route path="/purchase" element={<Purchase />} />
                        <Route path="/faq" element={<Faq />} />
                        <Route path="*" element={<h2 className="text-center mt-5">Страница не найдена</h2>} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App
