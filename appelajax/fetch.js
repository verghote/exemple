"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {configurerFormulaire, donneesValides} from '/composant/fonction/formulaire.js';
import {afficherToast, genererMessage} from "/composant/fonction/afficher.js";

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

const btnInit = document.getElementById("btnInit");

const lesLignes = document.getElementById('lesLignes');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const btnAjouter = document.getElementById('btnAjouter');
const msg = document.getElementById('msg');

// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

btnAjouter.onclick = () => {
    if (donneesValides()) {
        ajouter();
    }
};

btnInit.onclick = async () => {
    const reponse = await fetch('ajax/init.php');
    const data = await reponse.json();
    afficher(data);
};

// -----------------------------------------------------------------------------------
// Fonctions de traitement
// -----------------------------------------------------------------------------------

async function chargerFichier() {
    const reponse = await fetch('/data/etudiant.json');
    const data = await reponse.json();
    afficher(data);
}

function afficher(data) {
    lesLignes.innerHTML = '';
    for (const etudiant of data) {
        const tr = lesLignes.insertRow();
        tr.insertCell().innerText = etudiant.nom + ' ' + etudiant.prenom;
    }
}

/**
 * Ajoute un étudiant dans le tableau et réécrit le fichier etudiant.json
 */
function ajouter() {
    // réécriture du fichier etudiant.json
    const formData = new FormData();
    formData.append('nom', nom.value);
    formData.append('prenom', prenom.value);
    const options = {
        method: 'POST',
        body: formData
    };
    fetch('ajax/ajouter.php', options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Gérer la réponse du serveur
            afficherToast('Etudiant ajouté dans le fichier json');
            afficher(data);
        })
        .catch(error => msg.innerHTML = genererMessage(error.message));
}

// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

// Mise en place des balises div de class 'messageErreur' sur chaque champ de saisie
configurerFormulaire();

chargerFichier();