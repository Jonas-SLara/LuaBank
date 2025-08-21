import Perfil from "./components/Perfil/Perfil";
import Fundo from "../Home/components/Fundo/Fundo";
import Return from "../newGame/components/Return/Return";
import b1 from "/city.png";
const SetGame = ()=>{
    return(
        <>
            <Return/>
            <Fundo bannerURL={b1}></Fundo>
        </>
    )
}

export default SetGame;
