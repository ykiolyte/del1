import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const HomePage = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Добро пожаловать в сервис доставки
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper style={{ padding: '16px' }}>
                        <Typography variant="h5">
                            Статистика
                        </Typography>
                        <Typography>
                            Количество отправлений: 150
                        </Typography>
                        <Typography>
                            Количество доставленных грузов: 120
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper style={{ padding: '16px' }}>
                        <Typography variant="h5">
                            Новости и обновления
                        </Typography>
                        <Typography>
                            Новая функция: отслеживание в реальном времени!
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper style={{ padding: '16px' }}>
                        <Typography variant="h5">
                            Отзывы клиентов
                        </Typography>
                        <Typography>
                            "Отличный сервис! Быстрая доставка и удобное отслеживание." - Иван П.
                        </Typography>
                        <Typography>
                            "Очень доволен, все пришло вовремя." - Мария К.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomePage;
