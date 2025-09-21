import Card from "./Card";

export default class House extends Card{
    constructor(id, name_, description, valueUni, 
        uniCount, dividends, region){
        super(id, name_, description)
        this.valueUni = valueUni;
        this.uniCount = uniCount;
        this.player = null; //jogador dono
        this.region = region;
        this.dividends = dividends;
    }

    getValueUni(){ return this.valueUni; }
    getUniCount(){ return this.uniCount; }
    getDividends(){ return this.dividends; }

    //adiciona as cotas no registro do jogador apos conclusão da compra
    buy(player, amount){
        //verifica a quantidade de cotas disponiveis
        if(amount > this.unicout){
            console.log("não foi possivel realizar a trasação, quantidade não disponível");
            return false;
        }

        //calcula o valor final da compra e verifica o saldo do player
        let final = this.valueUni*amount;
        if(final > player.getCount()){
            console.log("não é possível realizar esta compra, saldo insuficiente");
            return false;
        }

        //subtrai montante e saldo do player
        this.uniCount = this.uniCount - amount;
        player.setCount(player.getCount() - final);
        const item = player.getItemsId(this.id);

        //se não tiver um item ainda cria ele, isso evita criar ele de novo depois
        if(item == null){
            player.addItem({id: this.id, amount: amount });
        }else{
            //caso já tenha apenas altere os valores(compra)
            item.amount = item.amount + amount;
            player.setItem(item);
        }
        return true;
    }

    //obter o patrimonio que tal jogador tem nesta propriedade com o valor de cota atual

}