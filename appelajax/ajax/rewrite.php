<?php
$file = RACINE . '/data/etudiant.json';

// Enregistrer les données dans le fichier JSON
file_put_contents($file, $_POST['lesEtudiants']);

