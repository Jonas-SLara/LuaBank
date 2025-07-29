import Card from "./Card";


export default class House extends Card{
    constructor(id, name_, description, valueUni, uniCount, region){
        super(id, name_, description)
        this.valueUni = valueUni;
        this.uniCount= uniCount;
        this.player = null; //jogador dono
        this.buyers = []; //registro de compras idPlayer + quantidade de cotas
        this.region = region;
    }

}