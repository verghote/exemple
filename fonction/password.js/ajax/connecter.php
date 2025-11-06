<?php
// Vérification de la transmission des données attendues
if (!Std::existe('login', 'password')) {
    Erreur::envoyerReponse("Tous les paramètres attendus n'ont pas été transmis", 'global');
}

// récupération des données
$login = $_POST["login"];
$password = $_POST["password"];

// Vérification des données : contrôle fictif)
if ($login === 'login' && $password === 'password') {
    // Connexion de l'utilisateur
    $_SESSION['membre'] = $login;
} else {
    Erreur::envoyerReponse("Nom d’utilisateur et/ou mot de passe incorrect.", 'global');
}

$reponse = ['success' => "Vous êtes connecté"];
echo json_encode($reponse, JSON_UNESCAPED_UNICODE);

