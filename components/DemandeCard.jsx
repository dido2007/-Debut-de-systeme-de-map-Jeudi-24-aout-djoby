export default function DemandeCard({ data }) {
    return (
        <div>
            <h2>Annonce: {data.demandeMetier}</h2>
            <p>Tarif: {data.tarifDemande}</p>
            <p>Position: {data.position.latitude}, {data.position.longitude}</p>
            {/* Vous pouvez ajouter plus de détails ici */}
        </div>
    );
}
