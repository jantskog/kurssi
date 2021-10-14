// Tee funktio, jonka parametreina ovat tunnit, minuutit ja sekunnit ja se palauttaa 
// kokonaisajan sekunteina. Esimerkiksi, jos argumenteiksi annetaan 0 tunneiksi, 
// 1 minuuteiksi 1 ja 1 sekunneiksi, palauttaa funktio 61 sekuntia. 
// Kokeile ohjelmaasi myös seuraavalla syötteellä: tunnit=20, minuutit=2 ja sekunnit=300. 
// Jos ohjelmasi ei toimi, korjaa se.
// Tee funktio, jonka parametrina on valuutan määrä markoissa ja se palauttaa määrän euroissa.  
// Tee funktio, jonka parametrina on valuutan määrä euroissa ja se palauttaa määrän markoissa.  


const tehtNelja = (a,b,c) => {

let tunnit = a*3600 
let minuutit = b*60
let kokonaisAika = tunnit+minuutit+c

console.log("Kokonaisaika sekunteina : "+kokonaisAika)
}

const valuuttaMuunnosMarEur = (a) => {
    // Tilastokeskus: Vuonna 2002 euroon siirtymisen yhteydessä markat jaettiin euroiksi vakioluvulla, 
    // jonka suuruus on 5,94573.
    let kerroin = 5.94573
    let markatEuroiksi = a/kerroin

    console.log("Valuutta muunnos : markat "+a+" euroina "+markatEuroiksi.toFixed(2))
}

const valuuttaMuunnosEurMar = (a) => {
    // Tilastokeskus: Vuonna 2002 euroon siirtymisen yhteydessä markat jaettiin euroiksi vakioluvulla, 
    // jonka suuruus on 5,94573.
    let kerroin = 5.94573
    let eurotMarkoiksi = a*kerroin

    console.log("Valuutta muunnos : eurot "+a+" markkoina "+eurotMarkoiksi.toFixed(2))
}

tehtNelja(0,1,1)
tehtNelja(1,2,3)
tehtNelja(20,2,300)
valuuttaMuunnosMarEur(100)
valuuttaMuunnosEurMar(100)


