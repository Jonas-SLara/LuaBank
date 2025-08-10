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

    //função para adicionar um comprador e tambem a quantidade de cotas 
    // que ele comprou e somando a quantidade de cotas com o valor
    //no final ele deve diminuir a quantidade de cotas disponiveis
    addBuyer(player, amount){
        if(amount > this.unicout){
            console.log("não foi possivel realizar a trasação");
            returns
        }
        this.buyers.push({player: player, amount: amount});
        this.uniCount = this.uniCount - amount;
    }

    getBuyers(){
        return this.buyers;
    }

    //calcula a quantidade de cotas que o player tem nesta casa e retorna
    

}