import React from 'react';

const QuestConfirmation = ({ name, phoneNumber, description, reward, place }) => {
    const mapRef = React.useRef(null); 

    React.useEffect(() => {
        const loadMap = () => {
            new window.google.maps.Map(mapRef.current, {
                center: { lat: 29.6436325, lng: -82.3549302}, 
                zoom: 15,
            });
        };
        loadMap();
    }, [place]);

    return (
            <div className="quest-confirmation-container">
                <div className="quest-details">
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Phone Number:</strong> {phoneNumber}</p>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Reward:</strong> {reward}</p>
                    <p><strong>Place:</strong> {place}</p>
                </div>
                <div ref={mapRef} className="map-container" />
            </div>

    );
};

export default QuestConfirmation;
