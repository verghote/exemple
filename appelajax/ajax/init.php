<?php
header('Content-Type: application/json; charset=utf-8');
$Source = RACINE . '/data/sauvegarde_etudiant.json';
$destination = RACINE . '/data/etudiant.json';

// Vérifier si le fichier source existe
if (!is_file($Source)) {
    Erreur::envoyerReponse("Le fichier source $Source n'existe pas.", "global");
}

// copier le fichier source vers la destination
if (!copy($Source, $destination)) {
    Erreur::envoyerReponse("Échec de la copie du fichier $Source vers $destination.", "global");
}

echo file_get_contents($destination);
