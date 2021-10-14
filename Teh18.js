// Tee funktio, joka saa syötteenä luvun. Mikäli syöte ei ole 1 funktio palauttaa ” Syöte ei ole 1” .  

let args = process.argv
let syote = parseInt(args[2])

const tehtKahdeksantoista = (a) => {
    let teksti=""
    
    if(a !== 1) {
        console.log("Syöte ei ole 1")
    }

}
tehtKahdeksantoista(syote)