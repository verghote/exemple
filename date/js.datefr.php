<?php
// alimentation de l'interface
$titre = "Test de la classe JavaScript DateFr";

// chargement des ressources spécifiques de l'interface
$head = <<<HTML
    <script src="/classetechnique/datefr.js"></script>
HTML;

// chargement de l'interface
require $_SERVER['DOCUMENT_ROOT'] . "/include/interface.php";