import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShipmentsPage from './pages/ShipmentsPage';
import AddShipmentPage from './pages/AddShipmentPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shipments" element={<ShipmentsPage />} />
                    <Route path="/add-shipment" element={<AddShipmentPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/add-shipment" element={AddShipmentPage} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
