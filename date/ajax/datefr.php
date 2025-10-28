<div id='zone' class="border m-1">
    <?php
    include $_SERVER['DOCUMENT_ROOT'] . '/classetechnique/datefr.php';
    // instanciation à l'aide du constructeur par défaut
    $date = new DateFr();
    ?>
    <table class="table table-bordered">
        <tr>
            <td>
                Date courante au format jj/mm/aaaa
            </td>
            <td>
                $dateCourante = new DateFr();
                <br>
                $dateCourante->toFormatCourt();
            </td>
            <td>
                <?php
                $dateCourante = new DateFr();
                echo $dateCourante->toFormatCourt('/');
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Date courante au format aaaa-mm-jj
            </td>
            <td>
                $dateCourante->toFormatMySQL();
            </td>
            <td>
                <?php
                echo $dateCourante->toFormatMySQL();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Date courante au format long
            </td>
            <td>
                $dateCourante->toFormatLong()
            </td>
            <td>
                <?=
                $dateCourante->toFormatLong();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Date courante au format interne
            </td>
            <td>
                $dateCourante->getNbJour()
            </td>
            <td>
                <?=
                $dateCourante->getNbJour();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Création à partir des trois paramètres jour mois année
            </td>
            <td>$date = new DateFr($jour, $mois, $annee)</td>
            <td>
                <?php
                $jour = 1;
                $mois = 1;
                $annee = 2024;
                $date = new DateFr($jour, $mois, $annee);
                echo $date->toFormatCourt(); ?>
            </td>
        </tr>
        <tr>
            <td>
                Création à partir de la chaine '2024-02-28'
            </td>
            <td>
                $date = new DateFr('2024-02-28');
            <td>
                <?php
                $string = "2024-02-28";
                $date = new DateFr($string);
                echo $date->toFormatCourt();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Création à partir de la chaine $string = "2024-02-28"
            </td>
            <td>
                $date = DateFr::getFromDateMysql($string);
            <td>
                <?php
                $date = DateFr::getFromDateMysql($string);
                echo $date->toFormatCourt();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Création à partir de la chaîne '28/02/2024'
            </td>
            <td>
                $date = DateFr::getFromDateFr('28/02/2024');
            </td>
            <td>
                <?php
                $string = "28/02/2024";
                $date = new DateFr($string);
                echo $date->toFormatCourt();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Création à partir de la chaîne $string = "28/02/2024"
            </td>
            <td>
                $date = DateFr::getFromDateFr($string);
            </td>
            <td>
                <?php
                $string = "28/02/2024";
                $date = DateFr::getFromDateFr($string);
                echo $date->toFormatCourt();
                ?>
            </td>
        </tr>


        <tr>
            <td>
                Jour
            </td>
            <td>
                $dateCourante->getJour()
            </td>
            <td>
                <?=
                $dateCourante->getJour();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Jour en lettre
            </td>
            <td>
                $dateCourante->getJourEnLettre()
            </td>
            <td>
                <?= $dateCourante->getJourEnLettre(); ?>
            </td>
        </tr>
        <tr>
            <td>
                Mois
            </td>
            <td>
                $dateCourante->getMois()
            </td>
            <td>
                <?=
                $dateCourante->getMois();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Mois en lettre
            </td>
            <td>
                $dateCourante->getMoisEnLettre()
            </td>
            <td>
                <?=
                $dateCourante->getMoisEnLettre();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Année
            </td>
            <td>
                $dateCourante->getAnnee()
            </td>
            <td>
                <?=
                $dateCourante->getAnnee();
                ?>
            </td>
        </tr>

        <tr>
            <td>
                Jour dans la semaine (1 lundi)
            </td>
            <td>
                $dateCourante->getJourSemaine()
            </td>
            <td>
                <?=
                $dateCourante->getJourSemaine();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Quantieme (n° jour dans l'année)
            </td>
            <td>
                $dateCourante->getQuantieme()
            </td>
            <td>
                <?=
                $dateCourante->getQuantieme();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Numéro de la semaine
            </td>
            <td>
                $dateCourante->getNumeroSemaine();
            </td>
            <td>
                <?=
                $dateCourante->getNumeroSemaine();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Premier jour de l'année au format long
            </td>
            <td>
                $dateDebut = new DateFr(1, 1, $dateCourante->getAnnee())
            </td>
            <td>
                <?php
                $dateDebut = new DateFr(1, 1, $dateCourante->getAnnee());
                echo $dateDebut->toFormatLong();
                ?> </td>
        </tr>
        <tr>
            <td>
                Numéro de la semaine
            </td>
            <td>
                $dateDebut->getNumeroSemaine();
            </td>
            <td>
                <?=
                $dateDebut->getNumeroSemaine();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Dernier jour de l'année au format long
            </td>
            <td>
                $dateFin = new DateFr(31, 12, $dateCourante->getAnnee());
            </td>
            <td>
                <?php
                $dateFin = new DateFr(31, 12, $dateCourante->getAnnee());
                echo $dateFin->toFormatLong();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Numéro de la semaine
            </td>
            <td>
                $dateFin->getNumeroSemaine();
            </td>
            <td>
                <?=
                $dateFin->getNumeroSemaine();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Dernier jour du mois
            </td>
            <td>
                DateFr::joursDansMois($dateCourante->getMois(), $dateCourante->getAnnee())
            </td>
            <td>
                <?=
                DateFr::joursDansMois($dateCourante->getMois(), $dateCourante->getAnnee())
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Nombre de jours jusqu'au 31/12
            </td>
            <td>
                $dateFin->ecartEnJours($dateCourante)
            </td>
            <td>
                <?=
                $dateFin->ecartEnJours($dateCourante);
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Nombre de jours depuis le premier janvier
            </td>
            <td>
                $dateCourante.ecartEnJours($dateDebut) + 1
            </td>
            <td>
                <?=
                $dateCourante->ecartEnJours($dateDebut) + 1;
                ?>
            </td>
        </tr>

        <tr>
            <td>
                Nombre de jours dans l'année
            </td>
            <td>
                $dateFin.ecartEnJours($dateDebut) + 1
            </td>
            <td>
                <?=
                $dateFin->ecartEnJours($dateDebut) + 1
                ?>
            </td>
        </tr>
        <tr>
            <td>Comparaison (égalité)</td>
            <td>$dateCourante->estEgale($dateDebut)</td>
            <td><?= $dateCourante->estEgale($dateDebut) ? 'Vrai' : 'Faux' ?></td>
        </tr>
        <tr>
            <td></td>
            <td>$dateCourante->estEgale($dateFin)</td>
            <td><?= $dateCourante->estEgale($dateFin) ? 'Vrai' : 'Faux'; ?> </td>
        </tr>
        <tr>
            <td></td>
            <td>$dateCourante->estEgale($dateCourante)</td>
            <td><?= $dateCourante->estEgale($dateCourante) ? 'Vrai' : 'Faux'; ?> </td>
        </tr>
        <tr>
            <td>Comparaison (supérieur)</td>
            <td>$dateCourante->estPlusGrande($dateDebut)</td>
            <td><?= $dateCourante->estPlusGrande($dateDebut) ? 'Vrai' : 'Faux'; ?> </td>
        </tr>
        <tr>
            <td></td>
            <td>$dateCourante->estPlusGrande($dateFin)</td>
            <td><?= $dateCourante->estPlusGrande($dateFin) ? 'Vrai' : 'Faux'; ?> </td>
        </tr>
        <tr>
            <td></td>
            <td>$dateCourante->estPlusGrande($dateCourante)</td>
            <td><?= $dateCourante->estPlusGrande($dateCourante) ? 'Vrai' : 'Faux'; ?> </td>
        </tr>
        <tr>
            <td>Comparaison (inférieur)</td>
            <td>$dateCourante->estPlusPetite($dateDebut)</td>
            <td><?= $dateCourante->estPlusPetite($dateDebut) ? 'Vrai' : 'Faux'; ?></td>
        </tr>
        <tr>
            <td></td>
            <td>$dateCourante->estPlusPetite($dateFin)</td>
            <td><?= $dateCourante->estPlusPetite($dateFin) ? 'Vrai' : 'Faux'; ?></td>
        </tr>
        <tr>
            <td></td>
            <td>$dateCourante->estPlusPetite($dateCourante)</td>
            <td><?= $dateCourante->estPlusPetite($dateCourante) ? 'Vrai' : 'Faux'; ?> </td>
        </tr>
        <tr>
            <td>
                Hier
            </td>
            <td>
                $dateCourante->retirerJour(1)->toFormatCourt();
            </td>
            <td>
                <?=
                $dateCourante->retirerJour(1)->toFormatCourt(); ?>
            </td>
        </tr>
        <tr>
            <td>
                Demain
            </td>
            <td>
                $dateCourante->ajouterJour(1)->toFormatCourt();
            </td>
            <td>
                <?=
                $dateCourante->ajouterJour(1)->toFormatCourt();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                15 jours avant
            </td>
            <td>
                $dateCourante->retirerJour(15)->toFormatCourt();
            </td>
            <td>
                <?=
                $dateCourante->retirerJour(15)->toFormatCourt();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Dans 15 jours
            </td>
            <td>
                $dateCourante->ajouterJour(15)->toFormatCourt();
            </td>
            <td>
                <?=
                $dateCourante->ajouterJour(15)->toFormatCourt();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Un mois avant
            </td>
            <td>
                $dateCourante->retirerMois(1)->toFormatCourt();
            </td>
            <td>
                <?=
                $dateCourante->retirerMois(1)->toFormatCourt();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Dans un mois
            </td>
            <td>
                $dateCourante->ajouterMois(1)->toFormatCourt();
            </td>
            <td>
                <?=
                $dateCourante->ajouterMois(1)->toFormatCourt();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Un mois avant le 31/03/2024
            </td>
            <td>
                $date31->retirerMois(1)->toFormatCourt();
            </td>
            <td>
                <?php
                $date31 = new DateFr("31/03/2024");
                echo $date31->retirerMois(1)->toFormatCourt();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Un mois après le 31/03/2024
            </td>
            <td>
                $date31->ajouterMois(1)->toFormatCourt();
            </td>
            <td>
                <?=
                $date31->ajouterMois(1)->toFormatCourt();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Un an avant
            </td>
            <td>
                $dateCourante->retirerAnnee(1)->toFormatCourt();
            </td>
            <td>
                <?=
                $dateCourante->retirerAnnee(1)->toFormatCourt();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Dans un an
            </td>
            <td>
                $dateCourante->ajouterAnnee(1)->toFormatCourt();
            </td>
            <td>
                <?=
                $dateCourante->ajouterAnnee(1)->toFormatCourt();
                ?>
            </td>
        </tr>

        <tr>
            <td>
                Un an avant le 29/02/2024
            </td>
            <td>
                $date29->retirerAnnee(1)->toFormatCourt();
            </td>
            <td>
                <?php
                $date29 = new DateFr('29/02/2024');
                echo $date29->retirerAnnee(1)->toFormatCourt();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Dans un an
            </td>
            <td>
                $date29->ajouterAnnee(1)->toFormatCourt();
            </td>
            <td>
                <?=
                $date29->ajouterAnnee(1)->toFormatCourt();
                ?>
            </td>
        </tr>

        <tr>
            <td>
                Le vendredi en 8 : ajouter 7 jours puis 1 jour jusqu'à jour semaine = vendredi
            </td>
            <td>
<pre>
$vendrediEn8 = new DateFr();
$vendrediEn8  = $vendrediEn8->ajouterJour(7);
do
    $vendrediEn8  = $vendrediEn8->ajouterJour(1);
while ($vendrediEn8->getJourSemaine() !== 5);</pre>
            </td>
            <td>
                <?php
                $vendrediEn8 = new DateFr();
                $vendrediEn8 = $vendrediEn8->ajouterJour(7);
                do
                    $vendrediEn8 = $vendrediEn8->ajouterJour(1);
                while ($vendrediEn8->getJourSemaine() !== 5);
                echo $vendrediEn8->toFormatLong();
                ?>
            </td>
        </tr>

        <tr>
            <td>
                Test méthode ajouterMois(i) : ajouter 1 mois en partant du 31/01/2024
            </td>
            <td>
<pre>
for ($i = 1; $i <= 12; $i++) {
    $date = new DateFr(31, 1, 2024);
    $date = $date->ajouterMois($i);
   echo $date->toFormatCourt();
}</pre>
            </td>
            <td><?php
                for ($i = 1; $i <= 12; $i++) {
                    $date = new DateFr(31, 1, 2024);
                    $date = $date->ajouterMois($i);
                    echo $date->toFormatCourt();
                    echo "<br>";
                }
                ?>
            </td>
        </tr>

        <tr>
            <td>
                Test méthode retirerMois(i) : retirer 1 mois en partant du 31/01/2024
            </td>
            <td>
<pre>
for ($i = 1; $i <= 12; $i++) {
    $date = new DateFr(31, 1, 2024);
    $date = $date->retirerMois($i);
   echo $date->toFormatCourt();
}</pre>
            </td>
            <td><?php
                for ($i = 1; $i <= 12; $i++) {
                    $date = new DateFr(31, 1, 2024);
                    $date = $date->retirerMois($i);
                    echo $date->toFormatCourt();
                    echo "<br>";
                }
                ?>
            </td>
        </tr>

        <tr>
            <td>
                Test méthode ajouterAnnee(i) : ajouter une année en partant du 29/02/2024
            </td>
            <td>
<pre>
for ($i = 1; $i <= 8; $i++) {
    $date = new DateFr(29, 2, 2024);
    $date = $date->ajouterAnnee($i);
    echo $date->toFormatCourt();
}</pre>
            </td>
            <td><?php
                for ($i = 1; $i <= 8; $i++) {
                    $date = new DateFr(29, 2, 2024);
                    $date = $date->ajouterAnnee($i);
                    echo $date->toFormatCourt();
                    echo "<br>";
                }
                ?>
            </td>
        </tr>

        <tr>
            <td>
                Test méthode retirerAnnee(i) : retirer une année en partant du 29/02/2024
            </td>
            <td>
<pre>
for ($i = 1; $i <= 8; $i++) {
    $date = new DateFr(29, 2, 2024);
    $date = $date->retirerAnnee($i);
    echo $date->toFormatCourt();
}</pre>
            </td>
            <td><?php
                for ($i = 1; $i <= 8; $i++) {
                    $date = new DateFr(29, 2, 2024);
                    $date = $date->retirerAnnee($i);
                    echo $date->toFormatCourt();
                    echo "<br>";
                }
                ?>
            </td>
        </tr>

        <tr>
            <td>
                Test méthode numeroSemaine()
                <br>
                Régle : La semaine 1 est celle qui contient le premier jeudi
                <br>
                Le test porte sur le premier janvier des années 2020 à 2030
            </td>
            <td>
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
            </td>
            <td><?php
                echo "Résultats obtenus";
                for ($annee = 2020; $annee <= 2030; $annee++) {
                    $date = new DateFr(1, 1, $annee);
                    echo "<br>$annee : {$date->getNumeroSemaine()}";
                }
                ?>
            </td>
        </tr>


        <tr>
            <td>
                Test de la méthode getDebutSemaine($annee, $numSemaine) ?
            </td>
            <td>
                <pre>
Résultats attendus
Semaine 1 en 2020 : lundi 30 décembre 2019
Semaine 1 en 2021 : lundi 04 janvier 2021
Semaine 1 en 2022 : lundi 03 janvier 2022
Semaine 1 en 2023 : lundi 02 janvier 2023
Semaine 1 en 2024 : lundi 1er janvier 2024
Semaine 1 en 2025 : lundi 30 décembre 2024
Semaine 1 en 2026 : lundi 29 décembre 2025
Semaine 1 en 2027 : lundi 04 janvier 2027
Semaine 1 en 2028 : lundi 03 janvier 2028
Semaine 1 en 2029 : lundi 1er janvier 2029
Semaine 1 en 2030 : lundi 31 décembre 2029</pre>
            </td>
            <td>
                <?php
                echo "Résultats obtenus";
                for ($annee = 2020; $annee <= 2030; $annee++) {
                    echo "<br>$annee : " . DateFr::getDebutSemaine($annee, 1)->toFormatLong();
                }
                ?>
            </td>
        </tr>

    </table>


    Méthodes supplémentaires proposées par la classe DateFr
    <table class="table table-bordered">
        <tr>
            <td>
                Le mois et sa particule
            </td>
            <td>
                $leMois = DateFr::getLeMois($mois);<br>echo $leMois['particule'] . $leMois['libelle'];
            </td>
            <td>
                <?php
                for ($mois = 1; $mois <= 12; $mois++) {
                    $leMois = DateFr::getLeMois($mois);
                    echo $leMois['particule'] . $leMois['libelle'];
                    echo "<br>";
                }
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Validité des paramètres jour mois année
            </td>
            <td>
                DateFr::estValide(29, 2, 2024) ? 'Oui' : 'Non'
            </td>
            <td>
                <?=
                DateFr::estValide(29, 02, 2024) ? 'Oui' : 'Non';
                ?>
            </td>
        </tr>
        <tr>
            <td></td>
            <td>DateFr::estValide(29, 2, 2021) ? 'Oui' : 'Non'</td>
            <td><?= DateFr::estValide(29, 02, 2021) ? 'Oui' : 'Non'; ?> </td>
        </tr>
        <tr>
            <td>
                L'année est-elle bissextile ?
            </td>
            <td>
                DateFr::estBissextile($annee) ? 'Oui' : 'Non'
            </td>
            <td>
                <?php
                for ($annee = 2023; $annee <= 2030; $annee++) {
                    echo "$annee : " . (DateFr::estBissextile($annee) ? 'Oui' : 'Non');
                    echo "<br>";
                }
                ?>
            </td>
        </tr>
        <tr>
            <td>
                La date courante correspond-elle à un jour férié ?
            </td>
            <td>
                $dateCourante.estFerie() ? 'Oui' : 'Non'
            </td>
            <td>
                <?=
                $dateCourante->estFerie() ? 'Oui' : 'Non';
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Le premier janvier est-il un jour férié ?
            </td>
            <td>
                $dateDebut.estFerie() ? 'Oui' : 'Non'
            </td>
            <td>
                <?=
                $dateDebut->estFerie() ? 'Oui' : 'Non';
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Quel est le nom de ce jour férié
            </td>
            <td>
                $dateDebut->getNomJourFerie()
            </td>
            <td>
                <?=
                $dateDebut->getNomJourFerie();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Dimanche de Pâques pour cette année
            </td>
            <td>
                DateFr::getPaques($dateCourante->getAnnee())->toFormatLong()
            </td>
            <td>
                <?=
                DateFr::getPaques($dateCourante->getAnnee())->toFormatLong()
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Dimanche de Pâques pour l'année prochaine
            </td>
            <td>
                DateFr::getPaques($dateCourante->getAnnee()+ 1)->toFormatLong()
            </td>
            <td>
                <?=
                DateFr::getPaques($dateCourante->getAnnee() + 1)->toFormatLong()
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Aujourd'hui est-il d'un jour ouvrable ?
            </td>
            <td>
                $dateCourante->estJourOuvrable() ? 'Oui' : 'Non'
            </td>
            <td>
                <?=
                $dateCourante->estJourOuvrable() ? 'Oui' : 'Non'; ?>
            </td>
        </tr>
        <tr>
            <td>
                Le premier janvier est-il un jour ouvrable ?
            </td>
            <td>
                $dateDebut->estJourOuvrable() ? 'Oui' : 'Non'
            </td>
            <td>
                <?=
                $dateDebut->estJourOuvrable() ? 'Oui' : 'Non';
                ?>
            </td>
        </tr>
        <tr>
            <td>Quel est le jour ouvrable qui suit la date du jour ?</td>
            <td>
                $dateCourante->getJourOuvrableSuivant()->toFormatLong()
            </td>
            <td>
                <?=
                $dateCourante->getJourOuvrableSuivant()->toFormatLong();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Quel est le jour ouvrable qui suit le dernier jour de l'année ?
            </td>
            <td>
                $dateFin->getJourOuvrableSuivant()->toFormatLong()
            </td>
            <td>
                <?=
                $dateFin->getJourOuvrableSuivant()->toFormatLong();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Quel est le jour ouvrable qui précéde la date du jour ?
            </td>
            <td>
                $dateCourante->getJourOuvrablePrecedent()->toFormatLong()
            </td>
            <td>
                <?=
                $dateCourante->getJourOuvrablePrecedent()->toFormatLong();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Quel est le jour ouvrable qui précède le premier janvier ?
            </td>
            <td>
                $dateDebut->getJourOuvrablePrecedent()->toFormatLong()
            </td>
            <td>
                <?=
                $dateDebut->getJourOuvrablePrecedent()->toFormatLong();
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Différence en jour entre deux dates (méthode statique)
            </td>
            <td>
                DateFr::joursEntre2Dates($dateCourante, $dateFin)
            </td>
            <td>
                <?=
                DateFr::joursEntre2Dates($dateCourante, $dateFin);
                ?>
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                DateFr::joursEntre2Dates($dateDebut, $dateCourante)
            </td>
            <td>
                <?=
                DateFr::joursEntre2Dates($dateDebut, $dateCourante);
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Nombre de jours dans une année
            </td>
            <td>
                DateFr::joursDansAnnee($annee)
            </td>
            <td>
                <?php
                for ($annee = 2023; $annee <= 2030; $annee++) {
                    echo "Année : $annee : " . DateFr::joursDansAnnee($annee);
                    echo "<br>";
                }
                ?>
            </td>
        </tr>

        <tr>
            <td>
                Calendrier des jours fériés de l'année
            </td>
            <td>
<pre>
$lesJoursFeries = DateFr::getLesJoursFeries($dateCourante->getAnnee());
foreach ($lesJoursFeries as $jour) {
     echo $jour['libelle'] . " " . $jour['date']->toFormatLong()}
}</pre>
            </td>
            <td>
                <?php
                echo "<table class='table table-bordered'>";
                $lesJoursFeries = DateFr::getLesJoursFeries($dateCourante->getAnnee());
                foreach ($lesJoursFeries as $jour) {
                    echo <<<HTML
                    <tr>
                        <td>{$jour['libelle']}</td>
                        <td>{$jour['date']->toFormatLong()}</td>
                    </tr>
HTML;
                }
                echo "</table>";
                ?>
            </td>
        </tr>

        <tr>
            <td>
                Test de la méthode DateFr::joursDansMois
            </td>
            <td>
                 <pre>
