<div id='zone' class="border m-1">
    <table class="table table-bordered">
        <tr>
            <td>
                Paramètres régionaux en français
            </td>
            <td>
                setlocale(LC_TIME, 'fr_FR.UTF-8');
                <br>ou<br>
                $format = new IntlDateFormatter('fr_FR',IntlDateFormatter::FULL,IntlDateFormatter::NONE);
            </td>
            <td>
                <?php
                setlocale(LC_TIME, 'fr_FR.UTF-8');
                $format = new IntlDateFormatter('fr_FR', IntlDateFormatter::FULL, IntlDateFormatter::NONE);
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Date courante
            </td>
            <td>
                $dateCourante = new DateTime();
                <br>
                echo $dateCourante->format("d/m/Y");
            </td>
            <td>
                <?php
                $dateCourante = new DateTime();
                echo $dateCourante->format("d/m/Y");
                ?>
            </td>
        </tr>

        <tr>
            <td>
                Création à partir des trois paramètres jour mois année
            </td>
            <td>
                $date = new DateTime();
                <br>
                $date->setDate($annee, $mois, $jour);
            </td>
            <td>
                <?php
                $jour = 1;
                $mois = 1;
                $annee = 2024;
                $date = new DateTime();
                $date->setDate($annee, $mois, $jour);
                echo $date->format('d/m/Y');
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Création à partir de la chaine $string = "2024-02-28"
            </td>
            <td>
                $date = new DateTime($string);
            <td>
                <?php
                $string = "2024-02-28";
                $date = new DateTime($string);
                echo $date->format('d/m/Y');
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Création à partir de la chaîne $string = "28/02/2024"
            </td>
            <td>
                $date = DateTime::createFromFormat('d/m/Y', $string);
            </td>
            <td>
                <?php
                $string = "28/02/2024";
                $date = DateTime::createFromFormat('d/m/Y', $string);
                echo $date->format('d/m/Y');
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Date courante au format long
            </td>
            <td>

                echo $format->format($dateCourante);
            </td>
            <td>
                <?php
                echo $dateCourante->format('l d F Y');
                // $dateCourante->format('D d F Y');

                setlocale(LC_TIME, 'fr_FR.UTF-8', 'fra'); // Définir la locale en français

                $date = new DateTime();
                echo $date->format('l d F Y \à H:i');

                ?>
            </td>
        </tr>
        <tr>
            <td>
                Date courante au format long
            </td>
            <td>
                $format->setPattern('EEEE dd MMMM YYYY');
                <br>
                echo $format->format($dateCourante);
            </td>
            <td>
                <?php
                $format->setPattern('EEEE dd MMMM YYYY');
                echo $format->format($dateCourante);
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Récupérer le jour
            </td>
            <td>
                $dateCourante->format('d');
            </td>
            <td>
                <?=
                $dateCourante->format('d');
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Jour en lettre
            </td>
            <td>
                $format->setPattern('EEEE');
                <br>
                echo $format->format($dateCourante);
            </td>
            <td>
                <?php
                $format->setPattern('EEEE');
                echo $format->format($dateCourante);
                // $dateCourante->format('l')
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Mois en chiffre
            </td>
            <td>
                $dateCourante->format('m')
            </td>
            <td>
                <?=
                $dateCourante->format('m')
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Mois en lettre
            </td>
            <td>
                $format->setPattern('MMMM');
                <br>
                echo $format->format($dateCourante);
            </td>
            <td>
                <?php
                $format->setPattern('MMMM');
                echo $format->format($dateCourante);
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Année
            </td>
            <td>
                $dateCourante->format('Y')
            </td>
            <td>
                <?=
                $dateCourante->format('Y')
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Quantieme (n° jour dans l'année)
            </td>
            <td>
                $dateCourante->format('z')
            </td>
            <td>
                <?=
                $dateCourante->format('z')
                ?>
            </td>
        </tr>
        <tr>
        <tr>
            <td>
                Jour dans la semaine (1 lundi)
            </td>
            <td>
                dateCourante->format('N')
            </td>
            <td>
                <?=
                $dateCourante->format('N');
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Numéro de la semaine
            </td>
            <td>
                $dateCourante->format('W')
            </td>
            <td>
                <?=
                $dateCourante->format('W')
                ?>
            </td>
        </tr>

        <tr>
            <td>
                Premier jour de l'année
            </td>
            <td>
                new DateTime('first day of January');
            </td>
            <td>
                <?php
                $dateDebut = new DateTime();
                $dateDebut->setDate($dateDebut->format('Y'), 1, 1);

                $dateDebut = new DateTime('first day of January');

                echo $dateDebut->format('d/m/Y');
                ?>
            </td>
        </tr>
        <tr>
            <td>Dernier jour de l'année</td>
            <td>
                new DateTime('last day of December ');
            </td>
            <td>
                <?php
                $dateFin = new DateTime();
                $dateFin->setDate($dateFin->format('Y'), 12, 31);

                $dateFin = new DateTime('last day of December ');
                echo $dateFin->format('d/m/Y');
                ?>
            </td>
        </tr>

        <tr>
            <td>
                Dernier jour du mois
            </td>
            <td>
                $date = new DateTime('last day of this month');
            </td>
            <td>
                <?php
                $date = new DateTime('last day of this month');
                echo $date->format('d/m/Y');
                ?>
            </td>
        </tr>

        <tr>
            <td>
                Nombre de jours jusqu'au 31/12
            </td>
            <td>
                $dateCourante->diff($dateFin)->format('%a') + 1;
            </td>
            <td>
                <?=
                $dateCourante->diff($dateFin)->format('%a') + 1;
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Nombre de jours depuis le premier janvier
            </td>
            <td>
                $dateDebut->diff($dateCourante)->format('%a') + 1;
            </td>
            <td>
                <?=
                $dateDebut->diff($dateCourante)->format('%a') + 1;
                ?>
            </td>
        </tr>

        <tr>
            <td>Nombre de jours dans l'année</td>
            <td>
                $dateDebut->diff($dateFin)->format('%a') + 1;
            </td>
            <td>
                <?=
                $dateDebut->diff($dateFin)->format('%a') + 1;
                ?>
            </td>
        </tr>

        <tr>
            <td>
                Hier
            </td>
            <td>
                $dateCourante->sub(new DateInterval('P1D'))->format('d/m/Y');
                <br>
                $hier = new DateTime("yesterday"); echo $hier->format('d/m/Y');
                <br>
                $hier = new DateTime();
                $hier->modify('- 1 day');
                echo $hier->format('d/m/Y');
            </td>
            <td>
                <?php
                echo $dateCourante->sub(new DateInterval('P1D'))->format('d/m/Y');
                $hier = new DateTime("last day");
                echo "<br>";
                echo $hier->format('d/m/Y');

                $hier = new DateTime();
                $hier->modify('- 1 day');
                echo "<br>";
                echo $hier->format('d/m/Y');
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Demain
            </td>
            <td>
                $dateCourante->add(new DateInterval('P1D'))->format('d/m/Y');
                <br>
                new DateTime('next day') ou tomorrow
                <br>
                $demain = new DateTime();
                $demain->modify('+ 1 day');
                echo $demain->format('d/m/Y');
            </td>
            <td>
                <?php
                echo $dateCourante->add(new DateInterval('P1D'))->format('d/m/Y');
                $demain = new DateTime('next day');
                echo "<br>";
                echo $demain->format('d/m/Y');

                $demain = new DateTime();
                $demain->modify('+ 1 day');
                echo "<br>";
                echo $demain->format('d/m/Y');
                ?>
            </td>
        </tr>
        <tr>
            <td>
                15 jours avant
            </td>
            <td>
                $dateCourante->sub(new DateInterval('P15D'))->format('d/m/Y');
            </td>
            <td>
                <?=
                $dateCourante->sub(new DateInterval('P15D'))->format('d/m/Y');
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Dans 15 jours
            </td>
            <td>
                $dateCourante->add(new DateInterval('P15D'))->format('d/m/Y');
            </td>
            <td>
                <?=
                $dateCourante->add(new DateInterval('P15D'))->format('d/m/Y');
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Un an avant
            </td>
            <td>
                $dateCourante->sub(new DateInterval('P1Y'))->format('d/m/Y');
            </td>
            <td>
                <?=
                $dateCourante->sub(new DateInterval('P1Y'))->format('d/m/Y');
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Dans un an
            </td>
            <td>
                $dateCourante->add(new DateInterval('P1Y'))->format('d/m/Y');
            </td>
            <td>
                <?=
                $dateCourante->add(new DateInterval('P1Y'))->format('d/m/Y');
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Le vendredi en 8
            </td>
            <td>
                $date = new DateTime('next friday + 7 days');
                echo $date->format('d/m/Y');
                <br>
                $date = new DateTime();
                $date->modify('next friday + 7 days');
                echo $date->format('d/m/Y');

            </td>
            <td>
                <?php
                $date = new DateTime('next friday + 7 days');
                echo $date->format('d/m/Y');
                echo '<br>';
                $date = new DateTime();
                echo $date->modify('next friday + 7 days')->format('d/m/Y');
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Ajouter 1 mois puis 2 jusqu'à 12 en partant toujours du 31/01/2024
            </td>
            <td>
                <pre>
for ($i = 1; $i <= 12; $i++) {
    $date = DateTime::createFromFormat('d/m/Y', '31/01/2024');
    $date->add(new DateInterval('P' . $i . 'M'));
    echo $date->format('d/m/Y');
}</pre>
            </td>
            <td>
                <?php
                for ($i = 1; $i <= 12; $i++) {
                    $date = DateTime::createFromFormat('d/m/Y', '31/01/2024');
                    $date->add(new DateInterval('P' . $i . 'M'));
                    echo $date->format('d/m/Y');
                    echo '<br>';
                }
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Retirer 1 mois puis 2 jusqu'à 12 en partant toujours du 31/01/2024
            </td>
            <td>
                <pre>
for ($i = 1;  $i <= 12; $i++) {
    $date = DateTime::createFromFormat('d/m/Y', '31/01/2024');
    $date->add(new DateInterval('P' . $i . 'M'));
    echo $date->format('d/m/Y');
}</pre>
            </td>
            <td>
                <?php
                for ($i = 1; $i <= 12; $i++) {
                    $date = DateTime::createFromFormat('d/m/Y', '31/01/2024');
                    $date->add(new DateInterval('P' . $i . 'M'));
                    echo $date->format('d/m/Y');
                    echo '<br>';
                }
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Ajouter une année puis 2 jusqu'à 4 en partant du 29/02/2024
            </td>
            <td>
                <pre>
for ($i = 1; $i <= 4; $i++) {
   $date = DateTime::createFromFormat('d/m/Y', '29/02/2024');
   $date->add(new DateInterval('P' . $i . 'Y'));
   echo $date->format('d/m/Y');
}</pre>
            </td>
            <td>
                <?php
                for ($i = 1; $i <= 4; $i++) {
                    $date = DateTime::createFromFormat('d/m/Y', '29/02/2024');
                    $date->add(new DateInterval('P' . $i . 'Y'));
                    echo $date->format('d/m/Y');
                    echo "<br>";
                }
                ?>
            </td>
        </tr>
        <tr>
            <td>
                Retirer une année puis 2 jusqu'à 4 en partant du 29/02/2024
            </td>
            <td>
                <pre>
for ($i = 1; $i <= 4; $i++) {
    $date = DateTime::createFromFormat('d/m/Y', '29/02/2024');
    $date->sub(new DateInterval('P' . $i . 'Y'));
    echo $date->format('d/m/Y');
}</pre>
            </td>
            <td>
                <?php
                for ($i = 1; $i <= 4; $i++) {
                    $date = DateTime::createFromFormat('d/m/Y', '29/02/2024');
                    $date->sub(new DateInterval('P' . $i . 'Y'));
                    echo $date->format('d/m/Y');
                    echo "<br>";
                }
                ?>
            </td>
        </tr>
    </table>
</div>
