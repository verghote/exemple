"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import { configurerFormulaire, donneesValides} from "/composant/fonction/formulaire.js";
import {appelAjax } from "/composant/fonction/ajax.js";
import {afficherToast} from "/composant/fonction/afficher";
import {initPasswordToggles} from "/composant/fonction/password.js";

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

const login = document.getElementById('login');
const password = document.getElementById('password');
const btnValider = document.getElementById('btnValider');
const msg = document.getElementById('msg');

// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------
// la touche entrée permet de valider le formulaire
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        if (donneesValides()) {
            connecter();
        }
    }
});

btnValider.onclick = () => {
    if (donneesValides()) {
        connecter();
    }
};


// -----------------------------------------------------------------------------------
// Fonctions de traitement
// -----------------------------------------------------------------------------------

function connecter() {
    // Vider la zone de message utilisateur
    msg.innerHTML = "";
    appelAjax({
        url: 'ajax/connecter.php',
        data: {
            login: login.value,
            password: password.value,
        },
        success: (data) => {
            afficherToast(data.success)
        }
    });
}

// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

initPasswordToggles();
configurerFormulaire();
login.focus();