import Game from "../../models/Game";
import Header from "../../Components/Header/Header";
import Main from "../../Components/Main/Main"
import BoardGame from "./components/BoardGame/BoardGame";
import banner2 from "/game/cityBanner.png"
import Dice from "./components/Dice/Dice";
import ViewPlayer from "./components/ViewPlayer/ViewPlayer";
import stylesG from "../../styles/common.module.css";
import { useState, useEffect } from "react";
import { usePlayer } from "../../context/playerContext";

function GameView(){

    //INICIALIZAÇÃO DE ENTIDADES NO GAME

    //tem que setar como [], se for null ou undefined o .map dara problema, ele vai esperar carregar a array
    const [boardGrid, setBoardGrid] = useState([]);
    const game = new Game();

    useEffect(()=>{
        game.initAll();
        setBoardGrid(game.getGrid());
    }, []); //use effect para só iniciar o construtor uma vez na criação do componente
    
    const {player} = usePlayer();
    const npc = game.getNpc();

    return(
        <>
            <Header page="jogo"/>
            <Main bannerURL={banner2}>
                <Dice/>
                <section className={`${stylesG.around} ${stylesG.responsiveGrow}`}>
                    <ViewPlayer player={player}/>
                    <BoardGame boardGrid={boardGrid}/>
                    <ViewPlayer player={npc}/>
                </section>
            </Main>
        </>
    );
}

export default GameView;
