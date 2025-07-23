"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {configurerFormulaire, donneesValides} from '/composant/fonction/controle.js';
import {appelAjax} from "../composant/fonction/ajax";

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

let lesEtudiants = [];
const lesLignes = document.getElementById('lesLignes');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const btnAjouter = document.getElementById('btnAjouter');

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
    lesEtudiants = await reponse.json();
    afficher();
}

// -----------------------------------------------------------------------------------
// Fonctions de traitement
// -----------------------------------------------------------------------------------

async function chargerFichier() {
    const reponse = await fetch('/data/etudiant.json');
    lesEtudiants = await reponse.json();
    afficher();
}

function afficher() {
    lesLignes.innerHTML = '';
    for (const etudiant of lesEtudiants) {
        const tr = lesLignes.insertRow();
        tr.insertCell().innerText = etudiant.nom + ' ' + etudiant.prenom;
    }
}

/**
 * Ajoute un étudiant dans le tableau et réécrit le fichier etudiant.json
 */
function ajouter() {
    const etudiant = {nom: nom.value, prenom: prenom.value};
    // Ajout dans le tableau
    lesEtudiants.push(etudiant);
    // tri sur nom et prénom
    lesEtudiants.sort((x, y) => x.nom.localeCompare(y.nom) || x.prenom.localeCompare(y.prenom));
    // réécriture du fichier etudiant.json
    const formData = new FormData();
    formData.append('lesEtudiants', JSON.stringify(lesEtudiants));
    const options = {
        method: 'POST',
        body: formData
    };
    fetch('ajax/rewrite.php', options);
    afficher();
}

// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

// Mise en place des balises div de class 'messageErreur' sur chaque champ de saisie
configurerFormulaire(true);

chargerFichier();