import Board from "./Board";
import Player from "./Player";
import Dice from "./Dice";

//precisa ser instanciada
export default class Game {
    //receberá o jogador Principal como parametro para acessalo
    constructor(player) {
        //inicia um npc com id=0
        this.npc = new Player("Big Brother", 0);
        this.board = new Board();
        this.player = player;
        this.dice = new Dice();
        this.turn = 1; //1 = player, 0 = npc
        this.startTurn = false; //se o jogador terminou o turno ou não
    }

    getBoard() { return this.board }
    getNpc() { return this.npc; }
    getPlayer() { return this.player; }
    getDice() { return this.dice; }
    getTurn() { return this.turn; }
    isStartTurn() { return this.startTurn; }
    
    /*Constroi o tabuleiro, criar as cartas, cria o vetor de indices e embaralha 
    iniciara atributos do jogador e o npc e começara a partida*/
    initAll() {
        //NESTA ORDEM
        this.board.createCards();
        this.board.createBoardArray();
        this.board.fillRegions();
        this.board.fillGrid();
    }

    //após o resultado do dado tratar a jogada, valor padrão é o do dado
    handleRolldice(value) {
        //se for o turno do jogador
        if (this.turn === 1) {
            //atualiza a posição do jogador
            this.player.setPosition(value);
        } else {
            //atualiza a posição do npc
            this.npc.setPosition(value);
        }
        //atualiza o estado do turno do jogador no game para true
        this.startTurn = true;
    }

    //finaliza o turno do jogador para poder passar para o próximo
    //por exemplo após o jogador tomar uma decisão como comprar ou passar a vez
    endTurn() {
        this.turn = this.turn === 1 ? 0 : 1;
        this.startTurn = false;
    }

    //apos fazer a jogada saca a carta do jogador naquela posição e mostra
    //aqui será guardado em um objeto
    getCardAtPosition() {
        const position = this.turn === 1 ?
            this.player.getPosition() :
            this.npc.getPosition();
        const card = this.board.getCardAtPosition(position);
        if (!card) {
            throw new Error("Carta não encontrada na posição: " + position);
        }
        //o ojeto card que esta uma array de cards no Board, é uma instancia
        //de Evento ou House
        console.log(card.getName()+" "+card.getId());
        return card;
    }

    //função do game que controla a sequencia de compra de cotas
    controlPlayerAction(card, idPlayer, amount){
        const p = (idPlayer === 1)? this.player : this.npc;
        console.log(`comprando: ${idPlayer} : ${amount}`);
        let stat = card.buy(p, amount);
        console.log(`compra concluida ${stat}`);
    }
}