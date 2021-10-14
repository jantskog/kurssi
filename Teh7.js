// Tee funktio, joka saa syötteenä etunimen, sukunimen ja iän. 
// Funktio palauttaa merkkijonon muodossa ”Terve etunimi sukunimi, olet ikä vuotias”.

let args = process.argv
console.log(args)
let etu = args[2]
let suku = args[3]
let a = args[4]
const tehtSeiska = (etu,suku,a) => {

    console.log("Terve "+etu+" "+suku+", olet "+a+" vuotias.")
}
tehtSeiska(etu,suku,a)