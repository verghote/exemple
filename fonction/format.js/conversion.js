"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------
import {
    enleverAccent,
    supprimerEspace,
    formater,
    conversionOctet, ucWord
} from '/composant/fonction/format.js';

import {filtrerLaSaisie} from '/composant/fonction/controle.js';
import {decoderDate, encoderDate} from '/composant/fonction/date.js';

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

const btnEncoder = document.getElementById('btnEncoder');
const btnDecoder = document.getElementById('btnDecoder');
const dateFr = document.getElementById('dateFr');
const dateMySQL = document.getElementById('dateMySQL');
const phrase = document.getElementById('phrase');
const phraseF = document.getElementById('phraseF');
const btnUcWord = document.getElementById('btnUcWord');
const valeur = document.getElementById('valeur');
const btnFormat = document.getElementById('btnFormat');
const octet = document.getElementById('octet');
const unite = document.getElementById('unite');
const res = document.getElementById('res');

// Champs de sortie pour le formatage
const valeurE = document.getElementById('valeurE');
const valeurP = document.getElementById('valeurP');
const valeurD = document.getElementById('valeurD');
const valeurES = document.getElementById('valeurES');
const valeurPS = document.getElementById('valeurPS');
const valeurDS = document.getElementById('valeurDS');

const btnConversion = document.getElementById('btnConversion');

// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

btnEncoder.onclick = encoder;
btnDecoder.onclick = decoder;
btnUcWord.onclick = word;

btnFormat.onclick = () => {
    if (valeur.checkValidity()) {
        const v = parseFloat(valeur.value);

        console.log(v.toLocaleString('fr-FR', {
            style: 'percent',
            minimumFractionDigits: 3,
            maximumFractionDigits: 3
        }));

        valeur.style.borderColor = '';

        valeurE.value  = formater(v);
        valeurP.value  = formater(v, { format: '%' });
        valeurD.value  = formater(v, { format: '', decimale: 3 });

        valeurES.value = formater(v, { separateur: ',' });
        valeurPS.value = formater(v, { format: '%', separateur: ',' });
        valeurDS.value = formater(v, { format: '', decimale: 3, separateur: ',' });

    } else {
        console.log(valeur.validationMessage);
        valeur.style.borderColor = 'red';
    }
};

btnConversion.onclick = conversion;

// -----------------------------------------------------------------------------------
// Fonctions de traitement
// -----------------------------------------------------------------------------------

/**
 * Encode la date au format MySQL
 */
function encoder() {
    dateFr.value = '02/10/2023';
    dateMySQL.value = encoderDate(dateFr.value);
}

/**
 * Decode la date du format MySQL au format français
 */
function decoder() {
    dateMySQL.value = '2023-09-01';
    dateFr.value = decoderDate(dateMySQL.value);
}

/**
 * Met en majuscule la première lettre de chaque mot de la phrase
 */
function word() {
    phraseF.value = ucWord(enleverAccent(supprimerEspace(phrase.value.trim())));
}

/**
 * Formate la valeur saisie en octets
 */
function conversion() {
    res.value = conversionOctet(parseInt(octet.value), unite.value);
}

// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

phrase.value = 'Ceci EST   un TesT  de phrase.';
filtrerLaSaisie('valeur', /[0-9.]/);
filtrerLaSaisie('octet', /[0-9]/);
