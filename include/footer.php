<span id="copyright"></span> |
<a id="lienMentions" href="#" data-bs-toggle="modal" data-bs-target="#modalMentions">
    Mentions légales
</a> |

<!-- Modal pour les mentions légales-->
<div class="modal fade" id="modalMentions" tabindex="-1" aria-labelledby="modalMentionsLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header d-flex justify-content-between align-items-center">
                <!-- Titre aligné à gauche -->
                <h5 class="modal-title mb-0" id="modalMentionsLabel">Mentions légales</h5>
                <!-- Bouton de fermeture aligné à droite -->
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
            </div>
            <div id='mentions' class="modal-body"></div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
        </div>
    </div>
</div>

<script>

    // alimentation dynamique du pied de page

    // appel ajax pour récupérer le contenu des mentions légales stockées dans le fichier mentions.html

    fetch('/data/mentions.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('mentions').innerHTML = html;
        });

    const annee = new Date().getFullYear();
    const copyright = document.getElementById('copyright');
    copyright.innerHTML = `© ${annee} - Guy Verghote - Tous droits réservés`;
</script>