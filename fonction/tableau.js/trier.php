<?php

// alimentation de l'interface
$titre = "Trier les données affichées";

$data = file_get_contents(RACINE . "/data/promotion.json");
$head = <<<HTML
<script>
    let data = $data;
</script>
HTML;

// chargement de l'interface
require $_SERVER['DOCUMENT_ROOT'] . "/include/interface.php";