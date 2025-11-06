"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {enleverAccent, supprimerEspace, enleverAccentEtMajuscule, comparerSansCasse, comparerSansAccentEtSansCasse, contenir} from "/composant/fonction/formulaire.js";
import {genererMessage} from "/composant/fonction/afficher.js";

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

const btnComparer = document.getElementById('btnComparer');
const str1 = document.getElementById('str1');
const str2 = document.getElementById('str2');
const str1SansEspace = document.getElementById('str1SansEspace');
const str2SansEspace = document.getElementById('str2SansEspace');
const str1SansAccent = document.getElementById('str1SansAccent');
const str2SansAccent = document.getElementById('str2SansAccent');
const str1SansAccentEtSansMajuscule = document.getElementById('str1SansAccentEtSansMajuscule');
const str2SansAccentEtSansMajuscule = document.getElementById('str2SansAccentEtSansMajuscule');
const comparer1 = document.getElementById('comparer1');
const comparer2 = document.getElementById('comparer2');
const comparer3 = document.getElementById('comparer3');
const comparer4 = document.getElementById('comparer4');
const msg = document.getElementById('msg');


// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

str1.oninput = () => {
    if (str1.checkValidity()) {
        str1SansEspace.value = supprimerEspace(str1.value);
        str1SansAccent.value = enleverAccent(str1.value);
        str1SansAccentEtSansMajuscule.value = enleverAccentEtMajuscule(str1.value);
        comparer();
    } else {
        msg.innerHTML = genererMessage('Veuillez renseigner le formulaire', 'rouge');
    }

};

str2.oninput = () => {
    if (str2.checkValidity()) {
        str2SansEspace.value = supprimerEspace(str2.value);
        str2SansAccent.value = enleverAccent(str2.value);
        str2SansAccentEtSansMajuscule.value = enleverAccentEtMajuscule(str2.value);
        comparer();
    } else {
        msg.innerHTML = genererMessage('Veuillez renseigner le formulaire', 'rouge');
    }
};

// -----------------------------------------------------------------------------------
// Fonctions de traitement
// -----------------------------------------------------------------------------------

function comparer() {
   if (!str1.checkValidity() || !str2.checkValidity()) {
       comparer1.innerHTML = '';
       comparer2.innerHTML = '';
       comparer3.innerHTML = '';
       comparer4.innerHTML = '';
       return;
   }

   if (str1.value === str2.value) {
       comparer1.innerHTML = 'Les deux chaînes sont identiques';
   } else {
       comparer1.innerHTML = 'Les deux chaînes sont différentes';
   }

   if (comparerSansCasse(str1.value, str2.value)) {
       comparer2.innerHTML = 'Les deux chaînes sont identiques';
   } else {
       comparer2.innerHTML = 'Les deux chaînes sont différentes';
   }

    if (comparerSansAccentEtSansCasse(supprimerEspace(str1.value), supprimerEspace(str2.value))) {
        comparer3.innerHTML = 'Les deux chaînes sont identiques';
    } else {
        comparer3.innerHTML = 'Les deux chaînes sont différentes';
    }
    if (contenir(str1SansEspace.value, str2SansEspace.value)) {
        comparer4.innerHTML = 'La première chaîne contient la seconde';
    } else if (contenir(str2SansEspace.value, str1SansEspace.value)) {
        comparer4.innerHTML = 'La seconde chaîne contient la première';
    } else {
        comparer4.innerHTML = 'Aucune des deux chaînes ne contient l\'autre';
    }
}


