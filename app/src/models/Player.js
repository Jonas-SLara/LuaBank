//classe Player models/Player.js 
//Representa o jogador no tabuleiro e usado no contexto do react
export default class Player {
    
    constructor(namePlayer, idPlayer) {
        this.name = namePlayer;
        this.position = 0;
        this.items = [];
        this.count = 1000;
        this.indexPerfil = 0;
        this.idPlayer = idPlayer;
        this.npc = false; // determina o modo de jogo, false é interativo
    }

    //getter and setters
    setName(name){ this.name = name;}
    getName(){ return this.name; }
    getIdPlayer(){ return this.idPlayer }
    setCout(x){ this.count =x; }
    getCount(){ return this.count; }
    getItems(){ return this.items; }
    //altera a imagen de perfil de acordo com o index da imagem no componete Perfil
    setIndexPerfil(index){ this.indexPerfil = index; }
    getIndexPerfil(){ return this.indexPerfil; }
    getPosition(){ return this.position; }

     //muda a posição do jogador de acordo com o valor retirado no dado
    setPosition(x){
        this.position += x;
        //se a posição for maior que o tamanho do tabuleiro, volta para o começo
        if(this.position >= 24){
            this.position = this.position - 24;
            //adiciona 200 ao dinheiro do jogador
            this.count += 200;
        }
    }

    getPatrimonio(){
        return 0;
    }
}