<?php
// alimentation de l'interface
$titre = "Les champs de saisie";

// un étudiant doit avoir entre 17 et 25 ans
$dateMax = json_encode(date('Y-m-d', strtotime('-17 year')));
$dateMin = json_encode(date('Y-m-d', strtotime('-25 year')));
$head = <<<HTML
<script>
    const dateMin = $dateMin;
    const dateMax = $dateMax;
</script>
HTML;

// chargement de l'interface
require $_SERVER['DOCUMENT_ROOT'] . "/include/interface.php";