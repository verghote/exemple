"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {
    configurerFormulaire,
    donneesValides,
    filtrerLaSaisie,
    configurerDate
} from '/composant/fonction/formulaire.js';

import {afficherToast} from '/composant/fonction/afficher.js';


// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

/* global dateMin, dateMax */

// éléments du formulaire

const intervalle = document.getElementById('intervalle');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const dateNaissance = document.getElementById('dateNaissance');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');
const externe = document.getElementById('externe');
const redoublant = document.getElementById('redoublant');
const urlGitHub = document.getElementById('urlGitHub');
const presentation = document.getElementById('presentation');
const slam = document.getElementById('SLAM');
const sisr = document.getElementById('SISR');
const nd = document.getElementById('nd');
const ludique = document.getElementById('ludique');
const culture = document.getElementById('culture');
const assoiciative = document.getElementById('assoiciative');
const sportive = document.getElementById('sportive');
const btnEnvoyer = document.getElementById('btnEnvoyer');

// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

// Défintions des événements
telephone.addEventListener('blur', function () {
    const valeurMiseEnForme = this.value.replace(/(\d{2})(?=\d{2})/g, '$1 '); // Ajoute un espace tous les 2 chiffres
    this.value = valeurMiseEnForme.trim(); // Met à jour la valeur du champ avec le numéro formaté
});

telephone.addEventListener('focus', function () {
    this.value = this.value.replace(/\D/g, ''); // Supprime tous les caractères non numériques
});


btnEnvoyer.onclick = () => {
    // remise en forme du numéro de téléphone
    telephone.value = telephone.value.replace(/\D/g, '');
    if (donneesValides()) {
        envoyer();
        afficherToast('Merci d\'avoir transmis vos données');
    }
    telephone.value = telephone.value.replace(/(\d{2})(?=\d{2})/g, '$1 ');
};


// -----------------------------------------------------------------------------------
// Fonctions de traitement
// -----------------------------------------------------------------------------------

function envoyer() {

    // récupération de l'option choisie
    const option = document.querySelector('input[name="option"]:checked');

    // récupération des activités
    const lesActivites = [];
    document.querySelectorAll('input[name="activites"]').forEach(activite => {
        if (activite.checked) {
            lesActivites.push(activite.value);
        }
    });


    const donnees = {
        nom: nom.value,
        prenom: prenom.value,
        dateNaissance: dateNaissance.value,
        email: email.value,
        telephone: telephone.value,
        externe: externe.checked ? 1 : 0,
        redoublant: redoublant.checked ? 1 : 0,
        urlGitHub: urlGitHub.value,
        presentation: presentation.value,
        option: option ? option.value : '',
        lesActivites: JSON.stringify(lesActivites)
    };

    // Les données doivent être envoyées côté serveur par un appel Ajax
    console.log(donnees);
}


// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

// contrôle des données
configurerFormulaire();

// La date doit être comprise entre dateMin et dateMax
configurerDate(dateNaissance, {
    min:dateMin,
    max: dateMax,
    valeur: dateMax
});

filtrerLaSaisie('telephone', /[0-9]/);


// Données de test
nom.value = 'Dupont';
prenom.value = 'Hervé';
dateNaissance.value = '2004-01-01';
email.value = 'dupont.herve@saint-remi.net';
telephone.value = '06 12 34 56 78';
externe.value = 1;
redoublant.value = 1;
urlGitHub.value = 'https://github.com/duponth/';
presentation.value = 'Je suis passionné par l’informatique. \nTrès curieux de nature et logique, je suis attiré de longue date l’informatique.\nJe suis dynamique, sérieux et méthodique dans tous les domaines qui me passionnent et ma curiosité m’amène sans cesse à repousser mes limites pour progresser.';
nd.checked = true;
ludique.checked = true;
sportive.checked = true;
