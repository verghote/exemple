"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {retournerVers, retournerVersApresConfirmation} from '/composant/fonction/afficher.js';

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

const btnGenerer = document.getElementById('btnGenerer');
const btnGenerer2 = document.getElementById('btnGenerer2');

// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

btnGenerer.onclick = () => retournerVers('Action terminée', '/');

btnGenerer2.onclick = () => retournerVersApresConfirmation('Action terminée', '/');


