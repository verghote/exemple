const table = document.createElement('table');
table.classList.add('table', 'table-bordered');
zone.appendChild(table);

const dateCourante = new DateFr();

// Date courante au format jj/mm/aaaa
let tr = table.insertRow();
tr.insertCell().innerText = 'Date courante au format jj/mm/aaaa';
tr.insertCell().innerHTML = 'let dateCourante = new DateFr();<br>dateCourante.toFormatCourt(); ';
tr.insertCell().innerText = dateCourante.toFormatCourt();

// Date courante au format aaaa-mm-jj
tr = table.insertRow();
tr.insertCell().innerText = 'Date courante au format aaaa-mm-jj';
tr.insertCell().innerHTML = 'dateCourante.toFormatMySQL(); ';
tr.insertCell().innerText = dateCourante.toFormatMySQL();

// date au format long
tr = table.insertRow();
tr.insertCell().innerText = 'Date courante au format long';
tr.insertCell().innerHTML = 'dateCourante.toFormatLong();';
tr.insertCell().innerText = dateCourante.toFormatLong();

// date au format interne
tr = table.insertRow();
tr.insertCell().innerText = 'Date courante au format interne';
tr.insertCell().innerHTML = 'dateCourante.getNbJour();';
tr.insertCell().innerText = dateCourante.getNbJour();

// Création à partir des trois paramètres jour mois année
const jour = 1;
let mois = 1;
let annee = 2024;
let date = new DateFr(jour, mois, annee);
tr = table.insertRow();
tr.insertCell().innerText = 'Création à partir des trois paramètres jour mois année';
tr.insertCell().innerHTML = `let date = new DateFr(${jour}, ${mois}, ${annee}); `;
tr.insertCell().innerText = date.toFormatCourt();

//  Création à partir de la chaine string = "2024-02-28"
date = new DateFr('2024-02-28');
tr = table.insertRow();
tr.insertCell().innerText = 'Création à partir de la chaine \'2024-02-28\'';
tr.insertCell().innerHTML = ' date = new DateFr(\'2024-02-28\');';
tr.insertCell().innerText = date.toFormatCourt();

//  Création à partir de la chaine string = "2024-02-28"
date = DateFr.getFromDateMysql('2024-02-28');
tr = table.insertRow();
tr.insertCell().innerText = 'Création à partir de la chaine \'2024-02-28\'';
tr.insertCell().innerHTML = ' date = DateFr.getFromDateMysql(\'2024-02-28\')';
tr.insertCell().innerText = date.toFormatCourt();

//  Création à partir de la chaine '28/02/2024'
date = new DateFr('28/02/2024');
tr = table.insertRow();
tr.insertCell().innerText = 'Création à partir de la chaine \'28/02/2024\'';
tr.insertCell().innerHTML = ' date = new DateFr(\'28/02/2024\');';
tr.insertCell().innerText = date.toFormatCourt();

// Création à partir de la chaîne '28/02/2024'
// il faut convertir la chaine dans le format aaaa-mm-jj, seul format accepté dans cette bibliothèque
date = DateFr.getFromDateFr('28/02/2024');
tr = table.insertRow();
tr.insertCell().innerText = 'Création à partir de la chaîne \'28/02/2024\' ';
tr.insertCell().innerHTML = 'date =DateFr.getFromDateFr(\'28/02/2024\');';
tr.insertCell().innerText = date.toFormatCourt();

// Récupérer le jour
tr = table.insertRow();
tr.insertCell().innerText = 'Récupérer le jour ';
tr.insertCell().innerHTML = 'dateCourante.getJour();';
tr.insertCell().innerText = dateCourante.getJour();

// le jour en lettre
tr = table.insertRow();
tr.insertCell().innerText = 'Jour en lettre';
tr.insertCell().innerHTML = 'dateCourante.getJourEnLettre()';
tr.insertCell().innerText = dateCourante.getJourEnLettre();

//  Mois en chiffre
tr = table.insertRow();
tr.insertCell().innerText = 'Mois en chiffre)';
tr.insertCell().innerHTML = 'dateCourante.getMois();';
tr.insertCell().innerText = dateCourante.getMois();

