import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Tutorial from '../pages/Tutorial/Tutorial';
import GameView from '../pages/GameView/GameView';
import SetGame from '../pages/setGame/SetGame';
import NewGame from '../pages/newGame/NewGame';
import { PlayerProvider } from '../context/playerContext';
import { GameProvider } from '../context/gameContext';

//PlayerProvider fica antes de routes
//GamerProvider deve ficar só na tela de jogo
function HomeRoutes(){
    return(
        <BrowserRouter>
            <PlayerProvider>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/tutorial" element={<Tutorial/>}></Route>
                    <Route path="/novo-jogo" element={<NewGame/>}></Route>
                    <Route path="/jogos-salvos" element={<SetGame/>}></Route>
                    <Route path="/jogo" element={
                        <GameProvider>  
                            <GameView/>
                        </GameProvider>
                    }></Route>           
                </Routes>
            </PlayerProvider>
        </BrowserRouter>
    );
}

export default HomeRoutes;