function showTextBts() {
    let x = document.getElementsByClassName("textHidenBox");// retourne tous les elements portant la class textHidenBox sous forme de tableau
    let text = document.getElementById('bts');
    if (document.getElementById('bts').style.display != "block") {
        for (let i = 0; i< x.length; i++) { // on boucle sur le tableau retourner precedement par le nombre x de class trouver
            x[i].style.display = "none"; //cache tous les div de la class textHidenBox en fonction de l'index i
        }
            text.style.display = "block"; // affiche le div qui a l'id bts
    }else {
        text.style.animation = "fadeOutRight 1s";
        setTimeout(() => {
            text.style.display = "none";
            text.style.animation = "";
        },900);
    }
}

function showTextBac() {
    let text = document.getElementById('bac');
    if (document.getElementById('bac').style.display != "block") {
        let x = document.getElementsByClassName("textHidenBox");
        for (let i = 0; i< x.length; i++) {
            x[i].style.display = "none";
        }
            text.style.display = "block";
    }else {
        text.style.animation = "fadeOutRight 1s"
        setTimeout(()=> {
            text.style.display = "none"
            text.style.animation = ""
        }, 900);
    }
}

function showTextAlt() {
    let x = document.getElementsByClassName("textHidenBox");
    let text = document.getElementById('alternance');
    if (document.getElementById('alternance').style.display != "block") {
        for (let i = 0; i< x.length; i++) {
            x[i].style.display = "none";
        }
            text.style.display = "block";
    }else {
        text.style.animation = "fadeOutRight 1s"
        setTimeout(()=> {
            text.style.display = "none"
            text.style.animation = ""
        }, 900);
    }
}

function showTextCqp() {
    let x = document.getElementsByClassName("textHidenBox");
    let text = document.getElementById('cqp');
    if (document.getElementById('cqp').style.display != "block") {
        for (let i = 0; i< x.length; i++) {
            x[i].style.display = "none";
        }
            text.style.display = "block";
    }else {
        text.style.animation = "fadeOutRight 1s"
        setTimeout(()=> {
            text.style.display = "none"
            text.style.animation = ""
        }, 900);
    }
}

function showInfoPuntos() {
    let x = document.getElementsByClassName("hideInfo");
    let puntos = document.getElementById('puntos');
    if (document.getElementById('puntos').style.display != "block") { //verifie si la div caché "puntos" n'est pas visible
            for (let i = 0; i< x.length; i++) {
                x[i].style.display = "none";
            }
            puntos.style.display = "block";
    }else { 
        //si la div 'puntos' est visible alors on la cache avec une animation 
        puntos.style.animation = "fadeOut 1s";

        //fonction permettant de retarder des actions en fonction du temps definis plus bas
        setTimeout(() => {  
            puntos.style.display = "none";
            puntos.style.animation = "";
        }, 900); // temps defini pour le setTimeout
    }
}

function showInfoSite() {
    let x = document.getElementsByClassName("hideInfo");
    let site = document.getElementById('site');
    if (document.getElementById('site').style.display != "block") {
            for (let i = 0; i< x.length; i++) {
                x[i].style.display = "none";
            }
            site.style.display = "block";
    }else {
        site.style.animation = "fadeOut 1s";
        setTimeout(() => {
            site.style.display = "none";
            site.style.animation = "";
        }, 900);
    }
}

//Selectionne toutes les infos des id 
affiche = document.querySelectorAll('#logsAnimation, #logsAnimation2, #logsAnimation3, #logsAnimation4');

//observeur qui va detecter si les id sont visible ou non
observeur = new IntersectionObserver((logo) => { 
    //pour chaque element logo (div recuperer precedement grace au id) on verifie s'il est visible
    logo.forEach((logs, index) => { 
        //si l'element est visible alors on applique une animation
        if (logs.isIntersecting) { 
            setTimeout (() => {
                logs.target.classList.add("logsAnim")
            },index * 600);
        }
    })
})


afficheBas = document.querySelectorAll('#logsAnimationBas, #logsAnimationBas2, #logsAnimationBas3')

