<?php
// définition du jeu de caractères
header('Content-type: text/html; charset=utf-8');

// Détection du type de réponse attendu (HTML ou JSON)
if (stripos($_SERVER['SCRIPT_FILENAME'], '/ajax/') !== false) {
    header('Content-Type: application/json; charset=utf-8');

    // interdire l'accès direct aux scripts AJAX en l'absence du jeton
    if (!isset($_SERVER['HTTP_X_REQUESTED_WITH']) ||strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'xmlhttprequest') {
        header('Location:/erreur/403.php');
    }
} else {
    header('Content-Type: text/html; charset=utf-8');
}

// gestion d'erreurs prenant en compte les erreurs de type E_WARNING, E_NOTICE et E_STRICT
set_error_handler(function ($errno, $errstr, $errfile, $errline) {
    throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
});


// initialisation du fuseau horaire
date_default_timezone_set('Europe/Paris');

// accès aux variables de session
session_start();

// Définition d'une constante indiquant la racine du site
define('RACINE', $_SERVER['DOCUMENT_ROOT']);

spl_autoload_register(function ($name) {
    $name = strtolower($name);

    // Recherche dans le répertoire classetechnique
    $fichier = RACINE . "/classetechnique/$name.php";
    if (file_exists($fichier)) {
        require $fichier;
        return;
    }

    // Recherche dans le répertoire classemetier
    $fichier = RACINE . "/classemetier/$name.php";
    if (file_exists($fichier)) {
        require $fichier;
        return;
    }

    // Si la classe n'est trouvée nulle part
    Erreur::envoyerReponse("Impossible de charger la classe $name", 'global');
});

// Détection du type de réponse attendu (HTML ou JSON)
if (stripos($_SERVER['SCRIPT_FILENAME'], '/ajax/') !== false) {
    header('Content-Type: application/json; charset=utf-8');

    // interdire l'accès direct aux scripts AJAX en l'absence du jeton
    if (!isset($_SERVER['HTTP_X_REQUESTED_WITH']) ||strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'xmlhttprequest') {
        header('Location:/erreur/403.php');
    }
} else {
    header('Content-Type: text/html; charset=utf-8');
}

// gestion d'erreurs prenant en compte les erreurs de type E_WARNING, E_NOTICE et E_STRICT
set_error_handler(function ($errno, $errstr, $errfile, $errline) {
    throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
});