import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import axios from 'axios';


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/login', { username, password });
            alert('Успешная авторизация!');
        } catch (error) {
            alert('Ошибка входа');
        }
    };

    return (
        <Container>
            <Paper style={{ padding: '16px', marginTop: '16px' }}>
                <Typography variant="h4" gutterBottom>
                    Вход
                </Typography>
                <form onSubmit={handleLogin}>
                    <div>
                        <TextField
                            label="Имя пользователя"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                    </div>
                    <div>
                        <TextField
                            label="Пароль"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                    </div>
                    <Button type="submit" variant="contained" color="primary">
                        Вход
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default LoginPage;
