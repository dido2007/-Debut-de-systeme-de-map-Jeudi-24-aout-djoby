"use client"

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Card from '../../../../components/AnnoncePage/Demande';

const DemandePage = () => {
  const searchParams = useSearchParams();
  const phoneNumber = searchParams.get("phoneNumber");

  console.log("PhoneNumber from useSearchParams:", phoneNumber); // Ceci affichera la valeur de phoneNumber dans la console

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/annonce/demande/${phoneNumber}`);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, [phoneNumber]);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error.message}</div>;

  return (
    <Card
      demandeMetier={data?.demandeMetier}
      descriptionDemande={data?.descriptionDemande}
      tarifDemande={data?.tarifDemande}
    />
  );
};

export default DemandePage;
