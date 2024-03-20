import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const libraries = ['places'];
  const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
  };
  const center = {
    lat: 29.6436325, 
    lng: -82.3549302,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCdk5BiITfyQaeI538h4nfAyeJp_mFWnCM', 
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default MapComponent;