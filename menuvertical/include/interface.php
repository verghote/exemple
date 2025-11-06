<?php
// chargement des options
$lesOptionsVerticales = file_get_contents(RACINE . '/menuvertical/.config/menuvertical.json');
?>
<!DOCTYPE HTML>
<html lang="fr">
<head>
    <title>Exemple</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="data:,">
    <!-- Script Bootstrap  -->
    <link rel="stylesheet" href="/composant/bootstrap/bootstrap.min.css">
    <script src="/composant/bootstrap/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="/css/style.css">
    <script type='module'>
        // Initialisation du menu vertical
        import {initialiserMenuVertical} from "/composant/menuvertical/menu.js";

        initialiserMenuVertical(<?=$lesOptionsVerticales;?>, 230);
    </script>
    <?php
    // récupération du nom du fichier php appelant cela va permettre de charger l'interface correspondante : fichier html portant le même nom ou le fichier de même nom dans le dossier interface
    if (!isset($file)) {
        $file = pathinfo($_SERVER['PHP_SELF'], PATHINFO_FILENAME);
    }
    if (is_file("$file.js")) {
        echo "<script type='module' src='$file.js' ></script>";
    }
    if (isset($head)) {
        echo $head;
    }
    ?>
</head>
<body>
<main>
    <?php
    if (is_file("$file.html")) {
        require "$file.html";
    }
    ?>
</main>
</body>
</html>