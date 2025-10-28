<?php

class FichierPDF
{
    /**
     * Configuration des fichiers pdf
     */
    private const CONFIG = [
        'repertoire' => '/data/pdf',
        'extensions' => ['pdf'],
        'types' => ["application/pdf"],
        'maxSize' => 512 * 1024, // 512 Ko
        'require' => true,
        'rename' => false,
        'sansAccent' => true,
        'accept' => '.pdf',
        'label' => 'Fichier PDF à téléverser (512 Ko max)',
    ];

    private const DIR = RACINE . self::CONFIG['repertoire'];

    // ------------------------------------------------------------------------------------------------
    // Méthodes concernant les opérations de consultation
    // ------------------------------------------------------------------------------------------------

    /**
     * Renvoie les paramètres de configuration des fichiers image
     * @return array<string, mixed>
     */
    public static function getConfig(): array
    {
        return self::CONFIG;
    }

}

