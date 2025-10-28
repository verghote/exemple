"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

// la fonction onOff permettant l'ouverture et la fermeture d'un cadre
import {initialiserCartesParIds} from "/composant/fonction/openclose.js";

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------
const cadre01 = document.getElementById('cadre01');

// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

// Mise en place du système d'ouverture/fermeture uniquement sur le cadre 1

initialiserCartesParIds(["cadre01"]);


