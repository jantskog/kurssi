// Tee funktio, joka palauttaa lukujen 7-131 summan.
// Tee funktio, joka saa syötteenä positiiviset luvut a ja b ja palauttaa lukuvälin summan. 
// Huomaa, että ohjelman tulee tarkistaa, että b>a. 
// Tee molemmat tehtävät käyttäen sekä for-rakennetta että reduce-funktiota.  

const tehtKymppiSumma = () => {
    //var arr = []
    let summa = 0
    for (let i=7; i<132; i++) { 
        //arr.push(i)
        summa = i+summa
    }  
    console.log("Lukujen 7-131 summa on "+summa)  
}

const tehtKymppiSum = (a,b) => {
    var arr = []
    let summa = 0
    if (b>a) {    
        for (let i=a; i<b+1; i++) { 
        arr.push(i)
        summa = i+summa
        }  

        console.log("Lukujen "+a+" ja "+b+" välisten lukujen summa on "+summa+" (For)")

        const reducer = (previousValue, currentValue) => previousValue + currentValue
        console.log("Lukujen "+a+" ja "+b+" välisten lukujen summa on "+arr.reduce(reducer)+" (Reduce)")
    } 
}
tehtKymppiSumma()
tehtKymppiSum(1,999)