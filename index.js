import Kutya from "./Kutya";

//példányosítom a Kutyát

const ujKutya = new  Kutya("Bodri","golden retriver","Adj enni!",$(".tarolo"))
const ujKutya2 = new  Kutya("Dézi","keverék","Szeretlek gazdim!",$(".tarolo"))

//ujKutya.nev="Átnezem"
//kivűlről tudok ujabb adattagokat hozzáadni az osztályhoz
//ujKutya.egySzenuujTulajdonsag="Osztályon kívűl is tudok értéket adni nekik"
//delete ujKutya.fajta ilyet inkább ne!

//console.log(ujKutya.nev)
console.log(ujKutya2.nev)
// de még mindig nem tudom megváltoztatni
// mert még nincsen hozzá setter!

ujKutya.mondat = "Köszi, már nem vagyok éhes!"

console.log(ujKutya)
console.log(ujKutya2)
ujKutya.beszel()
ujKutya2.beszel()