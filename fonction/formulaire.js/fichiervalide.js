"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {configurerFormulaire, effacerLesErreurs, fichierValide,} from "/composant/fonction/formulaire.js";
import {afficherSousLeChamp, afficherToast} from "/composant/fonction/afficher";

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

/* global lesParametres, lesFichiers */

let leFichier = null; // contient le fichier uploadé pour l'ajout

const fichier = document.getElementById('fichier');
const nomFichier = document.getElementById('nomFichier');
const btnFichier = document.getElementById('btnFichier');
const btnAjouter = document.getElementById('btnAjouter');

// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

// Déclencher le clic sur le champ de type file lors d'un clic sur le bouton btnFichier
btnFichier.onclick = () => fichier.click();

// ajout du glisser déposer sur le champ nomFichier
nomFichier.ondragover = (e) => e.preventDefault();
nomFichier.ondrop = (e) => {
    e.preventDefault();
    controlerFichier(e.dataTransfer.files[0]);
};

// Lancer la fonction controlerFichier si un fichier a été sélectionné dans l'explorateur
fichier.onchange = () => {
    if (fichier.files.length > 0) {
        controlerFichier(fichier.files[0]);
    }
};

// Lancer la demande d'ajout
btnAjouter.onclick = () => {
    if (leFichier === null) {
        afficherSousLeChamp('fichier', 'Veuillez sélectionner ou faire glisser un fichier');
    } else {
        afficherToast("Ce fichier est valide et peut être envoyé au serveur");
    }
};

// -----------------------------------------------------------------------------------
// Fonctions de traitement
// -----------------------------------------------------------------------------------

/**
 * Contrôle le document sélectionné au niveau de son extension et de sa taille
 * Affiche le nom du fichier dans la balise 'nomFichier' ou un message d'erreur sous le champ fichier
 * Renseigne la variable globale leFichier
 * @param file Objet file téléversé
 */
function controlerFichier(file) {
    effacerLesErreurs();
    if (fichierValide(file, lesParametres)) {
        nomFichier.textContent = file.name;
        leFichier = file;
    } else {
        leFichier = null;
        nomFichier.textContent = '';
    }
}




// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

// Contrôle des données
configurerFormulaire();

// initialisation des données sur l'interface
fichier.accept = lesParametres.accept;

let label = document.querySelector(`label[for="nomFichier"]`);
label.innerText = lesParametres.label;

