import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Despesas from './pages/Despesas';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/despesas" element={<Despesas />} />
            </Routes>
        </Router>
    );
}

export default App;
