import Board from "./Board";

//precisa ser instanciada
export default class Game{
    constructor(){}

    /*Constroi o tabuleiro, criar as cartas, cria o vetor de indices e embaralha 
    iniciara atributos do jogador e começara a partida*/
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
}