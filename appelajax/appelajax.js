"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {appelAjax} from "/composant/fonction/ajax.js";
import {configurerFormulaire, donneesValides} from "/composant/fonction/formulaire.js";
import {afficherToast} from "../composant/fonction/afficher";

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

const lesLignes = document.getElementById('lesLignes');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const btnAjouter = document.getElementById('btnAjouter');
const btnInit = document.getElementById('btnInit');

// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

btnAjouter.onclick = () => {
    if (donneesValides()) {
        ajouter();
    }
};

btnInit.onclick = () => {
    appelAjax({
        url: 'ajax/init.php',
        success: data => afficher(data)
    });
};

// -----------------------------------------------------------------------------------
// Fonctions de traitement
// -----------------------------------------------------------------------------------

function chargerFichier() {
    appelAjax({
        url: '/data/etudiant.json',
        success: data => afficher(data)
    });
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
    appelAjax({
        url: 'ajax/ajouter.php',
        data: {
            nom: nom.value,
            prenom: prenom.value
        },
        success : (data) => {
            afficherToast('Etudiant ajouté dans le fichier json');
            afficher(data);
        }
    });
}

// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------
chargerFichier();
// Mise en place des balises div de class 'messageErreur' sur chaque champ de saisie
configurerFormulaire();