"use strict";

// Version 2025.2
// Date version : 20/06/2025

// ------------------------------------------------------------
// Fonction de calcul portant sur le temps et la distance
// ------------------------------------------------------------

/**
 * Convertit en temps hh:mm:sss en nombre de secondes
 * @param {string} temps
 * @return {number}
 */
export function getNbSeconde(temps) {
    let heure = Number(temps.substring(0, 2));
    let seconde = Number(temps.substring(6, 8));
    let minute = Number(temps.substring(3, 5));
    return heure * 3600 + minute * 60 + seconde;
}

/**
 * Retourne la vitesse en km/h
 * @param {int} nbSeconde
 * @param {int} distance en km
 * @return {number}
 */
export function getVitesse(nbSeconde, distance) {
    // vitesse = 3600 * d / nbSeconde
    return 3600 * (distance) / nbSeconde;
}

/**
 * Retourne l'allure au km en mm:ss
 * formule de l'allure : Math.floor(3600 / vitesse)
 * cependant on veut l'exprimer en minutes et en secondes
 * @param {Number} nbSeconde
 * @param {int}distance
 * @return {string}
 */
export function getAllureEnMnSe(nbSeconde, distance) {
    // décomposition
    let tKm = Math.floor(nbSeconde / distance);
    let mn = Math.floor(tKm / 60);
    let se = tKm - mn * 60;
    let seT = '0' + se;
    return mn.toString() + ':' + seT.slice(-2);
}