observeurBas = new IntersectionObserver((logoBas) => {
    logoBas.forEach((logs, index) => {
        index = index + 4
        if (logs.isIntersecting) {
            setTimeout (() => {
                logs.target.classList.add("logsAnimBas")
            }, index * 600)
        }
    })
})


afficheTitre = document.querySelectorAll('#titrelogsAnimation, #titrelogsAnimation2, #titrelogsAnimation3, #titrelogsAnimation4, #titrelogsAnimation5')

observeurTitre = new IntersectionObserver((titre) => {
    titre.forEach((tit, index) => {
        if(tit.isIntersecting) {
            setTimeout(() => {
                tit.target.classList.add("titreLogoVisible")
            }, index * 700 + 700);
        }
    })
})


afficheTitreBas = document.querySelectorAll('#titrelogsAnimationBas, #titrelogsAnimationBas2, #titrelogsAnimationBas3')

observeurTitreBas = new IntersectionObserver((titre) => {
    titre.forEach ((tit, index) => {
        if (tit.isIntersecting) {
            index = index + 4
            setTimeout (() => {
                tit.target.classList.add("titreLogsAnimBas")
            }, index * 700)
        }
    })
})

colorNavPorpos = document.getElementById('prop')
linkColorPropos = document.getElementById('props')


observateurNavPropos = new IntersectionObserver((light) => {
    light.forEach((lum) => {
        if (lum.isIntersecting) {
            linkColorPropos.style = 'color: #FF6B35;'
        }else {
            linkColorPropos.style = ''
        }
    })
})


colorNavParcours = document.getElementById('parcou')
linkColorParcours = document.getElementById('parc')

observateurNavParcours = new IntersectionObserver((light) => {
    light.forEach((lum) => {
        if (lum.isIntersecting) {
            linkColorParcours.style = 'color: #FF6B35;'
        }else {
            linkColorParcours.style = ''
        }
    })
})

colorNavProjet = document.getElementById('proj')
linkColorProjet = document.getElementById('prodj')

observateurNavProjet = new IntersectionObserver((light) => {
    light.forEach((lum) => {
        if (lum.isIntersecting) {
            linkColorProjet.style = 'color: #FF6B35;'
        }else {
            linkColorProjet.style = ''
        }
    })
})

colorNavAccueil = document.getElementById('ac')
linkColorAccueil = document.getElementById('acc')

observateurNavAccueil = new IntersectionObserver((light) => {
    light.forEach((lum) => {
        if (lum.isIntersecting) {
            linkColorAccueil.style = 'color: #FF6B35;'
        }else {
            linkColorAccueil.style = ''
        }
    })
})

colorNavVeille = document.getElementById('veil')
linkColorVeille = document.getElementById('veille')


observateurNavVeille = new IntersectionObserver((light) => {
    light.forEach((lum) => {
        if (lum.isIntersecting) {
            linkColorVeille.style = 'color: #FF6B35;'
        }else {
            linkColorVeille.style = ''
        }
    })
})


colorNavContact = document.getElementById('contacter')
linkColorNavContact = document.getElementById('contact')

observateurContact = new IntersectionObserver((light) => {
    light.forEach((lum) => {
        if (lum.isIntersecting) {
            linkColorNavContact.style = 'color: #FF6B35;'
        }else {
            linkColorNavContact.style = ''
        }
    })
})

//observe chaque changement (apparition à l'ecran dans ce cas) pour chaque id
observateurContact.observe(colorNavContact);
observateurNavVeille.observe(colorNavVeille);
observateurNavAccueil.observe(colorNavAccueil);
observateurNavProjet.observe(colorNavProjet);
observateurNavParcours.observe(colorNavParcours);
observateurNavPropos.observe(colorNavPorpos);
afficheTitreBas.forEach((e) => observeurTitreBas.observe(e));
afficheBas.forEach((e) => observeurBas.observe(e));
afficheTitre.forEach((e) => observeurTitre.observe(e));
affiche.forEach((e) => observeur.observe(e));