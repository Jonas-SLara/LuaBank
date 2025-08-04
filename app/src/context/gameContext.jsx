/*
 * O GamerProvider fica responsável pela criação e inicialização do jogo, mediante a
 * a criação de um player
*/
import { createContext, useContext, useEffect, useState } from "react";
import Game from "../models/Game";
import { usePlayer } from "./playerContext";

//criar o contexto do Game
const GameContext = createContext(null);

//criar o provider para encapsular a lógica
//usamos children para passar os componentes que usam deste provider
//usamos values passando um objeto com os dados que este contexto guarda
export function GameProvider({children}){
    const [game, setGame] = useState();
    //numero do dado
    const [diceNum, setDiceNum] = useState(1);
    //turno do jogador = 1 npc = 0
    const [turn, setTurn] = useState(1); 
    //jogador terminou turno ou está começando?
    const [startTurn, setStartTurn] = useState(false);

    const {player} = usePlayer();

    const init = () => {
        //aguarda o player ser carregado
        if(!player){
            console.log("player vazio");
            return;
        }
        console.log("player alterado")
        const game = new Game(player);
        console.log("jogo iniciado")
        //INICIALIZAÇÃO DE ENTIDADES NO GAME
        game.initAll();
        setGame(game);
    }

    return(
        <GameContext.Provider value={{game, setGame, init, diceNum, setDiceNum,
            turn, setTurn, startTurn, setStartTurn
        }}>
            {children}
        </GameContext.Provider>
    );
}

//criar um hook personalizado para usar o contexto dentro do provider
export function useGame(){
    const context = useContext(GameContext);
    if(!context){
        throw new Error("use game fora do contexto");
    }
    return context;
}
