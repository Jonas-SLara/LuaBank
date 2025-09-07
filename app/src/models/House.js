import Card from "./Card";


export default class House extends Card{
    constructor(id, name_, description, valueUni, 
        uniCount, dividends, region){
        super(id, name_, description)
        this.valueUni = valueUni;
        this.uniCount = uniCount;
        this.player = null; //jogador dono
        this.buyers = []; //registro de compras idPlayer + quantidade de cotas
        this.region = region;
        this.dividends = dividends;
    }

    getValueUni(){ return this.valueUni; }
    getUniCount(){ return this.uniCount; }
    getDividends(){ return this.dividends; }

    //função para adicionar um comprador e tambem a quantidade de cotas 
    addBuyer(player, amount){
        if(amount > this.unicout){
            console.log("não foi possivel realizar a trasação");
            return false;
        }
        this.buyers.push({player: player, amount: amount});
        this.uniCount = this.uniCount - amount;
        return true;
    }

    getBuyers(){ return this.buyers;}

    //calcula a quantidade de cotas que o player tem nesta casa e retorna
    

}