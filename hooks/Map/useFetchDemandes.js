"use client"

import { useState, useEffect } from 'react';

function useFetchDemandes() {
  const [demandes, setDemandes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/map/allDemande');
        const data = await res.json();
        setDemandes(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { demandes, loading, error };
}

export default useFetchDemandes;
