function propositions(msg) {

    do {
        choix = parseInt(prompt(msg))

    }


    while (isNaN(choix) || choix > 3 || choix < 1)
    return choix
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


/*niveaux de vie*/
function HealthPlayer(niveau) {
    if (niveau == 1) {

        VieChevalier = getRandomInteger(200, 250)

    } else if (niveau == 2) {

        VieChevalier = getRandomInteger(200, 250)
    } else {
        VieChevalier = getRandomInteger(150, 200)
    }
    return VieChevalier
}

function HealthDragon(niveau) {
    if (niveau == 1) {

        return VieDragon = getRandomInteger(150, 200)

    } else if (niveau == 2) {
        return VieDragon = getRandomInteger(200, 250)

    } else {
        return VieDragon = getRandomInteger(200, 250)

    }
}

/*niveau de dommages*/
function DamageOnPlayer() {
    if (jeu.niveau == 1) {
        BlessureChevalier = getRandomInteger(10, 20)

    } else if (jeu.niveau == 2) {
        BlessureChevalier = getRandomInteger(20, 30)

    } else {
        BlessureChevalier = getRandomInteger(20, 30)

    }
    return BlessureChevalier * (1 + jeu.ratioArmure)
}

function DamageOnDragon() {
    if (jeu.niveau == 1) {

        BlessureDragon = getRandomInteger(25, 30)


    } else if (jeu.niveau == 2) {

        BlessureDragon = getRandomInteger(15, 20)
    } else {
        BlessureDragon = getRandomInteger(5, 10)
    }
    return BlessureDragon * (1 + jeu.ratioEpee)
}

function Armorprotection(armure) {
    if (armure == 1) {
        return MinorationArmure = 0
    } else if (armure == 2) {
        return MinaurationArmure = -0.25
    } else {
        return MinaurationArmure = -0.5
    }
}

function DegatsEpee(epee) {
    if (epee == 1) {
        return MajorationEpee = -0.5
    }
    if (epee == 2) {
        return MajorationEpee = 0

    }
    if (epee == 3) {
        return MajorationEpee = 0.5
    }
}






/*initialisation du jeu*/
/*menu*/

var jeu = new Object()

function GameInitialization() {
    jeu.niveau = propositions("choisissez un niveau:1.Facile 2.Difficile.3")
    jeu.armure = propositions("choisissez une armure: 1.Cuivre 2.Fer 2.Magique")
    jeu.epee = propositions("choisissez une epee:1.Bois 2.Acier 3.excalibur")
    jeu.VieChevalier = HealthPlayer(jeu.niveau)
    jeu.VieDragon = HealthDragon(jeu.niveau)
    jeu.ratioArmure = Armorprotection(jeu.armure)
    jeu.ratioEpee = DegatsEpee(jeu.epee)
    console.log(jeu)
}

/*demarrage du jeu*/




function Gameloop() {
    var degat
    var i = 1

    do {
        jeu.PlayerSpeed = Math.random()
        jeu.DragonSDpeed = Math.random()

        console.log("tour" + i++)


        if (jeu.PlayerSpeed > jeu.DragonSpeed) {
            //joueur attaque
            degat = DamageOnDragon()
            jeu.VieDragon = jeu.VieDragon - degat
        } else {
            //dragon attaque
            degat = DamageOnPlayer()
            jeu.VieChevalier = jeu.VieChevalier - degat
        }
    }
    while (jeu.VieChevalier > 0 && (jeu.VieDragon > 0))
}


GameInitialization()
Gameloop()
    /*compteur*/