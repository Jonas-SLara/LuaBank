import Card from "./Card";
import House from "./House";
import data from "../data/cardsHouse.json";
import dataEvents from "../data/cardsEvents.json";
import Events from "./Events";
import { shuffle } from "../utils/utils";

export default class Board {

    constructor(){
        this.cards = [];
        this.grid = null;
        this.regions = [];
        this. size = 7
        //criar uma array de coordenadas de onde estao as cartas na matriz na hora de cria-la
        this.pointsCoord = []; // {row: col:}

    }

    getGrid(){return this.grid;}
    getPointsCoord(){return this.pointsCoord;}

    /*Cria uma matriz 7x7 e preenche os cantos com casas enquanto no meio preenche com null*/
    createBoardArray(){

        this.pointsCoord = [];
        const TAM = this.size;
        this.grid = Array.from({length: TAM}, ()=> Array(7).fill(null));

        //PRENCHER NO SENTIDO HORÁRIO
        //os elementos de cima
        for(let i=0; i<TAM; i++){
            this.pointsCoord.push({row: 0, col: i});
        }
        //os elementos da direita, pula o topo
        for(let j=1; j<TAM; j++){
            this.pointsCoord.push({row: j, col: TAM-1});
        }
        //os elementos de baixo, pula o ultimo da direita
        for(let k=TAM-2; k>=0; k--){
            this.pointsCoord.push({row: TAM-1, col: k})
        }
        //os elementos da esquerda, pula o ultimo de baixo e não le o topo
        for(let l=TAM-2; l>0; l--){
            this.pointsCoord.push({row:l, col:0});
        }
    }

    /*teste print de cards */
    printCards(){
        console.log(this.cards);
    }

    /*cria as cartas atráves do import de dados do json e guarda na array de cards */
    createCards(){
        const cardsHouses = data.map( c => {
            return new House(c.id, c.name, c.description, c.valueUni, 
                c.uniCount, c.region);
        })

        const cardsEvents = dataEvents.map( c=> {
        return new Events(c.id, c.name, c.description, null, c.positive);
        })

        this.cards = [...cardsHouses, ...cardsEvents];
        //embaralha
        shuffle(this.cards);
    }

    /*preenche as regiões apartir das que existem no arquivo json dos dados */
    fillRegions(){
        data.forEach( c => {
            if(! this.regions.includes(c.region) ){
                this.regions.push(c.region);
            }
        }) 
    }

    //preenche a matriz do tabuleiro nas posições marcadas, no caso as bordas, com as cartas
    fillGrid(){
        this.pointsCoord.forEach( (p, i) => {
            this.grid[p.row][p.col] = this.cards[i];
        })
    }
}