// Tee funktio, joka saa syötteenä painon (kg), pituuden (m) ja palauttaa painoindeksin.
// Painoindeksin avulla voidaan arvioida painoa. Painoindeksi (BMI = Body Mass Index) suhteuttaa painon ja
// pituuden, ja se voidaan laskea jakamalla paino pituuden neliöllä 
// (laskukaavassa paino ilmaistaan kiloina, pituus metreinä).
// Aikuisilla painoindeksin normaalialue on 20.0-24.9. 
// Joskus tästä painoindeksin normaalialueesta käytetään käsitettä "ihannepaino". 
// Mitä suurempi painoindeksi on, sitä suurempaan ylipainoon se viittaa

let args = process.argv
//console.log(args[2])
let paino = parseInt(args[2])
let pituus = args[3]
const tehtKuusitoista = (a,b) => {
    let teksti=""
    console.log("Paino: "+a+" Pituus: "+b)
    let pindex=a/(b*b)
    console.log("Painoindeksisi on "+pindex)
    if (pindex>25) {
        teksti = "Olet ylipainoinen."
    }
    console.log(teksti)
}
tehtKuusitoista(paino,pituus)