<!DOCTYPE HTML>
<html lang="fr">
<head>
    <title>Exemple</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="data:,">
    <link rel="stylesheet" href="/composant/bootstrap/bootstrap.min.css">
    <script src="/composant/bootstrap/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="/css/style.css">
    <?php
    // récupération du nom du script php appelé afin de charger le fichier js de même nom
    $file = pathinfo($_SERVER['PHP_SELF'], PATHINFO_FILENAME);
    if (file_exists("$file.js")) {
        echo "<script type='module' src='$file.js' ></script>";
    }
    // chargement des données et composants spécifiques de la page si nécessaire
    if (isset($head)) {
        echo $head;
    }
    ?>

</head>
<body>
<header>
    <?php require __DIR__ . '/header.php' ?>
</header>
<main>
    <?php
    // chargement de l'interface de la page
    if (file_exists("$file.html")) {
        require "$file.html";
    }
    ?>
</main>
<footer>
    <?php require __DIR__ . '/footer.php' ?>
</footer>
</body>
</html>
