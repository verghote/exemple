<?php

class FichierImage
{
    /**
     * Configuration des fichiers pdf
     */
    private const CONFIG = [
        'repertoire' => '/data/image',
        'extensions' => ["jpg", "png", "webp", "avif"] ,
        'types' => ["image/pjpeg", "image/jpeg", "x-png", "image/png", "image/webp",  "image/avif", "image/heif"],
        'maxSize' => 300 * 1024,
        'require' => true,
        'rename' => true,
        'sansAccent' => true,
        'accept' => '.jpg, .png, .webp, .avif',
        'redimensionner' => false,
        'height'=> 350,
        'width' => 350,
        'label' => 'Fichiers jpg, png, webp et avif acceptés (300 Ko max)',
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

