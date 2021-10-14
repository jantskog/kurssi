//Rakennusfirma aikoo tilata 50 kpl erikokoisia betonielementtejä monumentin pystytystä varten. 
//Arkkitehdin oikkujen mukaan tilattavien elementtien on oltava eri kokoisia. 
//Elementit ovat sellaisia, että pienin elementti on kooltaan 0,3 m x 0,5 m x 0,5 m (pituus, leveys, korkeus). 
//Seuraava elementti on aina 2% pidempi, 3% leveämpi ja 1.5% korkeampi kuin edellinen elementti. 
//Betonielementtejä kuljetetaan rakennuspaikalle kuorma-autolla. 
//Kuorma-auto voi kuljettaa enintään 10500 kg kuormaa. 
//Kun tiedetään, että betonin tiheys on 2,5 kg/dm3, kuinka monta kertaa kuorma-auto joutuu ajamaan 
//rakennuspaikalle.
//Ratkaise ongelma laatimasi funktion/ohjelman avulla. 
//Ohjelmassa ei saa käyttää valmiita potenssiinkorotusfunktioita. 
const tehtKaksKol = (a) => {
    let pituus = 3
    let leveys = 5
    let korkeus = 5
    let paino = 0
    let kivilkm = 0
    let rekka = 1
    let kivenPaino = 0
    let pienin = pituus*leveys*korkeus
    let pieninPaino = pienin*2.5

    //console.log("Pienin "+pieninPaino)
    paino = pieninPaino
    kivilkm = 1
    kivimRekka = 1
    do{
        pituus = pituus + (2/100)*pituus
        leveys = leveys + (3/100)*leveys
        korkeus = korkeus + (1.5/100)*korkeus
        kivenPaino = pituus*leveys*korkeus*2.5
        paino = paino + pituus*leveys*korkeus*2.5
        //console.log("Paino : "+paino+" kivilkm :"+kivilkm+" kiven paino : "+kivenPaino)
        if (paino > 10500 || kivilkm > 50) {
            //console.log("Rekka täynnä, kiviä "+kivimRekka)
            rekka = rekka + 1
            paino = kivenPaino
            kivimRekka = 0
        }
        kivilkm = kivilkm + 1
        kivimRekka = kivimRekka + 1

    } while (kivilkm <= 50)
    console.log("Rekka ajaa rakennuspaikalle "+rekka+" kertaa")
}
tehtKaksKol()