$annee = 2024;
$nbJour = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
for ($mois = 1; $mois <= 12; $mois++) {
    DateFr::joursDansMois($mois, $annee) === $nbJour[$mois - 1]
}
$annee = 2021;
$nbJour = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
for ($mois = 1; $mois <= 12; $mois++) {
     DateFr::joursDansMois($mois, $annee) === $nbJour[$mois - 1]
}</pre>
            </td>
            <td>
                <?php
                $annee = 2024;
                $nbJour = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                for ($mois = 1; $mois <= 12; $mois++) {
                    $resultat = DateFr::joursDansMois($mois, $annee) === $nbJour[$mois - 1];
                    echo "($mois, $annee) :" . DateFr::joursDansMois($mois, $annee) . ": $resultat";
                    echo "<br>";
                }
                $annee = 2021;
                $nbJour = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                for ($mois = 1; $mois <= 12; $mois++) {
                    $resultat = DateFr::joursDansMois($mois, $annee) === $nbJour[$mois - 1];
                    echo "($mois, $annee) :" . DateFr::joursDansMois($mois, $annee) . ": $resultat";
                    echo "<br>";
                }
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Test de la méthode getQuantieme
            </td>
            <td>
                            <pre>
$annee = 2024;
$quantieme = [31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
for ($mois = 1; $mois <= 12; $mois++) {
    $date = new DateFr(DateFr::joursDansMois($mois, $annee), $mois, $annee);
    $date->getQuantieme() === $quantieme[$mois - 1] ? "Ok" : "Erreur";
}
$annee = 2021;
$quantieme = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
for ($mois = 1; $mois <= 12; $mois++) {
     $date = new DateFr(DateFr::joursDansMois($mois, $annee), $mois, $annee);
     $date->getQuantieme() === $quantieme[$mois - 1]
}</pre>
            </td>
            <td>
                <?php
                $annee = 2024;
                $quantieme = [31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
                for ($mois = 1; $mois <= 12; $mois++) {
                    $date = new DateFr(DateFr::joursDansMois($mois, $annee), $mois, $annee);
                    $resultat = $date->getQuantieme() === $quantieme[$mois - 1];
                    echo $date->toFormatCourt() . " = " . $date->getQuantieme() . ": $resultat<br>";
                }
                $annee = 2021;
                $quantieme = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
                for ($mois = 1; $mois <= 12; $mois++) {
                    $date = new DateFr(DateFr::joursDansMois($mois, $annee), $mois, $annee);
                    $resultat = $date->getQuantieme() === $quantieme[$mois - 1];
                    echo $date->toFormatCourt() . " = " . $date->getQuantieme() . ": $resultat<br>";
                }
                ?>
            </td>
        </tr>

        <tr>
            <td>
                Test de la méthode DateFr::jourDansAnnee
            </td>
            <td>
  <pre>
$nbJour = [366, 365, 365, 365, 366];
for ($annee = 2024; $annee <= 2024; $annee++) {
     DateFr::joursDansAnnee($annee) === $nbJour[$annee - 2024]
}</pre>
            </td>
            <td>
                <?php
                $nbJour = [366, 365, 365, 365, 366];
                for ($annee = 2024; $annee <= 2028; $annee++) {
                    $resultat = DateFr::joursDansAnnee($annee) === $nbJour[$annee - 2024];
                    echo "$annee  = " . $nbJour[$annee - 2024] . " : $resultat";
                    echo "<br>";
                }
                ?>
            </td>
        </tr>
    </table>
</div>

