"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {appelAjax} from "/composant/fonction/ajax.js";
import {configurerFormulaire, donneesValides} from "/composant/fonction/controle.js";

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

let lesEtudiants = [];
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
        dataType: 'json',
        success : (data) => {
            lesEtudiants = data;
            afficher();
        }
    });
}

// -----------------------------------------------------------------------------------
// Fonctions de traitement
// -----------------------------------------------------------------------------------

function chargerFichier() {
    appelAjax({
        url: '/data/etudiant.json',
        dataType: 'json',
        success: (data) => {
            lesEtudiants = data;
            afficher();
        }
    })
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
    console.log(JSON.stringify(lesEtudiants))
    appelAjax({
        url: 'ajax/rewrite.php',
        dataType: 'text',
        data: {
            lesEtudiants: JSON.stringify(lesEtudiants)
        }
    });
    afficher();
}

// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------
chargerFichier();
// Mise en place des balises div de class 'messageErreur' sur chaque champ de saisie
configurerFormulaire();