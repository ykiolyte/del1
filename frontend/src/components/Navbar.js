import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Button color="inherit" component={Link} to="/">Главная</Button>
                    <Button color="inherit" component={Link} to="/shipments">Отправления</Button>
                    <Button color="inherit" component={Link} to="/add-shipment">Добавить отправление</Button>
                </Typography>
                <Button color="inherit" component={Link} to="/register">Регистрация</Button>
                <Button color="inherit" component={Link} to="/login">Вход</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
