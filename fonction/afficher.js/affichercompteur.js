"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {afficherCompteur} from '/composant/fonction/afficher.js';

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------
const compteur = document.getElementById('compteur');
const compteur2 = document.getElementById('compteur2');

const btnGenerer = document.getElementById('btnGenerer');
const btnGenerer2 = document.getElementById('btnGenerer2');


// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

btnGenerer.onclick = () => {
    afficherCompteur({
        conteneur: compteur,
        valeurFinale: Math.round(Math.random() * 10000),
    });
}

btnGenerer2.onclick = () => {
    afficherCompteur({
        conteneur: compteur2,
        valeurFinale: Math.round(Math.random() * 10000),
        duree: Math.round(Math.random() * 5000),
        styles: {
            color: 'white',
            fontSize: '20px',
            textAlign: 'right',
            backgroundColor: "#0790e4",
            padding: "5px",
            borderRadius: "8px",
            margin: "10px 0",
            width: "100px"
        }
    });
}

