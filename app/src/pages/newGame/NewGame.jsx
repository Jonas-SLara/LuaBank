import Fundo from "../Home/components/Fundo/Fundo";
import Return from "./components/Return/Return";
import Header from "../Home/components/Header/Header";
import Menu from "../Home/components/Menu/Menu";
import FormPlayer from "./components/Form/FormPlayer";
import Perfil from "./components/Perfil/Perfil";
import { usePlayer } from "../../context/playerContext";

const b1 = "/city.png";

const NewGame = ()=>{
    //renderizará o avatar se já tiver escolhido um nome e criado um jogador
    const { player } = usePlayer();
    return(
        <>
            <Return/>
            <Header titulo="NOVO JOGO"/>
            <Fundo bannerURL={b1}>
                <Menu spaceBetween={true}>
                    <FormPlayer/>
                    {
                        //se já tiver um jogador, renderizará o avatar
                        player && 
                        <>
                            <h3>{player.name} - Escolha seu avatar: </h3>
                            <Perfil/>
                        </>
                    }
                </Menu>
            </Fundo>
        </>
    )
}

export default NewGame;