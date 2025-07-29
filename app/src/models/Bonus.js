import Card from "./Card";

export default class Bonus extends Card{
    constructor(id, name_, description, eventFunction){
        //construtor da classe mãe
        super(id, name_, description);
        this.event = eventFunction
    }

    //aplica um evento de acordo com a função passada
    applyEffect(){
        this.event();
    }
}