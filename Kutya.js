export default class Kutya {
    // privát adattagok lesznek // az osztályok kívülről nem érhetőek el!
    #nev="";
    #fajta="";
    #mondat="";
    #szuloElem=""
    #megjelenit=""


    constructor(nev,fajta,mondat, szuloElem){
        /* Konstruktor feladata hogy beállítja az adattagokat*/
        //this mindig az osztaly aktualis peldanyara fog mutatni
        this.#nev=nev; // publikus adattag, kivulrol megváltoztathato
        this.#fajta=fajta;
        this.#mondat=mondat;
        this.#szuloElem=szuloElem
        this.#megjelenit()
    }
        /*Privát adattagok elérése getterre */ 
        /* Így már el tudom érni kívülről*/ 
        get nev (){
            return this.#nev;
        }
        // Amelyik adattagot módosítom kívülrl,
        //Ahhoz settert írok!

        set mondat(szoveg){
            this.#mondat = szoveg;
        }


    /* tagfuggveny az adatagokon vegez muveleteket*/
    beszel(){
        //publikus metódus - osztályon kívülről elérhető
        console.log(this.#mondat)

    }

    htmlOsszeallit(){
        let txt=`<div class"kutya">
            <h2>${this.#nev}</h2>
            <h2>${this.#fajta}</h2>
        </div>`
        return txt
    }

    megjelenit(){
        this.szuloElem.append(this.htmlOsszeallit())

}


}


//export default Kutya