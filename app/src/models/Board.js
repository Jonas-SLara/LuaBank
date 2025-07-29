import Card from "./Card";
import House from "./House";
import data from "../data/cardsHouse.json";

export default class Board {
    static cards = [];
    static grid = null;

    static getCards(){ return Board.cards };
    static getGrid(){ return Board.grid };

    /*Cria uma matriz 7x7 e preenche os cantos com casas enquanto no meio preenche com null*/
    static createBoardArray(){
        const TAM = 7;
        //criar uma matriz 7 x 7 e preenche com null
        Board.grid = Array.from({length: TAM}, ()=> Array(7).fill(null));

        let id = 0; //perimetro do tabuleiro
        //PRENCHER NO SENTIDO HORÁRIO
        //os elementos de cima
        for(let i=0; i<TAM; i++){
            Board.grid[0][i] = id;
            id++;
        }
    
        //os elementos da direita, pula o topo
        for(let j=1; j<TAM; j++){
            Board.grid[j][TAM-1] = id;
            id++;
        }

        //os elementos de baixo, pula o ultimo da direita
        for(let k=TAM-2; k>=0; k--){
            Board.grid[TAM-1][k] = id;
            id++;
        }
        
        //os elementos da esquerda, pula o ultimo de baixo e não le o topo
        for(let l=TAM-2; l>0; l--){
            Board.grid[l][0] = id;
            id++;
        }
        //console.log(Board.grid);
    }

    /*cria um vetor embaralhado com as cartas que ocuparão cada casa no tabuleiro,
    no total serão 24 cartas sendo 12 propriedades e 12 bonus*/
    
    static printCards(){
        console.log(Board.cards);
    }

    /*cria as cartas atráves do import de dados do json e guarda na array de cards */
    static createCards(){
        Board.cards = data.map( c => {
            return new House(
                c.id,
                c.name,
                c.description,
                c.valueUni,
                c.uniCount,
                c.region
            );
        })

        Board.printCards()
    }

    //preenche o tabuleiro com as cartas que foram criadas
    static fillGrid(cards, grid){

    }
}