//  Mois en lettre
tr = table.insertRow();
tr.insertCell().innerText = 'Mois en lettre';
tr.insertCell().innerHTML = 'dateCourante.getMoisEnLettre();';
tr.insertCell().innerText = dateCourante.getMoisEnLettre();

// Récupérer l'annee
tr = table.insertRow();
tr.insertCell().innerText = 'Récupérer l\'année ';
tr.insertCell().innerHTML = 'dateCourante.getAnnee();';
tr.insertCell().innerText = dateCourante.getAnnee();

// Récupérer le jour de la semaine
tr = table.insertRow();
tr.insertCell().innerText = 'Récupérer le jour de la semaine (0 = dimanche)';
tr.insertCell().innerHTML = 'dateCourante.getJourSemaine();';
tr.insertCell().innerText = dateCourante.getJourSemaine();

// le quantième
tr = table.insertRow();
tr.insertCell().innerText = 'Quantieme (n° jour dans l\'année) ';
tr.insertCell().innerHTML = 'let quantieme= dateCourante.getQuantieme()';
tr.insertCell().innerText = dateCourante.getQuantieme();

// le numéro de la semaine
tr = table.insertRow();
tr.insertCell().innerText = 'Numéro de la semaine ';
tr.insertCell().innerHTML = 'dateCourante.getNumeroSemaine()';
tr.insertCell().innerText = dateCourante.getNumeroSemaine();


// Premier jour de l'année au format long
const dateDebut = new DateFr(1, 1, dateCourante.getAnnee());
tr = table.insertRow();
tr.insertCell().innerText = 'Premier jour de l\'année au format long ';
tr.insertCell().innerHTML = 'let dateDebut= new DateFr(1, 1, dateCourante.getAnnee());';
tr.insertCell().innerText = dateDebut.toFormatLong();

// le numéro de la semaine
tr = table.insertRow();
tr.insertCell().innerText = 'Numéro de la semaine ';
tr.insertCell().innerHTML = 'dateDebut.getNumeroSemaine()';
tr.insertCell().innerText = dateDebut.getNumeroSemaine();

// Dernier jour de l'année au format long
const dateFin = new DateFr(31, 12, dateCourante.getAnnee());
tr = table.insertRow();
tr.insertCell().innerText = 'Dernier jour de l\'année au format long ';
tr.insertCell().innerHTML = 'let dateFin = new Date(31, 12, dateCourante.getAnnee());';
tr.insertCell().innerText = dateFin.toFormatLong();

// le numéro de la semaine
tr = table.insertRow();
tr.insertCell().innerText = 'Numéro de la semaine ';
tr.insertCell().innerHTML = 'dateFin.getNumeroSemaine()';
tr.insertCell().innerText = dateFin.getNumeroSemaine();

// Dernier jour du mois
mois = dateCourante.getMois();
annee = dateCourante.getAnnee();
date = new DateFr(DateFr.joursDansMois(mois, annee), mois, annee);
tr = table.insertRow();
tr.insertCell().innerText = 'Dernier jour du mois ';
tr.insertCell().innerHTML = 'let mois = dateCourante.getMois();<br>let annee = dateCourante.getAnnee();<br>date = new Date(DateFr.joursDansMois(mois, annee), mois, annee );';
tr.insertCell().innerText = date.toFormatCourt();

//  Nombre de jours jusqu'au 31/12
tr = table.insertRow();
tr.insertCell().innerText = ' Nombre de jours jusqu\'au 31/12 ';
tr.insertCell().innerHTML = 'dateFin.ecartEnJours(dateCourante);';
tr.insertCell().innerText = dateFin.ecartEnJours(dateCourante);

//  Nombre de jours depuis le premier janvier
tr = table.insertRow();
tr.insertCell().innerText = 'Nombre de jours depuis le premier janvier';
tr.insertCell().innerHTML = 'dateCourante.ecartEnJours(dateDebut) + 1';
tr.insertCell().innerText = dateCourante.ecartEnJours(dateDebut) + 1;

//  Nombre de jours dans l'année
tr = table.insertRow();
tr.insertCell().innerText = 'Nombre de jours dans l\'année';
tr.insertCell().innerHTML = 'dateFin.ecartEnJours(dateDebut) + 1';
tr.insertCell().innerText = dateFin.ecartEnJours(dateDebut) + 1;

