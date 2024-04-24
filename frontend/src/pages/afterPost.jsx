
import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const defaultCenter = { lat: 29.6463314, lng: -82.353945};
const QuestConfirmation = () => {
    const mapRef = useRef(null);
    const location = useLocation();

    const { name, phoneNumber, description, reward, latitude, longitude, place, image } = location.state || {};
     useEffect(() => {
        const loadMap = () => {
            const center = place && latitude && longitude
                ? { lat: latitude, lng: longitude }
                : defaultCenter;

            const map = new window.google.maps.Map(mapRef.current, {
                center: center,
                zoom: 13,
            });

            new window.google.maps.Marker({
                position: center,
                map: map,
                title: place ? place || 'Selected Location' : 'Default Location'
            });
        };

        loadMap();
    }, [place]);


    return (
        <div className="quest-confirmation-container" style={{ display: 'flex: 1', padding: '20px', marginLeft: '100px', minHeigh: '500px' }}>
            <div className="quest-details" style={{ flex: 1, paddingRight: '20px' }}>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Phone Number:</strong> {phoneNumber}</p>
                <p><strong>Description:</strong> {description}</p>
                <p><strong>Reward:</strong> {reward}</p>
                <p><strong>Place:</strong> {place ? place : 'Not provided'}</p>
                <div>
                    <strong>Image (Optional):</strong>
                    {image && <img src={image} alt="Uploaded Quest" style={{ width: '400px', display: 'block', marginTop: '10px' }} />}
                </div>            
                </div>
            <div ref={mapRef} className="map-container">
            </div>
        </div>
    );
};

export default QuestConfirmation;
