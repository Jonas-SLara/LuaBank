export default class Dice{
    constructor(){
        this.value = 6;
        this.rectangles = [];
    }

    getValue(){ return this.value; }

    //gera um numero aleatório de 1 a 6
    roll(){
        let x = Math.floor(Math.random() * 6 + 1);
        this.value = x;
        return this.value;
    }
}