//  Hier
tr = table.insertRow();
tr.insertCell().innerText = 'Hier';
tr.insertCell().innerHTML = 'dateCourante.retirerJour(1).toFormatCourt();';
tr.insertCell().innerText = dateCourante.retirerJour(1).toFormatCourt();

//  Hier
tr = table.insertRow();
tr.insertCell().innerText = 'Demain';
tr.insertCell().innerHTML = 'dateCourante.ajouterJour(1).toFormatCourt();';
tr.insertCell().innerText = dateCourante.ajouterJour(1).toFormatCourt();

//   15 jours avant
tr = table.insertRow();
tr.insertCell().innerText = '15 jours avant';
tr.insertCell().innerHTML = 'dateCourante.retirerJour(15).toFormatCourt();';
tr.insertCell().innerText = dateCourante.retirerJour(15).toFormatCourt();


//    Dans 15 jours
tr = table.insertRow();
tr.insertCell().innerText = 'Dans 15 jours';
tr.insertCell().innerHTML = 'dateCourante.ajouterJour(15).toFormatCourt()';
tr.insertCell().innerText = dateCourante.ajouterJour(15).toFormatCourt();

//   Un mois avant
tr = table.insertRow();
tr.insertCell().innerText = 'Un mois avant';
tr.insertCell().innerHTML = 'dateCourante.retirerMois(1).toFormatCourt();';
tr.insertCell().innerText = dateCourante.retirerMois(1).toFormatCourt();

//    Dans un mois
tr = table.insertRow();
tr.insertCell().innerText = 'Dans un mois';
tr.insertCell().innerHTML = 'dateCourante.ajouterMois(1).toFormatCourt()';
tr.insertCell().innerText = dateCourante.ajouterMois(1).toFormatCourt();

//   Un mois avant le 31/03/2024
const date31 = new DateFr('31/03/2024');
tr = table.insertRow();
tr.insertCell().innerText = 'Un mois avant le 31/03/2024';
tr.insertCell().innerHTML = 'date31.retirerMois(1).toFormatCourt();';
tr.insertCell().innerText = date31.retirerMois(1).toFormatCourt();

//    Un mois après le 31/03/2024
tr = table.insertRow();
tr.insertCell().innerText = 'Un mois après le 31/03/2024';
tr.insertCell().innerHTML = 'date31.ajouterMois(1).toFormatCourt()';
tr.insertCell().innerText = date31.ajouterMois(1).toFormatCourt();

//   Un an avant
tr = table.insertRow();
tr.insertCell().innerText = 'Un an avant';
tr.insertCell().innerHTML = 'dateCourante.retirerAnnee(1).toFormatCourt();';
tr.insertCell().innerText = dateCourante.retirerAnnee(1).toFormatCourt();

//    Dans un an
tr = table.insertRow();
tr.insertCell().innerText = 'Dans un an';
tr.insertCell().innerHTML = 'dateCourante.ajouterAnnee(1).toFormatCourt()';
tr.insertCell().innerText = dateCourante.ajouterAnnee(1).toFormatCourt();

//   Un an avant le 29/02/2024
const date29 = new DateFr('29/02/2024');
tr = table.insertRow();
tr.insertCell().innerText = 'Un an avant le 29/02/2024';
tr.insertCell().innerHTML = 'date29.retirerAnnee(1).toFormatCourt();';
tr.insertCell().innerText = date29.retirerAnnee(1).toFormatCourt();

//    Un an après le 29/02/2024
tr = table.insertRow();
tr.insertCell().innerText = 'Un an après le 29/02/2024';
tr.insertCell().innerHTML = 'date29.ajouterAnnee(1).toFormatCourt()';
tr.insertCell().innerText = date29.ajouterAnnee(1).toFormatCourt();

//    Le vendredi en 8
let vendrediEn8 = dateCourante.ajouterJour(7);
do {
    vendrediEn8 = vendrediEn8.ajouterJour(1);
}
while (vendrediEn8.getJourSemaine() !== 5);

tr = table.insertRow();
tr.insertCell().innerText = 'Vendredi en huit (méthode ajoutée)';
tr.insertCell().innerHTML = ' let vendrediEn8 = dateCourante.ajouterJour(7);<br>' +
    '    do {<br>' +
    '        vendrediEn8 = vendrediEn8.ajouterJour(1);<br>' +
    '    } while (vendrediEn8.getJourSemaine() !== 5);';
