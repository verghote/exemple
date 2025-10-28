const table = document.createElement('table');
table.classList.add('table', 'table-bordered');
zone.appendChild(table);

const dateCourante = new Date();

// Date courante au format jj/mm/aaaa
let tr = table.insertRow();
tr.insertCell().innerText = 'Date courante au format jj/mm/aaaa';
tr.insertCell().innerHTML = 'dateCourante.toLocaleDateString();';
tr.insertCell().innerText = dateCourante.toLocaleDateString();

tr = table.insertRow();
tr.insertCell().innerText = 'Date courante au format aaaa-mm-jj';
tr.insertCell().innerHTML = 'dateCourante.toISOString().slice(0, 10)';
tr.insertCell().innerText = dateCourante.toISOString().slice(0, 10);

// date au format long
tr = table.insertRow();
tr.insertCell().innerText = 'Date courante au format long ';
tr.insertCell().innerHTML = 'dateCourante.toLocaleDateString(\'fr-FR\', { weekday: \'long\', year: \'numeric\', month: \'long\', day: \'numeric\' });';
tr.insertCell().innerText = dateCourante.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// date au format interne
tr = table.insertRow();
tr.insertCell().innerText = 'Date courante au format interne';
tr.insertCell().innerHTML = 'dateCourante.getTime();';
tr.insertCell().innerText = dateCourante.getTime().toString();

// Création à partir des trois paramètres jour mois année
const jour = 1;
const mois = 1;
const annee = 2024;
let date = new Date(annee, mois - 1, jour);
tr = table.insertRow();
tr.insertCell().innerText = 'Création à partir des trois paramètres jour mois année';
tr.insertCell().innerHTML = `let date = new Date(${annee}, ${mois} - 1, ${jour}); `;
tr.insertCell().innerText = date.toLocaleDateString();

// Création à partir des trois paramètres jour mois année erronés
date = new Date(2024, 1, 0);
tr = table.insertRow();
tr.insertCell().innerText = 'Création à partir des trois paramètres jour mois année';
tr.insertCell().innerHTML = 'let date = new Date(2024, 1, 0);';
tr.insertCell().innerText = date.toLocaleDateString();


// Création à partir des trois paramètres jour mois année erronés
date = new Date(2023, 11, 45);
tr = table.insertRow();
tr.insertCell().innerText = 'Création à partir des trois paramètres jour mois année';
tr.insertCell().innerHTML = 'let date = new Date(2023, 11, 45);';
tr.insertCell().innerText = date.toLocaleDateString();


//  Création à partir de la chaine string = "2024-02-28"
date = new Date('2024-02-28');
tr = table.insertRow();
tr.insertCell().innerText = 'Création à partir de la chaine \'2024-02-28\'';
tr.insertCell().innerHTML = ' date = new Date(\'2024-02-28\');';
tr.insertCell().innerText = date.toLocaleDateString();

// Création à partir de la chaîne string = '28/02/2024'
// il faut convertir la chaine dans le format aaaa-mm-jj, seul format accepté dans cette bibliothèque
const string = '28/02/2024';
date = new Date(string.split('/').reverse().join('-'));
tr = table.insertRow();
tr.insertCell().innerText = 'Création à partir de la chaîne \'28/02/2024\' ';
tr.insertCell().innerHTML = 'date = new Date(string.split(\'/\').reverse().join(\'-\'));';
tr.insertCell().innerText = date.toLocaleDateString();

// Récupérer le jour
tr = table.insertRow();
tr.insertCell().innerText = 'Récupérer le jour ';
tr.insertCell().innerHTML = 'dateCourante.getDate();';
tr.insertCell().innerText = dateCourante.getDate().toString();

// le jour en lettre
tr = table.insertRow();
tr.insertCell().innerText = 'Jour en lettre ';
tr.insertCell().innerHTML = 'dateCourante.toLocaleString(\'fr-FR\', {day: \'long\'}';
tr.insertCell().innerText = dateCourante.toLocaleString('fr-FR', {weekday: 'long'});

// Récupérer le mois Attention au décalage
tr = table.insertRow();
tr.insertCell().innerText = 'Mois en chiffre ';
tr.insertCell().innerHTML = 'dateCourante.getMonth() + 1';
tr.insertCell().innerText = (dateCourante.getMonth() + 1).toString();

