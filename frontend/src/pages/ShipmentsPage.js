import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, TextField} from '@mui/material';
import axios from 'axios';

const ShipmentsPage = () => {
    const [shipments, setShipments] = useState([]);
    const [filter, setFilter] = useState('');
    
    useEffect(() => {
        // Fetch shipments data from backend
        axios.get('/api/shipments')
            .then(response => {
                setShipments(response.data);
            })
            .catch(error => {
                console.error('Ошибка при загрузке отправлений:', error);
            });
    }, []);
    
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };
    
    const filteredShipments = shipments.filter(shipment =>
        shipment.origin.includes(filter) || shipment.destination.includes(filter)
    );

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Отправления
            </Typography>
            <TextField 
                label="Фильтр" 
                value={filter} 
                onChange={handleFilterChange} 
                fullWidth 
                margin="normal"
            />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Откуда</TableCell>
                        <TableCell>Куда</TableCell>
                        <TableCell>Описание</TableCell>
                        <TableCell>Статус</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredShipments.map(shipment => (
                        <TableRow key={shipment.id}>
                            <TableCell>{shipment.origin}</TableCell>
                            <TableCell>{shipment.destination}</TableCell>
                            <TableCell>{shipment.description}</TableCell>
                            <TableCell>{shipment.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    );
};

export default ShipmentsPage;