tr.insertCell().innerText = vendrediEn8.toFormatLong();


// Ajouter 1 mois puis 2 jusqu'à 12 en partant toujours du 31/01/2024
tr = table.insertRow();
tr.insertCell().innerText = 'Ajouter 1 mois puis 2 jusqu\'à 12 en partant toujours du 31/01/2024';
tr.insertCell().innerHTML = `
           <pre>
let rep = '';
    for (let i = 1; i <= 12; i++) {
        date = new DateFr("31/01/20224");
        rep = rep + date.ajouterMois(i).toFormatCourt();
    }
                    On constate que l'algorithme plafonne le jour
                     s'il dépasse le dernier jour du mois obtenu
                     <b>C'est une bonne décision</b>
</pre>
    `;

let rep = '';
for (let i = 1; i <= 12; i++) {
    date = new DateFr('31/01/2024');
    rep = rep + date.ajouterMois(i).toFormatCourt() + '<br>';
}

tr.insertCell().innerHTML = rep;

// Retirer 1 mois puis 2 jusqu'à 12 en partant toujours du 31/01/2024
tr = table.insertRow();
tr.insertCell().innerText = 'Retirer 1 mois puis 2 jusqu\'à 12 en partant toujours du 31/01/2024';
tr.insertCell().innerHTML = `
           <pre>
let rep = '';
    for (let i = 1; i <= 12; i++) {
        date = new DateFr("31/01/20224");
        rep = rep + date.retirerMois(i).toFormatCourt();
    }
                    On constate que l'algorithme plafonne le jour
                     s'il dépasse le dernier jour du mois obtenu
                     <b>C'est une bonne décision</b>
</pre>
    `;

rep = '';
for (let i = 1; i <= 12; i++) {
    date = new DateFr('31/01/2024');
    rep = rep + date.retirerMois(i).toFormatCourt() + '<br>';
}

tr.insertCell().innerHTML = rep;

// Ajouter une année puis 2 jusqu'à 4 en partant du 29/02/2024
tr = table.insertRow();
tr.insertCell().innerText = 'Ajouter une année puis 2 jusqu\'à 4 en partant du 29/02/2024';
tr.insertCell().innerHTML = `
           <pre>
rep = '';
for (i = 1; i <= 4; i++) {
    date = new DateFr("29/02/2024");
    rep = rep + date.ajouterAnnee(i).toFormatCourt();
}</pre>
    `;

rep = '';
for (let i = 1; i <= 4; i++) {
    date = new DateFr('29/02/2024');
    rep = rep + date.ajouterAnnee(i).toFormatCourt() + '<br>';
}

tr.insertCell().innerHTML = rep;


// Retirer une année puis 2 jusqu'à 4 en partant du 29/02/2024
tr = table.insertRow();
tr.insertCell().innerText = 'Retirer une année puis 2 jusqu\'à 4 en partant du 29/02/2024';
tr.insertCell().innerHTML = `
           <pre>
rep = '';
for (i = 1; i <= 4; i++) {
    date = new DateFr("29/02/2024");
    rep = date.retirerAnnee(i).toFormatCourt();
}</pre>
    `;

rep = '';
for (let i = 1; i <= 4; i++) {
    date = new DateFr('29/02/2024');
    rep = rep + date.retirerAnnee(i).toFormatCourt() + '<br>';
}
tr.insertCell().innerHTML = rep;

tr = table.insertRow();
tr.insertCell().innerText = 'Test méthode numeroSemaine() de 2020 à 2023 ?';

tr.insertCell().innerHTML = `
           <pre>
<pre>
Résultats attendus
Année : 2020 : 1
Année : 2021 : 53
Année : 2022 : 52
Année : 2023 : 52
Année : 2024 : 1
Année : 2025 : 1
Année : 2026 : 1
Année : 2027 : 53
Année : 2028 : 52
Année : 2029 : 1
Année : 2030 : 1</pre>
</pre>
    `;
rep = '';
for (let i = 2020; i <= 2030; i++) {
    date = new DateFr(1, 1, i);
    rep += '<br>' + annee + ' : ' + date.getNumeroSemaine();
}
tr.insertCell().innerHTML = rep;


