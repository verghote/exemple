"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {appelAjax} from "/composant/fonction/ajax.js";

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

const contenu = document.getElementById('contenu');

// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

appelAjax({
    url : 'ajax/date.php',
    dataType: 'text',
    success: (data) => {
        document.getElementById('contenu').innerHTML = data;
    }
});


