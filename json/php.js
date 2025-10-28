"use strict";
// lecture des données d'un fichier json transféré dans un tableau

/* global lesEtudiants */

const lesLignes = document.getElementById('lesLignes');


for (const etudiant of lesEtudiants) {
    const tr = lesLignes.insertRow();
    tr.insertCell().innerText = etudiant.nom;
    tr.insertCell().innerText = etudiant.prenom;
}






