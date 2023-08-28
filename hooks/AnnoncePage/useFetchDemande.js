import { useState, useEffect } from 'react';

function useFetchDemande() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [phoneFromAPI, setPhoneFromAPI] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/annonce/demande/28732611`);
        const result = await response.json();
        
        setData(result);
        setPhoneFromAPI(result.phoneNumber); // Suppose que phoneNumber est inclus dans la réponse
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { data, loading, error, phoneFromAPI };
}
  


export default useFetchDemande;