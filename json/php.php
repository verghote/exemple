<?php
// alimentation de l'interface
$titre = "Lecture d'un fichier json par la fonction php file_get_contents";

$data = file_get_contents(RACINE . "/data/etudiant.json");
$head = <<<HTML
<script>
    const lesEtudiants = $data;
</script>
HTML;

// chargement de l'interface
require $_SERVER['DOCUMENT_ROOT'] . "/include/interface.php";