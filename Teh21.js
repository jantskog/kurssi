// Laadi funktio, joka saa syötteenä henkilön nimen. 
// Jos nimi on Pekka, palautetaan funktiosta ”Minunkin mielestäni Pekka on kiva”. 
// Sama logiikka pätee, jos syötteenä on Liisa tai Jorma. 
// Jos syötetään jotain muuta, palautetaan funktiosta ”En tunne henkilöä”. 
// Toteuta ohjelma sekä ehtolausein että switch-case rakenteen avulla.

const tehtKaksYksIf = () => {
  const prompt = require('prompt-sync')()
  const nimi = prompt('Anna nimi (If)? ')
  
  if (nimi == 'Pekka' || nimi == 'Liisa' || nimi == 'Jorma') {
    console.log("Minunkin mielestäni "+nimi+" on kiva")
  } else {
    console.log("En tunne henkilöä")
  }
}

const tehtKaksYksSwitch = () => {
    const prompt = require('prompt-sync')()
    const nimi = prompt('Anna nimi (Switch)? ')
    
    switch (nimi) {
        case "Pekka":
            console.log("Minunkin mielestäni Pekka on kiva")
          break
        case "Liisa":
            console.log("Minunkin mielestäni Liisa on kiva")
          break
        case "Jorma":
            console.log("Minunkin mielestäni Jorma on kiva")
          break
        default:
            console.log("En tunne henkilöä")
      }
}
tehtKaksYksIf()
tehtKaksYksSwitch()
