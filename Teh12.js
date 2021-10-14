//Tee funktio, joka palauttaa parilliset luvut väliltä 0-100.
//Tee tehtävä käyttäen for-rakennetta tai reduce-funktiota.  

const tehtKakstoista = () => {
    var arr = []
    
    for (let i=0; i<=100; i++) { 
        
        if(i % 2 == 0) {
            arr.push(i)
        }
        
        } 
        console.log("Parilliset : "+arr)   
}

tehtKakstoista()
