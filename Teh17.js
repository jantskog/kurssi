//Kirjoita funktio, joka saa syötteenä vuosiluvun ja palauttaa merkkijonon “on” tai “ei” sen mukaan 
//onko vuosi karkausvuosi.
//Karkausvuosia ovat pääsääntöisesti 4:llä jaolliset vuosiluvut. 
//Vuosi ei kuitenkaan ole karkausvuosi, jos vuosiluku on jaollinen 100:lla. 
//Mutta, jos vuosiluku on jaollinen 400:lla, vuosi on aina karkausvuosi.
//Ohje: Vuodet  1996 ja 2000 ovat karkausvuosia, vuodet 1800 ja 1997 eivät. 
//Jakojäännösoperaattori on %.

let args = process.argv
let vuosi = parseInt(args[2])

const tehtSeiskatoista = (a) => {
    let teksti=""
    
    if(a % 400 == 0) {
        console.log("on")
        return
    }
    if((a % 4 == 0) && (a % 100 != 0)) {
        console.log("on")
    } else {
        console.log("ei")
    }
}
tehtSeiskatoista(vuosi)