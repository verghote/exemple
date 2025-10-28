<?php
$titre = "Fonction verifierDimensionImage";
// récupération des paramètres du téléversement
$lesParametres = json_encode(FichierImage::getConfig(), JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

$head = <<<HTML
<script>
     let lesParametres = $lesParametres;
</script>
HTML;

// chargement de l'interface
require RACINE . "/include/interface.php";
