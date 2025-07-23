"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------
import {exporterCSV, exporterJSON} from "/composant/fonction/tableau.js";

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

/* global data */
const lesLignes = document.getElementById('lesLignes');
const btnExportCSV = document.getElementById('btnExportCSV');
const btnExportJSON = document.getElementById('btnExportJSON');

// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

btnExportCSV.onclick = () => {
    exporterCSV(data, `etudiant.csv`);
};

btnExportJSON.onclick = () => {
    exporterJSON(data, `etudiant.json`);
}

// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

lesLignes.innerHTML = '';
for (const element of data) {
    const tr = lesLignes.insertRow();
    tr.insertCell().innerText = element.nom;
    tr.insertCell().innerText = element.prenom;
    tr.insertCell().innerText = element.option;
}

