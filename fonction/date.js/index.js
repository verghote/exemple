"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {decoderDate, encoderDate} from '/composant/fonction/date.js';

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

const btnEncoder = document.getElementById('btnEncoder');
const btnDecoder = document.getElementById('btnDecoder');
const dateFr = document.getElementById('dateFr');
const dateMySQL = document.getElementById('dateMySQL');
const dateFr2 = document.getElementById('dateFr2');
const dateMySQL2 = document.getElementById('dateMySQL2');


// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

btnEncoder.onclick = encoder;
btnDecoder.onclick = decoder;


// -----------------------------------------------------------------------------------
// Fonctions de traitement
// -----------------------------------------------------------------------------------

/**
 * Encode la date au format MySQL
 */
function encoder() {
    dateFr.value = '02/10/2025';
    dateMySQL.value = encoderDate(dateFr.value);
}

/**
 * Decode la date du format MySQL au format français
 */
function decoder() {
    dateMySQL2.value = '2025-09-01';
    dateFr2.value = decoderDate(dateMySQL2.value);
}


// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

