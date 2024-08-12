/*Debut de la partit JavaScript qui va nous permettre de créer la logique du jeu
Dans cette partit nous allons pouvoir creer des éléments et des */

/*
                                        SOMMAIRE                                            
    ligne 10 à 20 => Vie de depart et score de départ
    ligne 24 à 64 => Objet contenant les ennemis et les laser (description et capacité)


*/
// vie et score de depat

let lifeStart = "10";

let lifeCase = document.getElementsByClassName("vie-direct_nombre");

lifeCase.innerHTML = lifeStart;

console.log(typeof(lifeStart))


// objet contenant les infos du vaisseau controlé par le joueur

let monVaisseau = {
    nom: "ASTRA",
    pointDeVie: 1,
    arme1 : "LASER",
    arme2 : "PLASMA"

};

let vaisseauAdverssaireSoucoupe = {
    nom: "soucoupe",
    pointDeVie: 1,
    arme1: "LASER2"
};

let vaisseauAdverssaireChasseur = {
    nom: "chasseur",
    pointDeVie: 5,
    arme1:"LASER3"
};



// détail des laser utilisable

let laser1 = {
    nom: "LASER1",
    degats: 1,
    frequence : "1 par 0.5 seconde"
};

let laser2 = {
    nom: "LASER2",
    degats: 2,
    frequence : "1 par 0.45 seconde"
};

let laser3 = {
    nom: "LASER3",
    degats : 5,
    frequence : "1 par 0.9"
}


console.log(monVaisseau)