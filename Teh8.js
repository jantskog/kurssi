// Tee funktio, joka saa syötteenä syntymävuoden ja suosikkinumeron. 
// Jos syntymävuosi on 1970 ja suosikkinumero 77, niin palautetaan teksti: 
// ”Olet onnenpekka”. Tee tehtävä yhdellä JOS (IF) lauseella.

let args = process.argv
//console.log(args)
let svuosi = parseInt(args[2])
let snumero = parseInt(args[3])

const tehtKasi = (svuosi,snumero) => {

    if (svuosi === 1970 && snumero === 77) {
        console.log("Olet onnenpekka")
    }
}
tehtKasi(svuosi,snumero)