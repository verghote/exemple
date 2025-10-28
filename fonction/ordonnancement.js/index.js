"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {messageBox} from "/composant/fonction/afficher.js";
import {ordonnerElement} from "/composant/fonction/ordonnancement.js";

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

/* global data */

// -----------------------------------------------------------------------------------
// Fonctions de traitement
// -----------------------------------------------------------------------------------

// parcourir toutes les balises span dans cadreD et retourner faux si les valeurs ne sont pas ordonnées
function correct(lesElementsOrdonnes) {
    let precedent = 0;
    for (const n of lesElementsOrdonnes) {
        // récupérer l'élément correspondant dans le tableau lesNombres
        // et convertir sa valeur en nombre
        const element = lesNombres.find(x => x.id == n);
        if (element.valeur < precedent) {
            return false;
        } else {
            precedent = element.valeur;
        }
    }
    return true;
}

function verifier(lesElementsOrdonnes) {

    if (!correct(lesElementsOrdonnes)) {
        messageBox("Les nombres ne sont pas malheureusement pas ordonnés !,");
    } else {
        messageBox("Bravo, tous les nombres sont correctement ordonnés,");
    }
}

// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

// Génération des 10 nombres aléatoires sans doublon
const lesNombres = [];
let nb = 0;

while (nb < 10) {
    const nombre = Math.ceil(Math.random() * 99);

    // Vérifie si un objet avec la même valeur existe déjà
    const existeDeja = lesNombres.some(el => el.valeur === nombre);

    if (!existeDeja) {
        lesNombres.push({ id: nb, valeur: nombre });
        nb++;
    }
}


ordonnerElement(lesNombres, verifier, {champ: 'valeur'});

