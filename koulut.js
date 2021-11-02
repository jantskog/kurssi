const o1 = {nimi:"Matti Näsä"}
const o2 = {nimi:"Heikki Hela"}
const o3 = {nimi:"Possu"}
const o4 = {nimi:"Kärpänen"}
const o5 = {nimi:"Mauno Ahonen"}
const o6 = {nimi:"Heikki Silvennoinen"}
const o7 = {nimi:"Timo Kahilainen"}
const o8 = {nimi:"Olli Keskinen"}
const c1 ={luokanNimi:"Paras A ryhmä", oppilaat:[o1,o2,o3,o4]}
const c2 ={luokanNimi:"Ruususet", oppilaat:[o5,o6,o7,o8]}
const koulu = {koulunNimi:"Kummeli opisto", luokat:[c1,c2]}

const koulut = () => {
    console.log(Koulu(koulu))
}

const Koulu = (koulu)=> {
    return "<div><h1>"+koulu.koulunNimi+"</h1>\n"+(koulu.luokat.map(item=>(Luokka(item))).join(''))+"</div>\n"
}
  
const Luokka = (luokka)=>{
    return "<div><h2>"+luokka.luokanNimi+"</h2>\n"+(luokka.oppilaat.map(item=>(Oppilas(item))).join(''))+"</div>\n"
}
  
const Oppilas = (oppilas)=>{
    return "<div>"+oppilas.nimi+"</div>\n"
}
koulut()