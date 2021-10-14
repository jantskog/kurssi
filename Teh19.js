//Muuta seuraavan pseudokoodin mukainen ohjelma funktioksi. Keksi itse funktion parametrit.
//ALGORITMI
//	INPUT “anna asteikko”, asteikko
//	IF ( asteikko = ”C”) OR (asteikko=”c”) OR 
//	     (asteikko = ”F” ) OR (asteikko=”f”) THEN
//		INPUT ”anna lukema”, lukema
//		IF (lukema <=100  AND lukema > -101) THEN
//IF (asteikko=”C”) OR (asteikko = ”c”) THEN
//				lukema = 9/5*lukema + 32
//ELSE
//	lukema =5/9 *(lukema –32)
//			END IF
//			OUTPUT lukema
//		ELSE
//		 	OUTPUT ”lukema virheellinen”
//		END IF
//	ELSE
//	       OUTPUT ”asteikko tuntematon”
//END IF
//END ALGORITMI
const tehtYsitoista = () => {
    const prompt = require('prompt-sync')()
    const asteikko = prompt('Anna lämpötila-asteikko (C tai F) ? ')
    if (asteikko == 'C' || asteikko == 'c' || asteikko == 'F' || asteikko == 'f') { 
        let fAste = 0;
        let cAste = 0;
        const luku = prompt('Anna lämpötila lukema ? ')
        if (luku <=100 && luku > -101){
            if (asteikko == 'C' || asteikko == 'c') {
                fAste = (9/5)*luku+32
                console.log("Lämpötila Fahrenheiteina: "+fAste.toFixed(2))
            } else {
                cAste = (5/9)*luku-32
                console.log("Lämpötila Celsiusasteina: "+cAste.toFixed(2))
            }
        } else {
            console.log("Lukema virheellinen (-101 <-> 100): "+luku)
        }
    } else {
        console.log("Asteikko tuntematon (C tai F): "+luku)
    }
}
tehtYsitoista()
