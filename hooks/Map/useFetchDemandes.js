"use client"

import { useState, useEffect } from 'react';

function useFetchDemandes(metier) {
  const [demandes, setDemandes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const endpoint = metier ? `/api/map/allDemande?metier=${metier}` : '/api/map/allDemande';
        const res = await fetch(endpoint);
        const data = await res.json();
        setDemandes(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, [metier]);  // L'effet sera déclenché à nouveau chaque fois que "metier" change

  return { demandes, loading, error };
}

export default useFetchDemandes;
