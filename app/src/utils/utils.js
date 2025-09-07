import Events from "../models/Events";
import House from "../models/House"

//verifica se um objeto carta é uma instancia de casa
export const isHouse = (card) => {
    return (card instanceof House) ? true : false;
}

//verifica se um objeto carta é uma instancia de evento
export const isEvent = (card) => {
    return (card instanceof Events) ? true : false;
}

//função para embaralhar uma array
export const shuffle = (array) => {
    let currentI = array.length;
    while(currentI!==0){
        //gera um numer aleatório apartir do index atual
        let indexHash = Math.floor(Math.random() * currentI);
        currentI --;
        //troca
        let obj = array[currentI];
        array[currentI] = array[indexHash];
        array[indexHash] = obj;
    }
}

//gera 6 faces aleatorias com valores aleatórios de 1 a 6 sem repetições consecutivass
export const getRandomDicesFaces = ()=>{
    let array = new Array(6);
    for(let i = 1; i<=6; i++){
        array[i-1]=i;
    }
    shuffle(array);
    return array;
}