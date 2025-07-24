import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Tutorial from '../pages/Tutorial/Tutorial';
import GameView from '../pages/GameView/GameView';

function HomeRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/tutorial" element={<Tutorial/>}></Route>
                <Route path="/jogo" element={<GameView/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default HomeRoutes;