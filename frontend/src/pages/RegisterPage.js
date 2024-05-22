import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import axios from 'axios';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/register', { username, password });
            alert(response.data);
        } catch (error) {
            alert('Ошибка регистрации');
        }
    };

    return (
        <Container>
            <Paper style={{ padding: '16px', marginTop: '16px' }}>
                <Typography variant="h4" gutterBottom>
                    Регистрация
                </Typography>
                <form onSubmit={handleRegister}>
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
                        Регистрация
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default RegisterPage;
