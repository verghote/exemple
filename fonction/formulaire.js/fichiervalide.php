<?php
// alimentation de l'interface
$titre = "La fonction fichiervalide";
// récupération des paramètres du téléversement
$lesParametres = json_encode(FichierPDF::getConfig(), JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);


$head = <<<HTML
<script>
     const lesParametres = $lesParametres;
</script>
HTML;

 // chargement de l'interface
require RACINE . "/include/interface.php";