//  Mois en chiffre avec la méthode toLocaleString
tr = table.insertRow();
tr.insertCell().innerText = 'Mois en lettre ';
tr.insertCell().innerHTML = 'dateCourante.toLocaleString(\'fr-FR\', {month: \'numeric\'});';
tr.insertCell().innerText = dateCourante.toLocaleString('fr-FR', {month: 'numeric'});

//  Mois en lettre
tr = table.insertRow();
tr.insertCell().innerText = 'Mois en lettre ';
tr.insertCell().innerHTML = 'dateCourante.toLocaleString(\'fr-FR\', {month: \'long\'});';
tr.insertCell().innerText = dateCourante.toLocaleString('fr-FR', {month: 'long'});


// Récupérer l'annee
tr = table.insertRow();
tr.insertCell().innerText = 'Récupérer l\'année ';
tr.insertCell().innerHTML = 'dateCourante.getFullYear();';
tr.insertCell().innerText = dateCourante.getFullYear().toString();

// Récupérer le jour de la semaine
tr = table.insertRow();
tr.insertCell().innerText = 'Récupérer le jour de la semaine (0 = dimanche)';
tr.insertCell().innerHTML = 'dateCourante.getDay();';
tr.insertCell().innerText = dateCourante.getDay().toString();

// le quantième :
tr = table.insertRow();
tr.insertCell().innerText = 'Quantieme (n° jour dans l\'année) ';
tr.insertCell().innerHTML = 'Non fournie';
tr.insertCell().innerText = '';


// le numéro de la semaine :
tr = table.insertRow();
tr.insertCell().innerText = 'Numéro de la semaine ';
tr.insertCell().innerHTML = 'Non fournie';
tr.insertCell().innerText = '';

// Premier jour de l'année dans le format long :
const dateDebut = new Date(dateCourante.getFullYear(), 0, 1);
tr = table.insertRow();
tr.insertCell().innerText = 'Premier jour de l\'année au format long ';
tr.insertCell().innerHTML = 'let dateDebut= new Date(dateCourante.getFullYear(), 0, 1);';
tr.insertCell().innerText = dateDebut.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});


// Dernier jour de l'année au format long
const dateFin = new Date(dateCourante.getFullYear(), 11, 31);
tr = table.insertRow();
tr.insertCell().innerText = 'Dernier jour de l\'année au format long ';
tr.insertCell().innerHTML = 'let dateFin = new Date(dateDuJour.getFullYear(), 11, 31);';
tr.insertCell().innerText = dateFin.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// Dernier jour du mois
date = new Date();
date.setMonth(date.getMonth() + 1);
date.setDate(0);
tr = table.insertRow();
tr.insertCell().innerText = 'Dernier jour du mois ';
tr.insertCell().innerHTML = 'date = new Date();<br>date.setMonth(date.getMonth() + 1);<br>date.setDate(0);';
tr.insertCell().innerText = date.toLocaleDateString();


//  Nombre de jours jusqu'au 31/12
tr = table.insertRow();
tr.insertCell().innerText = ' Nombre de jours jusqu\'au 31/12 (méthode ajoutée) ';
tr.insertCell().innerHTML = 'dateFin.ecartEnJours(dateCourante);';
tr.insertCell().innerText = dateFin.ecartEnJours(dateCourante).toString();

//  Nombre de jours jusqu'au 31/12
const nbMilliseconde = dateFin - dateCourante;
const nbJour = Math.ceil(nbMilliseconde / (1000 * 60 * 60 * 24));
tr = table.insertRow();
tr.insertCell().innerText = ' Nombre de jours jusqu\'au 31/12 ';
tr.insertCell().innerHTML = 'let nbMilliseconde = dateFin - dateCourante;<br>let nbJour = Math.ceil(nbMilliseconde / (1000 * 60 * 60 * 24));';
tr.insertCell().innerText = nbJour.toString();

//  Nombre de jours depuis le premier janvier
tr = table.insertRow();
tr.insertCell().innerText = 'Nombre de jours depuis le premier janvier (méthode ajoutée)';
tr.insertCell().innerHTML = 'dateCourante.ecartEnJours(dateDebut) + 1';
tr.insertCell().innerText = (dateCourante.ecartEnJours(dateDebut) + 1).toString();

