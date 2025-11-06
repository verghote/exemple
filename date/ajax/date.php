<?php
// Configuration de la locale pour les fonctions Intl
setlocale(LC_TIME, 'fr_FR.UTF-8');
putenv('LC_ALL=fr_FR.UTF-8');

// Fonction pour formater une date avec IntlDateFormatter
function formatDateLocale(DateTime $date, string $pattern = "EEEE dd MMMM yyyy"): string {
    $formatter = new IntlDateFormatter(
        'fr_FR',
        IntlDateFormatter::FULL,
        IntlDateFormatter::NONE,
        $date->getTimezone()->getName(),
        IntlDateFormatter::GREGORIAN,
        $pattern
    );
    return $formatter->format($date);
}

// Fonction de ligne de tableau HTML
function ligne(string $description, string $code, $valeur): string {
    return "<tr><td>{$description}</td><td>{$code}</td><td>{$valeur}</td></tr>";
}

// Date actuelle
$now = new DateTime('now');

// Début du tableau
echo "<table class='table table-bordered'>";
echo "<colgroup><col><col style='width:400px'><col></colgroup>";
echo "<style>td:nth-child(2){white-space: pre-wrap;}</style>";

// 1. Date du jour
echo ligne("Date du jour", "date('d/m/Y')", date("d/m/Y"));

// 2. Création avec mktime
$timestamp = mktime(0, 0, 0, 1, 1, 2024);
echo ligne("Création avec mktime", "mktime(0, 0, 0, 1, 1, 2024)", date("d/m/Y", $timestamp));

// 3. Conversion chaîne US
echo ligne("Conversion date US", "strtotime('2024-02-28')", date("d/m/Y", strtotime("2024-02-28")));

// 4. Conversion chaîne FR
$chaineFr = "28/02/2024";
[$jour, $mois, $annee] = explode('/', $chaineFr);
$dateFr = "{$annee}-{$mois}-{$jour}";
echo ligne("Conversion date FR", "\$s = '28/02/2024' → explode → strtotime", date("d/m/Y", strtotime($dateFr)));

// 5. Format long avec Intl
echo ligne("Format long (Intl)", "IntlDateFormatter", formatDateLocale($now));

// 6. Jour / mois / année (manuellement)
echo ligne("Jour", "date('d')", date("d"));
echo ligne("Jour (texte)", "formatDateLocale(..., 'EEEE')", formatDateLocale($now, "EEEE"));
echo ligne("Mois", "date('m')", date("m"));
echo ligne("Mois (texte)", "formatDateLocale(..., 'MMMM')", formatDateLocale($now, "MMMM"));
echo ligne("Année", "date('Y')", date("Y"));

// 7. Quantième dans l'année
echo ligne("Quantième du jour", "date('z') + 1", date('z') + 1);

// 8. Numéro du jour dans la semaine
echo ligne("Jour dans la semaine (1 = Lundi)", "date('N')", date('N'));

// 9. Premier et dernier jour de l’année
echo ligne("1er janvier", "date('d/m/Y', strtotime('first day of January'))", date('d/m/Y', strtotime('first day of January')));
echo ligne("31 décembre", "date('d/m/Y', strtotime('last day of December'))", date('d/m/Y', strtotime('last day of December')));

// 10. Premier et dernier jour du mois courant
echo ligne("1er jour du mois", "date('d/m/Y', strtotime('first day of this month'))", date('d/m/Y', strtotime('first day of this month')));
echo ligne("Dernier jour du mois", "date('d/m/Y', strtotime('last day of this month'))", date('d/m/Y', strtotime('last day of this month')));

// 11. Nombre de jours jusqu’à fin d’année
$finAnnee = new DateTime('last day of December');
$joursRestants = $now->diff($finAnnee)->days;
echo ligne("Jours jusqu’à fin d’année", "\$now->diff(\$finAnnee)->days", $joursRestants);

// 12. Nombre de jours depuis début d’année
$debutAnnee = new DateTime('first day of January');
$joursEcoules = $debutAnnee->diff($now)->days + 1;
echo ligne("Jours depuis début d’année", "\$debutAnnee->diff(\$now)->days + 1", $joursEcoules);

// 13. Nombre de jours dans l’année
echo ligne("Nombre de jours dans l’année", "date('z', strtotime('last day of December')) + 1", date('z', strtotime('last day of December')) + 1);

// 14. Hier, demain, +15j, +1 an
echo ligne("Hier", "date('d/m/Y', strtotime('yesterday'))", date('d/m/Y', strtotime('yesterday')));
echo ligne("Demain", "date('d/m/Y', strtotime('tomorrow'))", date('d/m/Y', strtotime('tomorrow')));
echo ligne("+15 jours", "date('d/m/Y', strtotime('+15 days'))", date('d/m/Y', strtotime('+15 days')));
echo ligne("+1 an", "date('d/m/Y', strtotime('+1 year'))", date('d/m/Y', strtotime('+1 year')));

// 15. "Vendredi en 8"
echo ligne("Vendredi en 8", "date('d/m/Y', strtotime('next friday + 7 days'))", date('d/m/Y', strtotime('next friday + 7 days')));

// 16. Vérification dates valides
echo ligne("29/02/2024 valide ?", "checkdate(2, 29, 2024)", checkdate(2, 29, 2024) ? 'oui' : 'non');
echo ligne("29/02/2021 valide ?", "checkdate(2, 29, 2021)", checkdate(2, 29, 2021) ? 'oui' : 'non');

// 17. Boucle des 12 prochains mois depuis une date fixe
$date = new DateTime('2024-01-31');
$valeur = '';
for ($i = 1; $i <= 12; $i++) {
    $mois = (clone $date)->modify("+{$i} months");
    $valeur .= $mois->format('d/m/Y') . "\n";
}
echo ligne("31 janvier +1 à +12 mois", "DateTime::modify('+n months')", $valeur);

// Fin du tableau
echo "</table>";
