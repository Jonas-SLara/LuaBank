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
    }

    getId(){ return this.id; }
    getName(){ return this.name; }
    getDescription(){ return this.description; }
}