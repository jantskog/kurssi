// Muuta tehtävää 2 siten, että funktio palauttaa tekstin ”luku on 100” jos käyttäjä syöttää luvun 100.
let args = process.argv
//console.log(args[2])
let a = args[2]
const tehtYksi = (a) => {
    if (a>100) {
        return console.log("syötit luvun, joka on suurempi kuin 100")
    } else {
        if (a<100) {
            return console.log("syötit luvun, joka on pienempi kuin 100")
        }
    } 
    return console.log("syötit luvun 100")
}
tehtYksi(a)