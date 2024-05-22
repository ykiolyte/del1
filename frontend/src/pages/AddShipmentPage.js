import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const AddShipmentPage = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [description, setDescription] = useState('');
    const mapRef = useRef(null);

    const handleAddShipment = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/shipments', { origin, destination, description });
            alert(response.data);
        } catch (error) {
            alert('Ошибка добавления отправления');
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

                    // Add placemarks on the map for origin and destination
                    const originPlacemark = new window.ymaps.Placemark(map.getCenter(), {
                        balloonContent: 'Место отправления',
                    }, {
                        draggable: true,
                    });

                    const destinationPlacemark = new window.ymaps.Placemark(map.getCenter(), {
                        balloonContent: 'Место назначения',
                    }, {
                        draggable: true,
                    });

                    map.geoObjects.add(originPlacemark);
                    map.geoObjects.add(destinationPlacemark);

                    // Update state when placemarks are moved
                    originPlacemark.events.add('dragend', () => {
                        const coords = originPlacemark.geometry.getCoordinates();
                        setOrigin(coords.join(', '));
                    });

                    destinationPlacemark.events.add('dragend', () => {
                        const coords = destinationPlacemark.geometry.getCoordinates();
                        setDestination(coords.join(', '));
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
            // Clean up script and map
            document.head.removeChild(script);
        };
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Добавить отправление
            </Typography>
            <form onSubmit={handleAddShipment}>
                <div>
                    <TextField
                        label="Откуда"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        label="Куда"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        label="Описание"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                </div>
                <Button type="submit" variant="contained" color="primary">
                    Добавить отправление
                </Button>
            </form>
            <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }} ref={mapRef}></div>
        </Container>
    );
};

export default AddShipmentPage;
