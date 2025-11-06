"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {messageBox} from '/composant/fonction/afficher.js';

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

const btnAfficherMessage = document.getElementById('btnAfficherMessage');
const btnAfficherMessage2 = document.getElementById('btnAfficherMessage2');

// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

// Afficher un message furtif dans sa position, son type et sa durée par défaut
btnAfficherMessage.onclick = () => {
    messageBox("Traitement réalisé avec succès" );
};


// Afficher un message furtif de type error au milieu de l'écran pendant 4 secondes
btnAfficherMessage2.onclick = () => {
    messageBox("Traitement en échec", 'error');
};

