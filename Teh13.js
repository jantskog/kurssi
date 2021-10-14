//Tee funktio, joka palauttaa parillisten kulujen summan lukuväliltä 0-1000.
//Tee tehtävä käyttäen joko for-rakennetta tai reduce-funktiota.  

const tehtKolmetoista = () => {
    var arr = []
    let summa = 0
    for (let i=0; i<=1000; i++) { 
        
        if(i % 2 == 0) {
            summa = i+summa
        }
        
    } 
    console.log("Parillisten lukujen summa välillä 0-1000 on "+summa)   
}

tehtKolmetoista()