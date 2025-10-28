"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import { configurerFormulaire, configurerDate, donneesValides, effacerLesChamps, effacerLesErreurs} from "/composant/fonction/formulaire.js";
import {initPasswordToggles} from "/composant/fonction/password.js";
import {afficherSousLeChamp, messageBox} from "/composant/fonction/afficher.js";

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

const btnAjouter = document.getElementById('btnAjouter');
const btnAnnuler = document.getElementById('btnAnnuler');
const btnEffacer = document.getElementById('btnEffacer');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmation = document.getElementById('confirmation');
const dateNaissance = document.getElementById('dateNaissance');

// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

btnAjouter.onclick = ajouter;
btnAnnuler.onclick = () => effacerLesChamps();
btnEffacer.onclick = () => effacerLesErreurs();


// -----------------------------------------------------------------------------------
// Fonctions de traitement
// -----------------------------------------------------------------------------------
function ajouter() {
    let erreur = false;
    // contrôle des champs de saisie
    if (!donneesValides()) {
        erreur = true;
    }

    // contrôle de la confirmation du mot de passe
    if (password.value !== confirmation.value) {
        afficherSousLeChamp('confirmation', "La confirmation n'est pas identique ");
        erreur = true;
    }

    // si aucune erreur
    if (!erreur) {
        messageBox('Données acceptées');
    }
}

// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

// Mise en place des balises div de class 'messageErreur' sur chaque champ de saisie
// true : lancer le contrôle après la saisie de chaque caractère
configurerFormulaire();

// initialisation des champs de type password afin de pouvoir les afficher ou les masquer
initPasswordToggles();

// Mise en place des données de test
email.value = 'guy.verghote@saint-remi.net';
password.value = 'test!000';
confirmation.value = 'Test!001';
// si la date n'est pas valide, elle ne sera pas prise en compte
dateNaissance.value = '2001-02-28';

// La date de naissance doit correspondre à un âge compris entre 17 et 25 ans au premier janvier

// récupérer l'année en cours
const dateCourante = new Date();
const anneeEnCours = dateCourante.getFullYear();
// construire la date maximale (17 ans avant le 1er janvier de l'année en cours)
const dateMax = (anneeEnCours - 17) + '-01-01';
// construire la date minimale (25 ans avant le 1er janvier de l'année en cours)
const dateMin = (anneeEnCours - 25) + '-01-01';

configurerDate(dateNaissance, {
    min:dateMin,
    max: dateMax,
    valeur: dateMax
});

// activer toutes les infobulles 'popover' de l'interface
document.querySelectorAll('[data-bs-toggle="popover"]').forEach(element => new bootstrap.Popover(element));