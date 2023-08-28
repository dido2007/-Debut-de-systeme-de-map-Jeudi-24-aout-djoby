
import React from 'react';

function Card({  demandeMetier, tarifDemande, descriptionDemande }) {
    console.log("Props received in Card:", { demandeMetier, tarifDemande, descriptionDemande }); // Ajoutez ce log

    return (
        <div className="border rounded-xl p-6 bg-white shadow-lg max-w-xl mx-auto mt-12 overflow-hidden">
            
            {/* 🖼️ Image de profil (remplacer l'URL par celle de votre choix) */}
            <img src="https://via.placeholder.com/150" alt="User Avatar" className="w-32 h-32 mx-auto rounded-full border-2 border-blue-500 mt-2 mb-4"/>
            
            <div className="text-center">
                {/* 👤 Nom de l'utilisateur */}
                <div className="text-blue-600 text-2xl font-semibold mb-2">
                    👤 {demandeMetier}
                </div>
                {/* 💰 Tarif de l'utilisateur */}
                <div className="text-blue-900 text-lg font-bold mb-4">
                    💰 Tarif: {tarifDemande}€
                </div>
            </div>
            
            {/* 📝 Description de l'utilisateur */}
            <div className="mt-4 px-6">
                <p className="text-gray-700 text-lg">📝 {descriptionDemande}</p>
            </div>
            
        </div>
    );
}

export default Card;