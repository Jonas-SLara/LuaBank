import Header from "../../Components/Header/Header";
import Main from "../../Components/Main/Main"
import BoardGame from "./components/BoardGame/BoardGame";

import banner2 from "/game/cityBanner.png"

function GameView(){
    return(
        <>
            <Header page="jogo"/>
            <Main bannerURL={banner2}>
                <BoardGame></BoardGame>
            </Main>
        </>
    );
}

export default GameView;
