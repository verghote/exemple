"use strict";

// chargement des données depuis le fichier etudiant.json
async function getLesEtudiant() {
    // Récupération des étudiants depuis le fichier JSON
    const reponse = await fetch('/data/etudiant.json');
    return await reponse.json();
}

// afficher.js des données
function afficher(data) {
    let lesLignes = document.getElementById('lesLignes');
    for (const etudiant of data) {
        const tr = lesLignes.insertRow();
        tr.insertCell().innerText = etudiant.nom;
        tr.insertCell().innerText = etudiant.prenom;

        const td = document.createElement('td');
        td.classList.add('text-center');
        // td.style.textAlign = 'center';
        td.innerText = etudiant.option;
        tr.appendChild(td);
    }
}

afficher(await getLesEtudiant());



