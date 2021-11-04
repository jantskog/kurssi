import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//import OutlinedInput from '@mui/material/OutlinedInput';
import Input from '@mui/material/Input';
import React, { useState } from 'react';
function App() {

  const [Lista1, setYksi] = useState([{etunimi:'Iisakki',ikä:20},{etunimi:'Pirjo',ikä:21},{etunimi:'Aapeli',ikä:22},{etunimi:'Arvo',ikä:24},{etunimi:'Liisa',ikä:27},{etunimi:'Taavi',ikä:29}])
  const [Lista2, setKaksi] = useState([])
  let oP = false
  let vP = false
  let vAP = false
  let oAP = false
  let dVasen = true
  let dOikea = false 
  let pAlkio = ""
  let indexi = 0
  let listalla = JSON.parse(JSON.stringify(Lista1))
  
  console.log("Lista1 :"+listalla)

  const oikeaPainettu = () =>{
    oP = true
    let vasemmanViimeinenAlkio = 0
    if ((Lista1.length > 0) && vAP) {
      console.log("Alkion  indexi "+indexi)
      vasemmanViimeinenAlkio = Lista1[indexi]
      let tulosta = JSON.stringify(vasemmanViimeinenAlkio)
      console.log("Alkio "+tulosta)
      setKaksi([...Lista2,vasemmanViimeinenAlkio])
      let removed = Lista1.splice(indexi, 1)
      console.log("Poistettu "+removed)
      setYksi([...Lista1])
    } else {
      console.log("Lista tyhjä tai alkiota ei ole painettu")
    }
  }
  const vasenPainettu = () =>{
    vP = true
    let oikeanEkaAlkio = 0
    if ((Lista2.length > 0) && oAP) {
      oikeanEkaAlkio = Lista2[indexi]
      setYksi([...Lista1,oikeanEkaAlkio])

      let removed = Lista2.splice(indexi, 1)
      console.log("Poistettu "+removed)
      setKaksi([...Lista2])
    } else {
      let ListaTyhjä = [{etunimi:"tyhjä"}]
      setKaksi([...ListaTyhjä])
      console.log("Lista2 tyhjä")
    }

  }

  const vasenAlkioPainettu = (key) =>{
    vAP = true
    pAlkio = JSON.stringify(key)
    console.log("pAlkio "+key.etunimi+" ikä "+key.ikä)
    indexi = Lista1.findIndex(obj => obj.etunimi === key.etunimi && obj.ikä === key.ikä);
    console.log("Alkio painettu "+pAlkio+" ja indexi "+indexi)
  }

  const oikeaAlkioPainettu = (key) =>{
    oAP = true
    pAlkio = JSON.stringify(key)
    console.log("pAlkio "+key.etunimi+" ikä "+key.ikä)
    indexi = Lista2.findIndex(obj => obj.etunimi === key.etunimi && obj.ikä === key.ikä);
    console.log("Alkio painettu "+pAlkio+" ja indexi "+indexi)
  }

  const sortPainettu1 = () =>{
    const sorted = Lista1.sort(function(a, b) {
      return a.etunimi.localeCompare(b.etunimi)
    });
    setYksi([...sorted])
  }

  const sortPainettu2 = () =>{
    const sorted = Lista2.sort(function(a, b) {
      return a.etunimi.localeCompare(b.etunimi)
    });
    setKaksi([...sorted])
  }
  const [input, setInput] = useState('')
  const [state, setState] = useState({value: ''})
  //handleChange = this.handleChange.bind(this);
  //this.handleSubmit = this.handleSubmit.bind(this);
  const handleChange = (event) => { 
    console.log('A name ' + event.target.value)
    let annettuKirjain = event.target.value
    let uusiLista = 0
    for (let i = 0; i < Lista1.length; i++) { 
      let teksti = Lista1[i].etunimi.charAt(0)
      if ( teksti === annettuKirjain)
      {
        let result = Lista1.find( ({ etunimi }) => (etunimi === Lista1[i].etunimi))
        uusiLista = JSON.stringify(result)
        //uusiLista.push(result)
        console.log("Res : "+uusiLista)
        setYksi([result])
        //setYksi([...uusiLista])
      }
    }  
    setState({value: event.target.value});  
  }
  const handleSubmit = (event) => {
    console.log('A name was submitted: ' + state.value)
    event.preventDefault();
  }

  const inputAnnettu = (key) =>{
    console.log(key)
    //setInput(e.target.value)
    const uusiLista = []
    if (input.length > 0 ) {
      console.log(input)
      for (let i = 0; i < Lista1.length; i++) { 
        let teksti = Lista1[i].etunimi.charAt(0)
        if ( teksti === input)
        {
          const result = Lista1.find( ({ etunimi }) => (etunimi === Lista1[i].etunimi))
          uusiLista.push(result)
          setYksi([...uusiLista])
        }
      }
    }
  }


  //      <Input onChange={kirjainAnnettu(event => setTitle(event.target.value))} />
  // <input value={input} onInput={inputAnnettu}/>
  return (
    <div class="row">
    <div class="column left" >
        <h2>Lista 1</h2>
        <p></p>
        {Lista1.map(item=><div><Button key={item.etunimi} onClick={() => vasenAlkioPainettu(item)}>{item.etunimi} {item.ikä}</Button></div>)}

    </div>
    <div class="column middle" >
        <h2>********</h2>
        <p></p>
        <ArrowBackIcon disabled={dVasen} onClick={vasenPainettu}>vasen</ArrowBackIcon>
      <ArrowForwardIcon disabled={dOikea}  onClick={oikeaPainettu}>oikea</ArrowForwardIcon>
      <Button onClick={sortPainettu1}>Sort1</Button>
      <Button onClick={sortPainettu2}>Sort2</Button>

      <label>
          Name:
          <input type="text" value={state.value} onChange={handleChange} />        </label>
        <input type="submit" value="Submit" />
    </div>
    <div class="column right" >
        <h2>Lista 2</h2>
        <p></p>
        {Lista2.map(item=><div><Button key={item.etunimi} onClick={() => oikeaAlkioPainettu(item)}>{item.etunimi} {item.ikä}</Button></div>)}

      <p></p>
    </div>
</div>

  )
}

export default App;