tr = table.insertRow();
tr.insertCell().innerText = 'Début de la semaine 1 de 2020 à 2023 ?';

tr.insertCell().innerHTML = `
           <pre>
rep = '';
for (let i = 2020; i <= 2030; i++) {
    date = DateFr.getDebutSemaine(i, 1);
    rep = date.toFormatLong() + "<br>";
}</pre>
    `;
rep = '';
for (let i = 2020; i <= 2030; i++) {
    date = DateFr.getDebutSemaine(i, 1);
    rep += date.toFormatLong() + '<br>';
}
tr.insertCell().innerHTML = rep;


//Test de la méthode Date.joursDansMois
tr = table.insertRow();
tr.insertCell().innerText = 'Test de la méthode Date.joursDansMois ';
tr.insertCell().innerHTML = `
           <pre>
rep = "";
annee = 2024;
nbJour = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
for (let mois = 1; mois <= 12; mois++) {
   DateFr.joursDansMois(mois, annee) === nbJour[mois - 1] 
}
annee = 2021
nbJour = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
for (let mois = 1; mois <= 12; mois++) {
   DateFr.joursDansMois(mois, annee) === nbJour[mois - 1]
}
</pre>
    `;
rep = '';
annee = 2024;
let nbJour = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
for (let mois = 1; mois <= 12; mois++) {
    const res = DateFr.joursDansMois(mois, annee) === nbJour[mois - 1];
    rep += `(${mois},${annee}) : ${DateFr.joursDansMois(mois, annee)} ${res}<br>`;
}
annee = 2021;
nbJour = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
for (let mois = 1; mois <= 12; mois++) {
    const res = DateFr.joursDansMois(mois, annee) === nbJour[mois - 1];
    rep += `(${mois},${annee}) : ${DateFr.joursDansMois(mois, annee)} ${res}<br>`;
}
tr.insertCell().innerHTML = rep;

