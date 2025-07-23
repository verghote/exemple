// lecture des données d'un fichier json transféré dans un tableau

const lesLignes = document.getElementById('lesLignes');


for (const etudiant of lesEtudiants) {
    const tr = lesLignes.insertRow();
    tr.insertCell().innerText = etudiant.nom;
    tr.insertCell().innerText = etudiant.prenom;

    const td = document.createElement('td');
    td.classList.add('text-center');
    // td.style.textAlign = 'center';
    td.innerText = etudiant.option;
    tr.appendChild(td);
}






