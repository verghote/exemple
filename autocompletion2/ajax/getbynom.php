<?php

$lesEtudiants = [];

// vérification de la transmission des données attendues
if (!Std::existe('search')) {
    echo json_encode([]);
    exit;
}

$search = $_GET['search'];

// Vérification du format de l'identifiant
if (!preg_match('/^[a-zA-Z]+$/', $search)) {
    echo json_encode([]);
    exit;
}

// récupération des données
$data = file_get_contents(RACINE . "/data/licencies.json");

// conversion des données JSON en tableau PHP
$lesEtudiants = json_decode($data, true);

// extraire les licenciés dont le nom ou le prénom contient la chaîne de caractères recherchée
$lesEtudiants = array_filter($lesEtudiants, function ($etudiant) use ($search) {
    return stripos($etudiant['nom'], $search) !== false;
});

//  il faut forcer la réindexation avec array_values()
echo json_encode(array_values($lesEtudiants), JSON_UNESCAPED_UNICODE);

