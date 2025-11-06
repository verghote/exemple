<?php
// alimentation de l'interface
$titre = "Menu horizontal - Menu 2";

// chargement des options du menu horizontal
$lesOptionsHorizontales =  file_get_contents('../.config/menuhorizontal.json');

// transmission des données à l'interface
$head = <<<HTML
    <script>
        const lesOptionsHorizontales = $lesOptionsHorizontales;
    </script>
HTML;

// chargement de l'interface
require $_SERVER['DOCUMENT_ROOT'] . "/include/interface.php";

