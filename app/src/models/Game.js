import Board from "./Board";
import Player from "./Player";

//precisa ser instanciada
export default class Game{
    constructor(){
        //inicia um npc
        this.npc = new Player("Big Brother");
    }

    /*Constroi o tabuleiro, criar as cartas, cria o vetor de indices e embaralha 
    iniciara atributos do jogador e o npc e começara a partida*/
    initAll(){
        //NESTA ORDEM
        Board.createCards();
        Board.createBoardArray();
        Board.fillRegions();
        Board.fillGrid();
        console.log(Board.grid);
    }

    getCards(){ return Board.cards };

    getGrid(){ return Board.grid };
    
    getNpc(){ return this.npc; }

}