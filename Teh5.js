// Tee funktio, jonka parametrit ovat viikonpäivän numeron ja joka palauttaa viikonpäivän, 
// esim. jos argumentti on 1, palautetaan “maanantai”.

let args = process.argv
//console.log(args)
let a = parseInt(args[2]) 
const tehtViisi = (a) => { 
    if (a>=1 && a<=7) {
    let d
    switch (a) {
        case 1:
          d = "Maanantai"
          break
        case 2:
           d = "Tiistai"
          break
        case 3:
          d = "Keskiviikko"
          break
        case 4:
          d = "Torstai"
          break
        case 5:
          d = "Perjantai"
          break
        case 6:
          d = "Lauantai"
          break
        case 7:
          d = "Sunnuntai"
      }

    return console.log("Päivä on "+d)
    } else { 
        return console.log("Ei ole viikonpäivän järjestysnumero.")
    }
}
tehtViisi(a)