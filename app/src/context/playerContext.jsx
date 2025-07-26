import { createContext,  useState } from "react";

//criar o contexto
export const playerContext = createContext(null);

//criar o provider
export function PlayerContextProvider({children}){
    const [name, setName] = useState(null);
    return(
        <playerContext.Provider value={{name, setName}}>
            {children}
        </playerContext.Provider>
    );
}