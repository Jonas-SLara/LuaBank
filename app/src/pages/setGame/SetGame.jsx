import Perfil from "./components/Perfil/Perfil";
import Fundo from "../Home/components/Fundo/Fundo";
import Return from "../newGame/components/Return/Return";
import b1 from "/city.png";
import Header from "../Home/components/Header/Header";
import Menu from "../Home/components/Menu/Menu";
const SetGame = ()=>{
    return(
        <>
            <Return/>
            <Header titulo="JOGOS SALVOS"/>
            <Fundo bannerURL={b1}>
                <Menu>
                    
                </Menu>
            </Fundo>
        </>
    )
}

export default SetGame;
