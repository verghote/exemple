"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {genererMessage, confirmer} from '/composant/fonction/afficher.js';

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------
const btnConfirmer = document.getElementById('btnConfirmer');
const btnConfirmer2 = document.getElementById('btnConfirmer2');
const msg = document.getElementById('msg');
const msg2 = document.getElementById('msg2');

// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

btnConfirmer.onclick = () => confirmer(() => msg.innerHTML =  genererMessage('Expression lambda exécutée', 'vert'));

btnConfirmer2.onclick = () => confirmer(maFonction);

function maFonction() {
    msg2.innerHTML = genererMessage('Fonction maFonction exécutée', 'orange');
}
