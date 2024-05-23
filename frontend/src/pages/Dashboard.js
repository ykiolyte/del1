import React from 'react';
import { Container, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Личный кабинет
            </Typography>
            <Button component={Link} to="/" variant="contained" color="primary" style={{ margin: '10px' }}>
                Главная
            </Button>
            <Button component={Link} to="/shipments" variant="contained" color="primary" style={{ margin: '10px' }}>
                Отправления
            </Button>
            <Button component={Link} to="/add-shipment" variant="contained" color="primary" style={{ margin: '10px' }}>
                Добавить отправление
            </Button>
        </Container>
    );
};

export default Dashboard;
