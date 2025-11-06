"use strict";

/*
    dans ce fichier, on configure le composant autoComplete pour la recherche de licenciés
    et on affiche les informations du licencié sélectionné
    on utilise le tableau data qui contient toutes les informations des licenciés
    Cependant il ne contient pas de propriété nomPrenom utiliser par le composant autoComplete.
    On ajoute donc une propriété nomPrenom à chaque objet du tableau data en utilisant la méthode map.
    On utilise également la fonction getAge pour calculer l'âge du licencié à partir de sa date de naissance.
 */

// -----------------------------------------------------------------------------------
// Import des fonctions nécessaires
// -----------------------------------------------------------------------------------

import {getAge} from '/composant/fonction/date.js';
import {filtrerLaSaisie} from '/composant/fonction/formulaire.js';

// -----------------------------------------------------------------------------------
// Déclaration des variables globales
// -----------------------------------------------------------------------------------

/* global data, autoComplete */

// récupération des éléments de l'interface
const licence = document.getElementById('licence');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const sexe = document.getElementById('sexe');
const dateNaissance = document.getElementById('dateNaissance');
const nomClub = document.getElementById('nomClub');
const idCategorie = document.getElementById('idCategorie');
const age = document.getElementById('age');

// -----------------------------------------------------------------------------------
// Procédures évènementielles
// -----------------------------------------------------------------------------------

// Efface tous  quand celui-ci est sélectionné
nom.onfocus = effacer;


// -----------------------------------------------------------------------------------
// Fonctions de traitement
// -----------------------------------------------------------------------------------

function afficher(licencie) {
    licence.innerText = licencie.licence;
    nom.innerText = licencie.nom;
    prenom.innerText = licencie.prenom;
    sexe.innerText = licencie.sexe;
    dateNaissance.innerText = licencie.dateNaissanceFr;
    nomClub.innerText = licencie.nomClub;
    idCategorie.innerText = licencie.idCategorie;
    if(licencie.dateNaissanceFr !== '') {
        age.innerText = getAge(licencie.dateNaissanceFr) + ' ans';
    } else {
        age.innerText = '';
    }
    nom.blur();
}

/**
 * Efface les valeurs affichées dans les balises div de class fiche-value.
 */
function effacer() {
    document.querySelectorAll('.fiche-value').forEach(el => {
        const input = el.querySelector('input');
        if (input) {
            input.value = ''; // efface juste le contenu du champ input
        } else {
            el.innerText = ''; // efface le contenu textuel des autres champs
        }
    });
}

// -----------------------------------------------------------------------------------
// Programme principal
// -----------------------------------------------------------------------------------

// paramétrage du composant autoComplete

const autoCompleteJS = new autoComplete({
    data: {
        src: data.map(x => ({
            ...x,  // Conserve toutes les autres propriétés de 'item'
            nomPrenom: x.nom + " " + x.prenom // Ajoute une nouvelle propriété 'nomPrenom'
        })),
        keys: ["nomPrenom"]
    },
    selector: "#nom",
    resultItem: {
        highlight: true,
    },
    theme : 'round',
    resultsList: {
        element: (list, data) => {
            const info = document.createElement("p");
			 info.style.padding = "2px 2px";
            info.style.fontStyle = "italic";
            info.style.fontSize = "0.8em";
            const nb = data.matches.length;
            if (nb > 1) {
                info.innerHTML = nb + " licenciés trouvés";
            } else if (nb === 1) {
                info.innerHTML = "Un licencié correspondant";
            } else {
                info.innerHTML = "Aucun licencié correspondant";
            }
            list.append(info);
        },
        noResults: true,
        maxResults: 10,
    },
    events: {
        input: {
            // lorsque l'utilisateur clique sur un élément de la liste affichée
            selection: (event) => {
                const selection = event.detail.selection.value;
                nom.value = selection.nomPrenom;
                afficher(selection)
            },
        }
    },
});

// filtrage de la saisie
filtrerLaSaisie('nom', /[a-zA-Z ]/);



