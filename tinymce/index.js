"use strict";

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {afficherToast} from "/composant/fonction/afficher.js";

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

/* global tinymce */

let contenu = document.getElementById('contenu');
let btnModifier = document.getElementById('btnModifier');

let data  = "<p>Exemple de contenu chargé depuis une variable JavaScript.</p><p>Vous pouvez modifier ce texte et cliquer sur le bouton pour simuler une opération.</p>";

// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

btnModifier.onclick = () => {
    console.log("Valeur envoyée au serveur" + tinymce.get('contenu').getContent());
    afficherToast("Opération simulée avec succès");
}

// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

// Initialisation de TinyMCE
tinymce.init({
    license_key: 'gpl',
    selector: '#contenu',
    height: 300,
    menubar: false,
    plugins: 'link lists table  code',
    toolbar: [
        'undo redo | styles | bold italic underline | forecolor backcolor | fontsizeselect | link | bullist numlist outdent indent| table | code'
    ],
    fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
    setup: function (editor) {
        editor.on('init', function () {
            editor.setContent(data);
        });
        editor.on('change', function () {
            contenu.value = editor.getContent();
        });
    },

});