//  Nombre de jours dans l'année
tr = table.insertRow();
tr.insertCell().innerText = 'Nombre de jours dans l\'année (méthode ajoutée)';
tr.insertCell().innerHTML = 'dateFin.ecartEnJours(dateDebut) + 1';
tr.insertCell().innerText = (dateFin.ecartEnJours(dateDebut) + 1).toString();

//  Hier
tr = table.insertRow();
tr.insertCell().innerText = 'Hier (méthode ajoutée)';
tr.insertCell().innerHTML = 'dateCourante.retirerJour(1).toLocaleDateString();';
tr.insertCell().innerText = dateCourante.retirerJour(1).toLocaleDateString();

//  Hier
tr = table.insertRow();
tr.insertCell().innerText = 'Demain (méthode ajoutée)';
tr.insertCell().innerHTML = 'dateCourante.ajouterJour(1).toLocaleDateString();';
tr.insertCell().innerText = dateCourante.ajouterJour(1).toLocaleDateString();

//   15 jours avant
tr = table.insertRow();
tr.insertCell().innerText = '15 jours avant (méthode ajoutée)';
tr.insertCell().innerHTML = 'dateCourante.retirerJour(15).toLocaleDateString();';
tr.insertCell().innerText = dateCourante.retirerJour(15).toLocaleDateString();


//    Dans 15 jours
tr = table.insertRow();
tr.insertCell().innerText = 'Dans 15 jours (méthode ajoutée)';
tr.insertCell().innerHTML = 'dateCourante.ajouterJour(15).toLocaleDateString()';
tr.insertCell().innerText = dateCourante.ajouterJour(15).toLocaleDateString();

//   Un mois avant
tr = table.insertRow();
tr.insertCell().innerText = 'Un mois avant (méthode ajoutée)';
tr.insertCell().innerHTML = 'dateCourante.retirerMois(1).toLocaleDateString();';
tr.insertCell().innerText = dateCourante.retirerMois(1).toLocaleDateString();

//    Dans un mois
tr = table.insertRow();
tr.insertCell().innerText = 'Dans un mois (méthode ajoutée)';
tr.insertCell().innerHTML = 'dateCourante.ajouterMois(1).toLocaleDateString()';
tr.insertCell().innerText = dateCourante.ajouterMois(1).toLocaleDateString();

//   Un mois avant le 31/03/2024
const date31 = new Date('2024-03-31');
tr = table.insertRow();
tr.insertCell().innerText = 'Un mois avant le 31/03/2024 (méthode ajoutée)';
tr.insertCell().innerHTML = 'date31.retirerMois(1).toLocaleDateString();';
tr.insertCell().innerText = date31.retirerMois(1).toLocaleDateString();

//    Un mois après le 31/03/2024
tr = table.insertRow();
tr.insertCell().innerText = 'Un mois après le 31/03/2024 (méthode ajoutée)';
tr.insertCell().innerHTML = 'date31.ajouterMois(1).toLocaleDateString()';
tr.insertCell().innerText = date31.ajouterMois(1).toLocaleDateString();

//   Un an avant
tr = table.insertRow();
tr.insertCell().innerText = 'Un an avant (méthode ajoutée)';
tr.insertCell().innerHTML = 'dateCourante.retirerAnnee(1).toLocaleDateString();';
tr.insertCell().innerText = dateCourante.retirerAnnee(1).toLocaleDateString();

//    Dans un an
tr = table.insertRow();
tr.insertCell().innerText = 'Dans un an (méthode ajoutée)';
tr.insertCell().innerHTML = 'dateCourante.ajouterAnnee(1).toLocaleDateString()';
tr.insertCell().innerText = dateCourante.ajouterAnnee(1).toLocaleDateString();

//   Un an avant le 29/02/2024
const date29 = new Date('2024-02-29');
tr = table.insertRow();
tr.insertCell().innerText = 'Un an avant le 29/02/2024 (méthode ajoutée)';
tr.insertCell().innerHTML = 'date29.retirerAnnee(1).toLocaleDateString();';
tr.insertCell().innerText = date29.retirerAnnee(1).toLocaleDateString();

