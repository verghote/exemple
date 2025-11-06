"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {afficherToast, corriger} from '/composant/fonction/afficher.js';

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

const btnModifier = document.getElementById('btnModifier');
const email = document.getElementById('email');

// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

btnModifier.onclick = () => {
    if (email.checkValidity()) {
        email.dataset.old = email.value; // sauvegarde de l'email avant modification
        afficherToast("Modification prise en compte", "info");

    } else {
        corriger(email, email.validationMessage , email.dataset.old); // restauration de l'email
    }
}

// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

// alimentation de l'email avec une valeur par défaut
email.value = "guy.verghote@saint-remi.net";
email.dataset.old = email.value; // sauvegarde de l'email avant modification    