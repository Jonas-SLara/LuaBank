//classe Player models/Player.js 
//Representa o jogador no tabuleiro e usado no contexto do react
export default class Player {
    
    constructor(namePlayer) {
        this.name = namePlayer;
        this.position = 0;
        this.items = [];
        this.count = 1000;
        this.indexPerfil = 0;
    }
    //altera o nome do jogador
    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    //altera a imagen de perfil de acordo com o index da imagem no componete Perfil
    setIndexPerfil(index){
        this.indexPerfil = index;
    }

    getIndexPerfil(){
        return this.indexPerfil;
    }
    
    //tabuleiro tem 42 casas
    setPosition(x){
        this.position = (this.position + x)%42;
    }

    getPosition(){
        return this.position;
    }
}