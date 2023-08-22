'use client'
import Cards from '@components/Card/Cards';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function LocalisationCard(props) {
    const [position, setPosition] = useState([11.866496, 56.253163]);

    const LocationMarker = () => {
        useMapEvents({
          click(e) {
            setPosition([e.latlng.lat, e.latlng.lng]);
          },
        });
      
        return (
          <Marker position={position} draggable={true} ondragend={(e) => setPosition([e.target.getLatLng().lat, e.target.getLatLng().lng])}>
            <Popup>Vous êtes ici</Popup>
          </Marker>
        );
};


  const navigateToContinue = () => {
    if(position[0] == '' || position[1] == ''){
      console.log("Remplissez les champs");
    }else{
      console.log("Votre position est" + position);
      props.buttonClick(data);
    }

  };

  const data = {
    age: props.data.age,
    phone: props.data.phone,
    fullname: props.data.fullname,
    position: position,
    cardtype: 6,
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setPosition([latitude, longitude]);
        }, (error) => {
            console.error("Erreur lors de la récupération de la localisation", error);
        });
    } else {
        console.error("La géolocalisation n'est pas prise en charge par ce navigateur");
    }
    };

  return (
    <Cards title="Voulez-vous partager votre localisation?" text="Presque finit" textbutton="Valider" buttonvalue={navigateToContinue}>
      <div>
        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your location</label>
            <div style={{ height: '400px' }}>
              <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <LocationMarker />
              </MapContainer>
            </div>
            <button type="button" onClick={getCurrentLocation} style={{marginTop: '10px'}}>Ma localisation</button>
      </div>
    </Cards>
  );
}

export default LocalisationCard;
