import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Rules from './pages/Rules.jsx'
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/rules" element={<Rules /> } />
                <Route path="*" element={<h2 className="text-center mt-5">Страница не найдена</h2>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
