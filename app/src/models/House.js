import Card from "./Card";

export default class House extends Card{
    constructor(id, name_, description, valueUni, 
        uniCount, dividends, region){
        super(id, name_, description)
        this.valueUni = valueUni;
        this.uniCount = uniCount;
        this.player = null; //jogador dono
        this.region = region;
        this.buyers = [];
        this.dividends = dividends;
    }

    getValueUni(){ return this.valueUni; }
    getUniCount(){ return this.uniCount; }
    getDividends(){ return this.dividends; }

    //adiciona as cotas no registro do jogador apos conclusão da compra
    buy(player, amount){
        if(amount > this.unicout){
            console.log("não foi possivel realizar a trasação");
            return false;
        }
        this.uniCount = this.uniCount - amount;
        const item = player.getItemsId(this.id);
        //se não tiver um item ainda cria ele, isso evita criar ele de novo depois
        if(item == null){
            player.addItem({id: this.id, amount: amount });
            return true
        }
        //caso já tenha apenas altere os valores
        item.amount = item.amount + amount;
        return player.setItem(item);
    }

   
    //calcula a quantidade de cotas que o player tem nesta casa e retorna
    
}