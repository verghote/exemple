"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {
    creerInputTexte,
    creerBoutonSuppression,
    creerBoutonModification,
    creerSelect, creerCheckbox
} from "/composant/fonction/formulaire.js";
import {afficherToast} from "/composant/fonction/afficher";

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

const btnModifier = document.getElementById('btnModifier');
const btnSupprimer = document.getElementById('btnSupprimer');
const zoneTexte = document.getElementById('zoneTexte');
const zoneListe = document.getElementById('zoneListe');
const caseACocher = document.getElementById('caseACocher');

// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

btnModifier.appendChild(creerBoutonModification(() =>  afficherToast('Modification enregistrée') ));
btnSupprimer.appendChild(creerBoutonSuppression(() =>  afficherToast('Suppression enregistrée') ));
zoneTexte.appendChild(creerInputTexte({ placeholder : 'Saisir votre texte'}));
const zdl = creerSelect();
zdl.add(new Option('SLAM', 'SLAM'));
zdl.add(new Option('SISR', 'SISR'));
zoneListe.appendChild(zdl);

caseACocher.appendChild(creerCheckbox());
