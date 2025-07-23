"use strict";

// Appel immédiat au chargement de la page
fetch('ajax/datetime.php') // Requête GET vers le script PHP
    .then(response => response.text()) // Le serveur renvoie une réponse de type "texte", ici du HTML
    .then(html => {
        // Injection du HTML dans la div avec id "contenu"
        document.getElementById('contenu').innerHTML = html;
    });


