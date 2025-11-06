"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {genererMessage} from '/composant/fonction/afficher.js';

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

const btnGenererMessage = document.getElementById('btnGenererMessage');

// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

btnGenererMessage.onclick = () => {
    const lesCouleurs = ['vert', 'orange', 'rouge'];
    const i = Math.round(Math.random() * 2);
    document.getElementById('msg').innerHTML = genererMessage('Message généré', lesCouleurs[i]);
};

