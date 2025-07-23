"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {activerTri } from "/composant/fonction/tableau.js";

// -------------------------------------------------------------------- ---------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

/* global data */
const lesLignes = document.getElementById('lesLignes');

// -----------------------------------------------------------------------------------
// Fonctions de traitement
// -----------------------------------------------------------------------------------

function afficher() {

    lesLignes.innerHTML = '';
    for (const element of data) {
        const tr = lesLignes.insertRow();
        tr.insertCell().innerText = element.nomPrenom;
        tr.insertCell().innerText = element.dateNaissance;
        tr.insertCell().innerText = element.option;
        tr.insertCell().innerText = element.promotion;
    }
}

// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

// Tri et export
activerTri({
    idTable: "leTableau",
    getData: () => data,
    afficher: afficher,
    triInitial : {colonne : 'promotion', sens : 'asc'}
});

afficher();

