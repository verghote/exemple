<?php
// alimentation de l'interface
$titre = "Autocomplétion";

// Récupération de la liste des coureurs : licence, nom et prenom
$file = RACINE . '/data/licencies.json';
if (!is_file($file)) {
    Erreur::afficherReponse("Le fichier licencies.json n'existe pas. ", "global");
}
$data = file_get_contents($file);
$head = <<<HTML
    <script src="/composant/autocomplete/autocomplete.min.js"></script>
    <link rel="stylesheet" href="/composant/autocomplete/autocomplete.css">
    <script>
        let data = $data;
    </script>
HTML;

// chargement de l'interface
require $_SERVER['DOCUMENT_ROOT'] . "/include/interface.php";