// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------
import { melanger } from '/composant/fonction/tableau.js';

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

const lesCartes = [
    '7pique', '8pique', '9pique', '10pique', 'valetpique', 'damepique', 'roipique', 'aspique',
    '7treffle', '8treffle', '9treffle', '10treffle', 'valettreffle', 'dametreffle', 'roitreffle', 'astreffle',
    '7coeur', '8coeur', '9coeur', '10coeur', 'valetcoeur', 'damecoeur', 'roicoeur', 'ascoeur',
    '7carreau', '8carreau', '9carreau', '10carreau', 'valetcarreau', 'damecarreau', 'roicarreau', 'ascarreau'
];

// -----------------------------------------------------------------------------------
// Fonctions de traitement
// -----------------------------------------------------------------------------------
function afficherLesCartes(zone) {
    // Récupérer la zone d'afficher.js
    const idZone = document.getElementById(zone);

    // Effacer la zone
    idZone.innerHTML = '';

    // Ajouter une div container pour gérer la disposition
    const container = document.createElement('div');
    container.classList.add('container');
    container.classList.add('d-flex');
    container.classList.add('flex-wrap');  // Permet de passer à la ligne automatiquement
    idZone.appendChild(container);

    // Parcourir le tableau des cartes
    const nb = lesCartes.length;
    for (let i = 0; i < nb; i++) {
        const carte = lesCartes[i];

        // Créer une image pour chaque carte
        const img = document.createElement('img');
        img.src = 'carte/' + carte + '.png';
        img.classList.add('m-1');  // Espacement entre les images
        img.classList.add('img-fluid');  // Permet de rendre l'image responsive
        img.alt = '';

        // Ajouter l'image à la zone
        container.appendChild(img);
    }
}

// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

afficherLesCartes('cartes');
melanger(lesCartes);
afficherLesCartes('cartesMelangees');