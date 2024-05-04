import React, { useEffect, useRef } from 'react';
import './Contact.css'
function MapWithMarker() {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current && window.DG && window.DG.Map && window.DG.marker) {
            // После загрузки скрипта 2ГИС API инициализируем карту
            const map = new window.DG.Map('map', {
                center: [54.98659 , 73.3788], // координаты центра карты 54°59'11.9
                zoom: 16 // начальное масштабирование карты
            });
            mapRef.current = map;

            // Добавляем метку на карту
            const marker = new window.DG.marker([54.98659 , 73.3788]).addTo(map);
        } else {
            console.error('2GIS API is not loaded or marker object is not defined.');
        }
    }, []);

    return <div className='map' id="map" style={{ width: '500px', height: '400px' }}></div>;
}

export default MapWithMarker;