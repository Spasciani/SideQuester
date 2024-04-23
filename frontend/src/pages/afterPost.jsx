import React from 'react';

const QuestConfirmation = ({ name, phoneNumber, description, reward, place }) => {
    const mapRef = React.useRef(null);

    React.useEffect(() => {
        const loadMap = () => {
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 29.6436325, lng: -82.3549302},
                zoom: 15,
            });
            new window.google.maps.Marker({
                position: { lat: 29.6436325, lng: -82.3549302 },
                map: map,
                title: 'Location'
            });
        };
        loadMap();
    }, [place]);

    return (
        <div className="quest-confirmation-container" style={{ display: 'flex', justifyContent: 'flex-start', padding: '20px', alignItems: 'stretch', marginLeft: '100px' }}>
            <div className="quest-details" style={{ flex: 1, paddingRight: '20px' }}>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Phone Number:</strong> {phoneNumber}</p>
                <p><strong>Description:</strong> {description}</p>
                <p><strong>Reward:</strong> {reward}</p>
                <p><strong>Place:</strong> {place}</p>
            </div>
            <div ref={mapRef} className="map-container" style={{ flex: 3, minHeight: '500px' }}>
            </div>
        </div>
    );
};

export default QuestConfirmation;
