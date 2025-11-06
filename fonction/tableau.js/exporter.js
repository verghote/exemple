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
    exporterCSV(data, `etudiant`);
};

btnExportJSON.onclick = () => {
    exporterJSON(data, `etudiant`);
}

// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

lesLignes.innerHTML = '';
for (const element of data) {
    const tr = lesLignes.insertRow();
    tr.insertCell().innerText = element.nom;
    tr.insertCell().innerText = element.prenom;
}

