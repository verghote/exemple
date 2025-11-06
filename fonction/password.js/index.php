<?php
// Si l'utilisateur est déja connecté, on le redirige vers son profil
if (isset($_SESSION['membre'])) {
    Erreur::afficherReponse("Vous êtes déjà connecté.", "global");
}

// chargement des données
$titre = "Connexion";

// chargement de l'interface
require RACINE . "/include/interface.php";

