import {
    write,
    read,
    decoderDate,
    configurerFormulaire,
    donneesValides,
    filtrerLaSaisie,
    afficherToast
} from '/composant/tableau.js';

const intervalle = document.getElementById('intervalle');
const telephone = document.getElementById('telephone');
const dateNaissance = document.getElementById('dateNaissance');

// Données de test
write('nom', 'Dupont');
write('prenom', 'Hervé');
write('dateNaissance', '2004-01-01');
write('email', 'dupont.herve@saint-remi.net');
write('telephone', '06 12 34 56 78');
write('externe', 1);
write('redoublant', 1);
write('urlGitHub', 'https://github.com/duponth/');
write('presentation', 'Je suis passionné par l’informatique. \nTrès curieux de nature et logique, je suis attiré de longue date l’informatique.\nJe suis dynamique, sérieux et méthodique dans tous les domaines qui me passionnent et ma curiosité m’amène sans cesse à repousser mes limites pour progresser.');
write('SLAM', 1);
write('ludique', 1);
write('sportive', 1);

// Défintions des événements
telephone.addEventListener('blur', function () {
    const valeurMiseEnForme = this.value.replace(/(\d{2})(?=\d{2})/g, '$1 '); // Ajoute un espace tous les 2 chiffres
    this.value = valeurMiseEnForme.trim(); // Met à jour la valeur du champ avec le numéro formaté
});

telephone.addEventListener('focus', function () {
    this.value = this.value.replace(/\D/g, ''); // Supprime tous les caractères non numériques
});

// définbtion du contenu dynamique de la popover associé à la date de naissance
intervalle.setAttribute('data-bs-title', 'Il faut être né entre le ' + decoderDate(min) + ' et le ' + decoderDate(max));
// d'activation de la popover dynamique
new bootstrap.Popover(intervalle);


// contrôle des données
configurerFormulaire(true);
dateNaissance.min = min;
dateNaissance.max = max;
filtrerLaSaisie('telephone', /[0-9]/);

document.getElementById('btnEnvoyer').onclick = () => {
    // remise en forme du numéro de téléphone
    telephone.value = telephone.value.replace(/\D/g, '');
    if (donneesValides()) {
        envoyer();
        afficherToast('Merci d\'avoir transmis vos données');
    }
    telephone.value = telephone.value.replace(/(\d{2})(?=\d{2})/g, '$1 ');
};


function envoyer() {

    // récupération de l'option choisie
    const option = document.querySelector('input[name="option"]:checked');

    // récupération des activités
    const lesActivites = [];
    document.querySelectorAll('input[name="activites"]').forEach(activite => {
        if (activite.checked) {
            lesActivites.push(activite.value);
        }
    });


    const donnees = {
        nom: document.getElementById('nom').value,
        prenom: document.getElementById('prenom').value,
        dateNaissance: document.getElementById('dateNaissance').value,
        email: document.getElementById('email').value,
        telephone: document.getElementById('telephone').value,
        externe: document.getElementById('externe').checked ? 1 : 0,
        redoublant: document.getElementById('redoublant').checked ? 1 : 0,
        urlGitHub: document.getElementById('urlGitHub').value,
        presentation: document.getElementById('presentation').value,
        option: option ? option.value : '',
        lesActivites: JSON.stringify(lesActivites)
    };

    // Les données doivent être envoyées côté serveur par un appel Ajax
    console.log(donnees);

    // en utilisant la tableau.js read

    const donnees2 = {
        nom: read('nom'),
        prenom: read('prenom'),
        dateNaissance: read('dateNaissance'),
        email: read('email'),
        telephone: read('telephone'),
        externe: read('externe'),
        redoublant: read('redoublant'),
        urlGitHub: read('urlGitHub'),
        presentation: read('presentation'),
        option: option ? option.value : '',
        lesActivites: JSON.stringify(lesActivites)
    };
    console.log(donnees2);
}