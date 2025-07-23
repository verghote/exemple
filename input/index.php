<?php
// alimentation de l'interface
$titre = "Les champs de saisie";
$retour = '../index.php';
// un étudiant doit avoir entre 17 et 25 ans
$max = date('Y-m-d', strtotime('-17 year'));
$min = date('Y-m-d', strtotime('-25 year'));
$head = <<<HTML
<script>
       let min = '$min';
       let max = '$max';
</script>
HTML;

// chargement de l'interface
require $_SERVER['DOCUMENT_ROOT'] . "/include/interface.php";