//    Un an après le 29/02/2024
tr = table.insertRow();
tr.insertCell().innerText = 'Un an après le 29/02/2024 (méthode ajoutée)';
tr.insertCell().innerHTML = 'date29.ajouterAnnee(1).toLocaleDateString()';
tr.insertCell().innerText = date29.ajouterAnnee(1).toLocaleDateString();

//    Le vendredi en 8
let vendrediEn8 = dateCourante.ajouterJour(7);
do {
    vendrediEn8 = vendrediEn8.ajouterJour(1);
}
while (vendrediEn8.getDay() !== 5);

tr = table.insertRow();
tr.insertCell().innerText = 'Vendredi en huit (méthode ajoutée)';
tr.insertCell().innerHTML = ' let vendrediEn8 = dateCourante.ajouterJour(7);<br>' +
    '    do {<br>' +
    '        vendrediEn8 = vendrediEn8.ajouterJour(1);<br>' +
    '    } while (vendrediEn8.day() !== 5);';
tr.insertCell().innerText = vendrediEn8.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});


// Ajouter 1 mois puis 2 jusqu'à 12 en partant toujours du 31/01/2024
tr = table.insertRow();
tr.insertCell().innerText = 'Ajouter 1 mois puis 2 jusqu\'à 12 en partant toujours du 31/01/2024';
tr.insertCell().innerHTML = `
           <pre>
let rep = '';
    for (let i = 1; i <= 12; i++) {
        date = new Date("2024-01-31");
        rep = rep + date.ajouterMois(i).toLocaleDateString();
    }
                    On constate que l'algorithme ne plafonne pas le jour
                     s'il dépasse le dernier jour du mois obtenu
                    Il les ajoute au résultat  
                    <b>Ce n'est pas forcément une bonne décision</b>
</pre>
    `;

let rep = '';
for (let i = 1; i <= 12; i++) {
    date = new Date('2024-01-31');
    rep = rep + date.ajouterMois(i).toLocaleDateString() + '<br>';
}

tr.insertCell().innerHTML = rep;

// Retirer 1 mois puis 2 jusqu'à 12 en partant toujours du 31/01/2024
tr = table.insertRow();
tr.insertCell().innerText = 'Retirer 1 mois puis 2 jusqu\'à 12 en partant toujours du 31/01/2024';
tr.insertCell().innerHTML = `
           <pre>
let rep = '';
    for (let i = 1; i <= 12; i++) {
        date = new Date("2024-01-31");
        rep = rep + date.retirerMois(i).toLocaleDateString();
    }
                    On constate que l'algorithme ne plafonne pas le jour 
                    s'il dépasse le dernier jour du mois obtenu
                    Il les ajoute au résultat  
                    <b>Ce n'est pas forcément une bonne décision</b>
</pre>
    `;

rep = '';
for (let i = 1; i <= 12; i++) {
    date = new Date('2024-01-31');
    rep = rep + date.retirerMois(i).toLocaleDateString() + '<br>';
}

tr.insertCell().innerHTML = rep;

// Ajouter une année puis 2 jusqu'à 4 en partant du 29/02/2024
tr = table.insertRow();
tr.insertCell().innerText = 'Ajouter une année puis 2 jusqu\'à 4 en partant du 29/02/2024';
tr.insertCell().innerHTML = `
           <pre>
rep = '';
for (i = 1; i <= 4; i++) {
    date = new Date("2024-02-29");
    rep = rep + date.ajouterAnnee(i).toLocaleDateString();
}</pre>
    `;

rep = '';
for (let i = 1; i <= 4; i++) {
    date = new Date('2024-02-29');
    rep = rep + date.ajouterAnnee(i).toLocaleDateString() + '<br>';
}

tr.insertCell().innerHTML = rep;


// Retirer une année puis 2 jusqu'à 4 en partant du 29/02/2024
tr = table.insertRow();
tr.insertCell().innerText = 'Retirer une année puis 2 jusqu\'à 4 en partant du 29/02/2024';
tr.insertCell().innerHTML = `
           <pre>
rep = '';
for (i = 1; i <= 4; i++) {
    date = new Date("2024-02-29");
    rep = date.retirerAnnee(i).toLocaleDateString();
}</pre>
    `;

rep = '';
for (let i = 1; i <= 4; i++) {
    date = new Date('2024-02-29');
    rep = rep + date.retirerAnnee(i).toLocaleDateString() + '<br>';
}

tr.insertCell().innerHTML = rep;



