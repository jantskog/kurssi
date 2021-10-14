//Tee funktio, joka saa parametrina kokonaisluvun. 
//Jos luku on suurempi kuin 100, funktio palauttaa: ”syötit luvun, joka on suurempi kuin 100”. 
//Jos luku on 100 tai pienempi, palautetaan “”

const tehtYksi = (a) => {
    if (a>100) {
        console.log("syötit luvun, joka on suurempi kuin 100")
        return
    }
    console.log("")
}
tehtYksi(120)
