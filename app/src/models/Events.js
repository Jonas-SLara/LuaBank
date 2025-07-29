import Card from "./Card";

export default class Events extends Card{
    constructor(id, name_, description, eventFunction, positive){
        //construtor da classe mãe
        super(id, name_, description);
        this.event = eventFunction;
        this.positive = positive;
    }

    //aplica um evento de acordo com a função passada
    applyEffect(){
        this.event();
    }
}