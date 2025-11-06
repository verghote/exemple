"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {getAge} from '/composant/fonction/date.js';
import {filtrerLaSaisie} from '/composant/fonction/formulaire.js';
import {initAutoComplete} from "/composant/fonction/autocomplete.js";

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

/* global data, autoComplete */

// récupération des éléments de l'interface
const licence = document.getElementById('licence');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const sexe = document.getElementById('sexe');
const dateNaissance = document.getElementById('dateNaissance');
const nomClub = document.getElementById('nomClub');
const idCategorie = document.getElementById('idCategorie');
const age = document.getElementById('age');

// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

// Efface tous  quand celui-ci est sélectionné
nom.onfocus = effacer;


// -----------------------------------------------------------------------------------
// Fonctions de traitement
// -----------------------------------------------------------------------------------

function afficher(licencie) {
    licence.innerText = licencie.licence;
    nom.innerText = licencie.nom;
    prenom.innerText = licencie.prenom;
    sexe.innerText = licencie.sexe;
    dateNaissance.innerText = licencie.dateNaissanceFr;
    nomClub.innerText = licencie.nomClub;
    idCategorie.innerText = licencie.idCategorie;
    if(licencie.dateNaissanceFr !== '') {
        age.innerText = getAge(licencie.dateNaissanceFr) + ' ans';
    } else {
        age.innerText = '';
    }
    nom.blur();
}

/**
 * Efface les valeurs affichées dans les balises div de class fiche-value.
 */
function effacer() {
    document.querySelectorAll('.fiche-value').forEach(el => {
        const input = el.querySelector('input');
        if (input) {
            input.value = ''; // efface juste le contenu du champ input
        } else {
            el.innerText = ''; // efface le contenu textuel des autres champs
        }
    });
}

// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

// paramétrage du composant autoComplete
initAutoComplete({
    selector: "#nom",
    fetchUrl: "ajax/getbynom.php",
    searchKey: "nom",
    onSelection: (selection) => {
        nom.value = selection.nom;
        afficher(selection);
    }
});

// filtrage de la saisie
filtrerLaSaisie('nom', /[a-zA-Z ]/);



