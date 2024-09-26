import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Despesas from './pages/Despesas';
import Cadastros from './pages/Cadastros';
import Login from './pages/Login';
import Painel from './pages/PainelPrincipal';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastros" element={<Cadastros />} />
                <Route path="/despesas" element={<Despesas />} />
                <Route path="/login" element={<Login />} />
                <Route path='/painel' element={<Painel />} />
            </Routes>
        </Router>
    );
}

export default App;