//Test de la méthode quantième
tr = table.insertRow();
tr.insertCell().innerText = 'Test de la méthode getQuantieme() ';
tr.insertCell().innerHTML = `  <pre>
rep = "";
annee = 2024;
quantieme = [31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366]
for (let mois = 1; mois <= 12; mois++) {
   let uneDate = new DateFr(DateFr.joursDansMois(mois, annee), mois, annee);
   uneDate.getQuantieme() === quantieme[mois - 1];
}
annee = 2021
quantieme = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]
for (let mois = 1; mois <= 12; mois++) {
   let uneDate = new DateFr(DateFr.joursDansMois(mois, annee), mois, annee);
   uneDate.getQuantieme() === quantieme[mois - 1];
}
</pre>
`;
rep = '';
annee = 2024;
let quantieme = [31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
for (let mois = 1; mois <= 12; mois++) {
    const uneDate = new DateFr(DateFr.joursDansMois(mois, annee), mois, annee);
    const resultat = uneDate.getQuantieme() === quantieme[mois - 1];
    rep += uneDate.toFormatCourt() + ' = ' + uneDate.getQuantieme() + ' :' + resultat + '<br>';
}
annee = 2021;
quantieme = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
for (let mois = 1; mois <= 12; mois++) {
    const uneDate = new DateFr(DateFr.joursDansMois(mois, annee), mois, annee);
    const resultat = uneDate.getQuantieme() === quantieme[mois - 1] ? 'Ok' : 'Erreur';
    rep += uneDate.toFormatCourt() + ' = ' + uneDate.getQuantieme() + ' :' + resultat + '<br>';
}
tr.insertCell().innerHTML = rep;

// le mois avec sa particule
tr = table.insertRow();
tr.insertCell().innerText = 'le mois avec sa particule';
tr.insertCell().innerHTML = `
<pre>
    rep = "";
    for(let i = 1; i <= 12; i++) {
        rep += DateFr.getLeMois(i)
    }

</pre>    
    `;
rep = '';
for (let i = 1; i <= 12; i++) {
    const leMois = DateFr.getLeMois(i);
    rep += leMois.particule + leMois.libelle + '<br>';
}
tr.insertCell().innerHTML = rep;


// validité des arguments d'une date

tr = table.insertRow();
tr.insertCell().innerText = 'Validité des arguments d\'une date';
tr.insertCell().innerHTML = 'DateFr.estValide(29, 2, 2024)';
tr.insertCell().innerHTML = DateFr.estValide(29, 2, 2024);

tr = table.insertRow();
tr.insertCell().innerText = 'Validité des arguments d\'une date';
tr.insertCell().innerHTML = 'DateFr.estValide(29, 2, 2023)';
tr.insertCell().innerHTML = DateFr.estValide(29, 2, 2023);


tr = table.insertRow();
tr.insertCell().innerText = 'L\'année est-elle bissextile ?';
tr.insertCell().innerHTML = 'DateFr.estBissextile(2023)';
tr.insertCell().innerHTML = DateFr.estBissextile(2023);

tr = table.insertRow();
tr.insertCell().innerText = 'L\'année est-elle bissextile ?';
tr.insertCell().innerHTML = 'DateFr.estBissextile(2024)';
tr.insertCell().innerHTML = DateFr.estBissextile(2024);

tr = table.insertRow();
tr.insertCell().innerText = 'Le premier janvier jour est-il férié ?';
tr.insertCell().innerHTML = 'dateDebut.estFerie()';
tr.insertCell().innerHTML = dateDebut.estFerie();

tr = table.insertRow();
tr.insertCell().innerText = 'Le 31 décembre est-il férié ?';
tr.insertCell().innerHTML = 'dateFin.estFerie()';
tr.insertCell().innerHTML = dateFin.estFerie();

tr = table.insertRow();
tr.insertCell().innerText = 'Les dimanches de Paques de 2024 à 2030 ?';

tr.insertCell().innerHTML = `
           <pre>
rep = '';
for (let i = 2024; i <= 2030; i++) {
    date = DateFr.getPaques(i);
    rep = date.toFormatLong() + "<br>";
}</pre>
    `;
rep = '';
for (let i = 2024; i <= 2030; i++) {
    date = DateFr.getPaques(i);
    rep += date.toFormatLong() + '<br>';
}
tr.insertCell().innerHTML = rep;

tr = table.insertRow();
tr.insertCell().innerText = 'Aujourd\'hui est-il un jour ouvrable ?';
tr.insertCell().innerHTML = 'dateCourante.estJourOuvrable()';
tr.insertCell().innerHTML = dateCourante.estJourOuvrable();

tr = table.insertRow();
tr.insertCell().innerText = 'Hier est-il un jour ouvrable ?';
tr.insertCell().innerHTML = 'dateCourante.retirerJour(1).estJourOuvrable()';
tr.insertCell().innerHTML = dateCourante.retirerJour(1).estJourOuvrable();

tr = table.insertRow();
tr.insertCell().innerText = 'Demain est-il un jour ouvrable ?';
tr.insertCell().innerHTML = 'dateCourante.ajouterJour(1).estJourOuvrable()';
tr.insertCell().innerHTML = dateCourante.ajouterJour(1).estJourOuvrable();

tr = table.insertRow();
tr.insertCell().innerText = 'Quel est le jour ouvrable avant le premier janvier ?';
tr.insertCell().innerHTML = 'dateDebut.getJourOuvrablePrecedent().toFormatLong()';
tr.insertCell().innerHTML = dateDebut.getJourOuvrablePrecedent().toFormatLong();

tr = table.insertRow();
tr.insertCell().innerText = 'Quel est le jour ouvrable après le 31 décembre ?';
tr.insertCell().innerHTML = 'dateFin.getJourOuvrableSuivant().toFormatLong()';
tr.insertCell().innerHTML = dateFin.getJourOuvrableSuivant().toFormatLong();

tr = table.insertRow();
tr.insertCell().innerText = 'Liste des jours fériès de l\'année';
tr.insertCell().innerHTML = `
<pre>
rep = ""
DateFr.getLesJoursFeries(dateCourante.getAnnee()).forEach(x => 
         rep += x.libelle  + "<br>" + x.date.toFormatLong() + '<br>');

</pre>    
    `;
rep = '';
DateFr.getLesJoursFeries(dateCourante.getAnnee()).forEach(x => rep += x.libelle + '<br>' + x.date.toFormatLong() + '<br>');

tr.insertCell().innerHTML = rep;
