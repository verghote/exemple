<?php
// alimentation de l'interface
$titre = "Exporter les données";

// alimentation de l'interface
$titre = "Trier les données affichées";

$data = file_get_contents(RACINE . "/data/etudiant.json");
$head = <<<HTML
<script>
    let data = $data;
</script>
HTML;

// chargement de l'interface
require $_SERVER['DOCUMENT_ROOT'] . "/include/interface.php";