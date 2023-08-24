"use client"

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

import useFetchDemandes from '@hooks/Map/useFetchDemandes';

const MapDemande = () => {
  const [userPosition, setUserPosition] = useState(null);
  const { demandes, loading, error } = useFetchDemandes();


  useEffect(() => {
    // Corrige les icônes Leaflet lorsqu'elles sont utilisées avec Webpack
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
   });
  }, []);

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
          <Marker key={demande._id} position={[demande.position.latitude, demande.position.longitude]}>
            <Popup>
              {demande.demandeMetier} - {demande.tarifDemande}DT
            </Popup>
          </Marker>
        )
      )}
      </MapContainer>
    </div>
  );
};

export default MapDemande;
