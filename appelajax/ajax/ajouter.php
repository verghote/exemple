<?php
header('Content-Type: application/json');

// 📍 Chemin vers le fichier JSON
$file = RACINE . '/data/etudiant.json';

// Vérifier que la donnée a bien été envoyée (via FormData)
if (!isset($_POST['nom'], $_POST['prenom'])) {
    http_response_code(400); // Bad Request
    Erreur::envoyerReponse('Requête invalide, des paramètres manquent.', 'global');
}

// Récupération des données
$nom = trim($_POST['nom']);
$prenom = trim($_POST['prenom']);


// Chargement des étudiants existants
$lesEtudiants = [];
if (file_exists($file)) {
    $contenu = file_get_contents($file);
    $lesEtudiants = json_decode($contenu, true) ?? [];
}

// Ajout du nouvel étudiant
$lesEtudiants[] = [
    'nom' => strtoupper($nom),
    'prenom' => ucfirst(ucwords($prenom))
];

// 🔠 Tri par nom puis prénom
usort($lesEtudiants, function ($a, $b) {
    $nomCompare = strcmp($a['nom'], $b['nom']);
    return $nomCompare !== 0 ? $nomCompare : strcmp($a['prenom'], $b['prenom']);
});

// Sauvegarde dans le fichier JSON (format lisible + UTF-8 non échappé)
$ok = file_put_contents(
    $file,
    json_encode($lesEtudiants, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)
);

if ($ok === false) {
    http_response_code(500);
    Erreur::envoyerReponse('Erreur lors de l\'écriture du fichier', 'global');
}

// ✅ Réponse finale
echo file_get_contents($file);

