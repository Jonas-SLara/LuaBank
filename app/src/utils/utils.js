import Events from "../models/Events";
import House from "../models/House"

//verifica se uma carta é uma instancia de casa
export const isHouse = (card) => {
    return (card instanceof House) ? true : false;
}

//verifica se uma carta é uma instancia de evento
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
