"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------
import {afficherVeuillezPatienter, fermerVeuillezPatienter, genererMessage} from "/composant/fonction/afficher.js";

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

const btnLancer = document.getElementById('btnLancer');
const reponse = document.getElementById('reponse');

// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

btnLancer.onclick = async () => {
    const modal = await afficherVeuillezPatienter(); // ✅ on attend la vraie instance

    // simulation d'une attente de 3 secondes
    // resolve est une fonction de l'api des promesses qui permet de terminer la promesse
    await new Promise(resolve => setTimeout(resolve, 3000));

    await fermerVeuillezPatienter(modal);

    reponse.innerHTML = genererMessage('Traitement terminé avec succès', 'vert');
};