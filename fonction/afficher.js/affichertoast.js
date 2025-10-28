"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {afficherToast} from '/composant/fonction/afficher.js';

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

const btnAfficherMessage = document.getElementById('btnAfficherMessage');
const btnAfficherMessage2 = document.getElementById('btnAfficherMessage2');
const btnAfficherMessage3 = document.getElementById('btnAfficherMessage3');
const btnAfficherMessage4 = document.getElementById('btnAfficherMessage4');

// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

// Afficher un message furtif dans sa position, son type et sa durée par défaut
btnAfficherMessage.onclick = () => {
    afficherToast("Ceci est un message furtif par défaut");
};


// Afficher un message furtif de type error au milieu de l'écran pendant 4 secondes
btnAfficherMessage2.onclick = () => {
    afficherToast("Ceci est un message furtif de type error au milieu de l'écran pendant 2 secondes", 'error', 'center', 2000);
};


