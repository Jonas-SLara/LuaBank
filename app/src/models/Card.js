/*
classe generica que sera usada para ser uma propriedade ou uma carta bonus
possui atributos obrigatorios para ambas como id, nome e métodos que deverão
ser implementados
*/
export default class Card {
    constructor(id, name_, description) {
        this.id = id;
        this.name = name_;
        this.description = description;
        this.ativa = false; //por padrao vai ficar escondida
    }

    //método de efeito que será implementado pela classe carta bonus
    applyEffect(){

    }

    printLog(){
        console.log(`${this.id} ${this.ativa} ${this.name} -> ${this.description}`);
    }

}