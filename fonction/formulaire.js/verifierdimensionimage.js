"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {configurerFormulaire, effacerLesErreurs, fichierValide, verifierDimensionsImage,} from "/composant/fonction/formulaire.js";
import {afficherToast, confirmer} from "/composant/fonction/afficher";

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

/* global lesParametres */

// récupération des élements sur l'interface
const cible = document.getElementById('cible');
const fichier = document.getElementById('fichier');
const label = document.getElementById('label');

// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

// Déclencher le clic sur le champ de type file lors d'un clic dans la zone cible
cible.onclick = () => fichier.click();

// // ajout du glisser déposer dans la zone cible
cible.ondragover = (e) => e.preventDefault();
cible.ondrop = (e) => {
    e.preventDefault();
    controlerFichier(e.dataTransfer.files[0]);
};

// Lancer la fonction controlerFichier si un fichier a été sélectionné dans l'explorateur
fichier.onchange = () => {
    if (fichier.files.length > 0) {
        controlerFichier(fichier.files[0]);
    }
};

// -----------------------------------------------------------------------------------
// Fonctions de traitement
// -----------------------------------------------------------------------------------

function controlerFichier(file) {
    // Efface les erreurs précédentes
    effacerLesErreurs();
    // Vérification de taille et d'extension
    if (!fichierValide(file, lesParametres)) {
        return;
    }

    // si le redimensionnement est demandé, on ne vérifie pas les dimensions
    if (lesParametres.redimensionner) {
        afficherToast("La photo est acceptée, elle sera redimensionnée lors de l'ajout");
    } else {
        // sinon on vérifie les dimensions
        verifierDimensionsImage(file, lesParametres, () => ajouter(file));
    }
}

/**
* Ajoute un fichier à la liste des fichiers et l'affiche dans l'interface.
* @param file
*/
function ajouter(file) {
    afficherToast("Les dimensions ont été controlées, le fichier va être ajouté");
}


// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

// Contrôle des données
configurerFormulaire();

// initialisation des données sur l'interface
fichier.accept = lesParametres.accept;

label.innerText = lesParametres.label;
