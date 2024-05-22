import React, { useEffect } from 'react';

const MapComponent = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
        script.async = true;
        script.onload = () => {
            window.ymaps.ready(init);
        };
        document.body.appendChild(script);

        function init() {
            const myMap = new window.ymaps.Map('map', {
                center: [55.751574, 37.573856],
                zoom: 5,
            });

            // Добавить точки отправления и назначения
            const originPlacemark = new window.ymaps.Placemark([55.751574, 37.573856], {
                hintContent: 'Отправная точка',
                balloonContent: 'Это отправная точка',
            });
            const destinationPlacemark = new window.ymaps.Placemark([55.751574, 37.573856], {
                hintContent: 'Точка назначения',
                balloonContent: 'Это точка назначения',
            });

            myMap.geoObjects.add(originPlacemark);
            myMap.geoObjects.add(destinationPlacemark);
        }
    }, []);

    return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default MapComponent;
