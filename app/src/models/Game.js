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
        this.turn = 1; //1 = player, 0 = npc
        this.startTurn = false; //se o jogador terminou o turno ou não
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
    }

    getTurn(){ return this.turn; }
    isStartTurn(){ return this.startTurn; }

    //após o resultado do dado tratar a jogada, valor padrão é o do dado
    handleRolldice(value){
        //se for o turno do jogador
        if(this.turn === 1){
            //atualiza a posição do jogador
            this.player.setPosition(value);
        }else{
            //atualiza a posição do npc
            this.npc.setPosition(value);
        }
        //atualiza o estado do turno do jogador no game para true
        this.startTurn = true;
    }

    //finaliza o turno do jogador para poder passar para o próximo
    //por exemplo após o jogador tomar uma decisão como comprar ou passar a vez
    endTurn(){
        //se for o turno do jogador, passa para o npc
        this.turn = this.turn === 1 ? 0 : 1;
        //seta o turno do próximo jogador para false, para ele poder girar o dado
        this.startTurn = false;
        console.log("Turno finalizado, próximo jogador:", this.turn === 1 ? "Player" : "NPC");
        
        //se for o turno do npc, ele pode fazer a jogada automaticamente
        if(this.turn === 0){
           
        }
    }
}