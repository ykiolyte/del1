import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography, TextField, Button, Select, MenuItem, InputLabel, FormControl, OutlinedInput, Chip } from '@mui/material';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';

const AddShipmentPage = () => {
    const theme = useTheme();
    const [cities, setCities] = useState([]);
    const [selectedCities, setSelectedCities] = useState([]);
    const [description, setDescription] = useState('');
    const mapRef = useRef(null);

    useEffect(() => {
        // Fetch cities from backend
        const fetchCities = async () => {
            try {
                const response = await axios.get('/api/cities');
                setCities(response.data);
            } catch (error) {
                console.error('Ошибка при получении списка городов', error);
            }
        };
        fetchCities();
    }, []);

    const handleCityChange = (event) => {
        setSelectedCities(event.target.value);
    };

    const handleAddShipment = async (e) => {
        e.preventDefault();
        if (selectedCities.length < 2 || selectedCities.length > 5) {
            alert("Выберите от 2 до 5 городов.");
            return;
        }

        try {
            const response = await axios.post('/api/shipments', { cities: selectedCities, description });
            alert('Отправление добавлено успешно!');
        } catch (error) {
            console.error('Ошибка добавления отправления', error);
        }
    };

    useEffect(() => {
        // Initialize the map
        const loadMap = () => {
            if (window.ymaps) {
                window.ymaps.ready(() => {
                    const map = new window.ymaps.Map(mapRef.current, {
                        center: [55.751574, 37.573856],
                        zoom: 9,
                    });

                    const placemarks = [];
                    selectedCities.forEach(cityId => {
                        const cityData = cities.find(c => c.id === cityId);
                        if (cityData) {
                            const placemark = new window.ymaps.Placemark(cityData.coordinates, {
                                balloonContent: cityData.name,
                            });
                            placemarks.push(placemark);
                            map.geoObjects.add(placemark);
                        }
                    });
                });
            }
        };

        // Load the Yandex Maps API script
        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
        script.onload = loadMap;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [selectedCities, cities]);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Добавить отправление
            </Typography>
            <form onSubmit={handleAddShipment}>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="cities-label">Города</InputLabel>
                    <Select
                        labelId="cities-label"
                        id="cities"
                        multiple
                        value={selectedCities}
                        onChange={handleCityChange}
                        input={<OutlinedInput id="select-multiple-chip" label="Города" />}
                        renderValue={(selected) => (
                            <div>
                                {selected.map((value) => (
                                    <Chip key={value} label={cities.find(c => c.id === value)?.name} />
                                ))}
                            </div>
                        )}
                    >
                        {cities.map(city => (
                            <MenuItem key={city.id} value={city.id}>
                                {city.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    label="Описание"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Добавить отправление
                </Button>
            </form>
            <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }} ref={mapRef}></div>
        </Container>
    );
};

export default AddShipmentPage;
