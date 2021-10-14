//Tee funktio, joka saa syötteenä iän ja palauttaa seuraavat tekstit riippuen iästä:
//	1-17 	“olet alaikäinen”
//	18-33 	“olet nuori”
//  34-50 	“olet keski-ikäinen”
//  51-  	“olet vanha”

let args = process.argv
//console.log(args[2])
let a = parseInt(args[2])
const tehtKuusi = (a) => {
    let teksti=""
    if (a>=1 && a<=17) {teksti = "olet alaikäinen"}
    if (a>=18 && a<=33) {teksti = "olet nuori"}
    if (a>=34 && a<=50) {teksti = "olet keski-ikäinen"}
    if (a>=51) {teksti = "olet vanha"}
    console.log(teksti)
}
tehtKuusi(a)