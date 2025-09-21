import FundoGame from "./components/FundoGame/FundoGame";
import Leave from "./components/Leave/Leave";
import EndTurn from "./components/EndTurn/EndTurn";
import GameMain from "./components/GameMain/GameMain";
import CardModal from "./components/CardModal/CardModal";
import banner2 from "/city2.png";
import { usePlayer } from "../../context/playerContext";
import { useGame } from "../../context/gameContext";
import { useEffect, useState } from "react";

import Bank from "./components/Bank/Bank";

function GameView() {
    const { player } = usePlayer()
    const { game, init, diceNum, startTurn } = useGame();
    const [card, setCard] = useState(null);

    //tem jogador mas ainda sem o jogo, então inicializa o jogo
    useEffect(() => {
        if (player && !game) {
            init();
        }
    }, []);

    //sempre que alterar o numero do dado e iniciar um turno novamente
    useEffect(() => {
        if (!game) return;
        if (startTurn) {
            //altera o estado de jogo e atualiza a position do jogador e o turno dele
            game.handleRolldice(diceNum);
            
            //se for o turno do jogador saca a carta dele
            if(game.getTurn()==1){
                setCard(game.getCardAtPosition());
            }
        }
    }, [diceNum, startTurn]);

    //valvula de escape para enquanto não tiver o game pronto
    if (!game) {
        return (
            <p>Carregando ...</p>
        );
    }

    return (
        <>
            <Leave/>
            <EndTurn/>
            <Bank/>
            <FundoGame bannerURL={banner2}>                
                <GameMain/>
            </FundoGame>
            <CardModal card={card} setCard={setCard}/>
        </>
    );
}

export default GameView;
