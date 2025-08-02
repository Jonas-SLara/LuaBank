/**Centraliza o estado do jogador (player) para ser usado em toda a aplicação.
Fornece funções para criar um jogador (createPlayer) e resetar (resetPlayer).
Utiliza React.createContext e um custom hook usePlayer() para facilitar o acesso seguro ao contexto. */

import { createContext,  useContext,  useState } from "react";
import Player from "../models/Player";

//criar o contexto
const PlayerContext = createContext(null);

//criar o provider para encapsulamento do contexto
export function PlayerProvider({children}){
    
    const [player, setPlayer] = useState(null);

    //função para iniciar o player, instanciar um, logo na home
    const createPlayer = (namePlayer) => {
        const newPlayer = new Player(namePlayer);
        setPlayer(newPlayer);
        console.log("player criado");
    }

    //função para limpar o player, deixar como null
    const resetPlayer = () => {
        setPlayer(null);
    }
    
    return(
        <PlayerContext.Provider value={{player, createPlayer, resetPlayer}}>
            {children}
        </PlayerContext.Provider>
    );
}

//hook para usar o contexto apenas dentro do provider
export const usePlayer = ()=>{
    const context = useContext(PlayerContext);
    if(!context){
        throw new Error("use player fora do provider");
    }
    return context;
}
