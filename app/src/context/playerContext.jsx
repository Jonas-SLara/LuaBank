import { createContext,  useContext,  useState } from "react";
import Player from "../models/Player";

//criar o contexto
const PlayerContext = createContext(null);

//criar o provider para encapsulamento do contexto
export function PlayerProvider({children}){
    
    const [player, setPlayer] = useState(null);
    
    const createPlayer = (namePlayer) => {
        const newPlayer = new Player(namePlayer);
        setPlayer(newPlayer);
        console.log("player criado");
    }

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





