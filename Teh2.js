// Muuta tehtävää 1 siten, että se palauttaa ”syötit luvun joka on pienempi kuin 100” tapauksessa, 
// jossa käyttäjä argumentin arvo on pienempi kuin sata.
let args = process.argv
//console.log(args[2])
let a = args[2]
const tehtYksi = (a) => {
    if (a>100) {
        console.log("syötit luvun, joka on suurempi kuin 100")
        return
    } else {
        if (a<100) {
            console.log("syötit luvun, joka on pienempi kuin 100")
            return
        }
    } 
    console.log("")
}
tehtYksi(a)