//Muuta seuraavan pseudokoodin mukainen ohjelma funktioksi funktio. Keksi itse funktion parametrit.
//ALGORITMI
//	INPUT ”anna litrat”, L
//	IF ( L >0 ) THEN    
//( JOS (L>0) NIIN)
//			INPUT “anna kilometrit”,K
//			IF ( K > 0 ) THEN
//				sadalla = L * 100 / K
//				OUTPUT sadalla
//			ELSE
//				OUTPUT ”virhesyöttö”
//			END IF
//		ELSE 
//			OUTPUT ”virhesyöttö”
//END IF
//END ALGORITMI
const tehtKakskyt = () => {
    const prompt = require('prompt-sync')()
    const litrat = prompt('Anna litrat ? ')
    if (litrat > 0) { 
        let sadalla = 0;
        const kilometrit = prompt('Anna kilometrit ? ')
        if (kilometrit > 0){
            sadalla = (litrat*100)/kilometrit
            console.log("Kulutus sadalla: "+sadalla.toFixed(2))
        } else {
            console.log("Virhesyöttö (>0): "+kilometrit)
        }
    } else {
        console.log("Virhesyöttö (>0): "+litrat)
    }
}
tehtKakskyt()
