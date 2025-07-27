import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Tutorial from '../pages/Tutorial/Tutorial';
import GameView from '../pages/GameView/GameView';
import { PlayerProvider } from '../context/playerContext';

//player provider fica antes de routes
function HomeRoutes(){
    return(
        <BrowserRouter>
            <PlayerProvider>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/tutorial" element={<Tutorial/>}></Route>
                    <Route path="/jogo" element={<GameView/>}></Route>           
                </Routes>
            </PlayerProvider>
        </BrowserRouter>
    );
}

export default HomeRoutes;