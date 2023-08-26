"use client"

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



import useFetchDemandes from '@hooks/Map/useFetchDemandes';

const MapDemande = ({ searchTerm }) => {
  const [userPosition, setUserPosition] = useState(null);
  const { demandes, loading, error } = useFetchDemandes(searchTerm);

  const customIcon = new L.Icon({
    iconUrl: '/assets/map-marker.svg',
    iconSize: [32, 32],  
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setUserPosition([position.coords.latitude, position.coords.longitude]);
      });
    } else {
      // Géolocalisation non prise en charge
      alert("La géolocalisation n'est pas prise en charge par ce navigateur.");
    }
  }, []);

  if (!userPosition) {
    return <p>Chargement de la position...</p>;
  }
  // Display les données 

  if (loading) {
    return <p>Chargement des demandes...</p>;
  }

  if (error) {
    return <p>Erreur lors du chargement des demandes.</p>;
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
    <MapContainer center={userPosition} zoom={13} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      {demandes.map(demande => 
        demande.position && (
          <Marker             icon={customIcon} key={demande._id} position={[demande.position.latitude, demande.position.longitude]}>
              <Popup>
                  <div className="text-center p-2">
                      <div className="text-lg font-bold mb-2 flex justify-center items-center">
                          <span className="mr-2">💰</span>
                          Au minimum : <span className="text-blue-500 ml-2">{demande.tarifDemande}DT</span>
                     </div>
                     <div className="text-md mb-3 flex justify-center items-center">
                          <span className="mr-2">🔍</span>
                          Cherche un : <span className="font-medium ml-2">{demande.demandeMetier}</span>
                      </div>
                      <button className="w-full bg-blue-500 rounded-lg px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition">
                          Consulter l'offre
                      </button>
                  </div>
              </Popup>
          </Marker>
        )
      )}
      </MapContainer>
    </div>
  );
};

export default MapDemande;
