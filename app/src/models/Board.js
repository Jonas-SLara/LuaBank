import Card from "./Card";
import House from "./House";
import data from "../data/cardsHouse.json";
import dataEvents from "../data/cardsEvents.json";
import Events from "./Events";
import { shuffle } from "../utils/utils";

export default class Board {
    static cards = [];
    static grid = null;
    static regions = [];
    static SIZE = 7
    //criar uma array de coordenadas de onde estao as cartas na matriz na hora de cria-la
    static pointsM = []; // {row: col:}

    /*Cria uma matriz 7x7 e preenche os cantos com casas enquanto no meio preenche com null*/
    static createBoardArray(){

        Board.pointsM = [];
        const TAM = this.SIZE;
        Board.grid = Array.from({length: TAM}, ()=> Array(7).fill(null));

        //PRENCHER NO SENTIDO HORÁRIO
        //os elementos de cima
        for(let i=0; i<TAM; i++){
            Board.pointsM.push({rol: 0, col: i});
        }
        //os elementos da direita, pula o topo
        for(let j=1; j<TAM; j++){
            Board.pointsM.push({rol: j, col: TAM-1});
        }
        //os elementos de baixo, pula o ultimo da direita
        for(let k=TAM-2; k>=0; k--){
            Board.pointsM.push({rol: TAM-1, col: k})
        }
        //os elementos da esquerda, pula o ultimo de baixo e não le o topo
        for(let l=TAM-2; l>0; l--){
            Board.pointsM.push({rol:l, col:0});
        }
    }

    /*teste print de cards */
    static printCards(){
        console.log(Board.cards);
    }

    /*cria as cartas atráves do import de dados do json e guarda na array de cards */
    static createCards(){
        const cardsHouses = data.map( c => {
            return new House(c.id, c.name, c.description, c.valueUni, 
                c.uniCount, c.region);
        })

        const cardsEvents = dataEvents.map( c=> {
        return new Events(c.id, c.name, c.description, null, c.positive);
        })

        Board.cards = [...cardsHouses, ...cardsEvents];
        //embaralha
        shuffle(Board.cards);
    }

    /*preenche as regiões apartir das que existem no arquivo json dos dados */
    static fillRegions(){
        data.forEach( c => {
            if(! Board.regions.includes(c.region) ){
                Board.regions.push(c.region);
            }
        }) 
    }

    //preenche a matriz do tabuleiro nas posições marcadas, no caso as bordas, com as cartas
    static fillGrid(){
        Board.pointsM.forEach( (p, i) => {
            Board.grid[p.rol][p.col] = Board.cards[i];
        })
    }
}