<?php
// alimentation de l'interface
$titre = "La fonction verifier";


// Récupération de la liste des emails : nom et email
$file = RACINE . '/data/email.json';
if (!is_file($file)) {
    Erreur::afficherReponse("Le fichier email.json n'existe pas. ", "global");
}
$lesEmails= file_get_contents($file);
$head = <<<HTML
    <script>
        const lesEmails= $lesEmails;
    </script>
HTML;

// chargement de l'interface
require $_SERVER['DOCUMENT_ROOT'] . "/include/interface.php";
