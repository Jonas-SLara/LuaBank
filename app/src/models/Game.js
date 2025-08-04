import Board from "./Board";
import Player from "./Player";
import Dice from "./Dice";

//precisa ser instanciada
export default class Game{
    //receberá o jogador Principal como parametro para acessalo
    constructor(player){
        //inicia um npc
        this.npc = new Player("Big Brother");
        this.board = new Board();
        this.player = player;
        this.dice = new Dice();
    }
    
    getBoard(){ return this.board}

    getNpc(){ return this.npc; }
    getPlayer(){ return this.player; }
    getDice(){ return this.dice; }
    
    /*Constroi o tabuleiro, criar as cartas, cria o vetor de indices e embaralha 
    iniciara atributos do jogador e o npc e começara a partida*/
    initAll(){
        //NESTA ORDEM
        this.board.createCards();
        this.board.createBoardArray();
        this.board.fillRegions();
        this.board.fillGrid();
        console.log(this.board.grid);
    }

    //após o resultado do dado tratar a jogada
    handleRolldice() {
        
    }
}