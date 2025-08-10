import Header from "../../Components/Header/Header";
import Main from "../../Components/Main/Main"
import BoardGame from "./components/BoardGame/BoardGame";

import banner2 from "/game/cityBanner.png"

import Dice from "./components/Dice/Dice";
import ViewPlayer from "./components/ViewPlayer/ViewPlayer";
import stylesG from "../../styles/common.module.css";

import { usePlayer } from "../../context/playerContext";
import { useGame } from "../../context/gameContext";
import { useEffect, useState } from "react";

function GameView(){
    const {player} = usePlayer()
    const {game, init, diceNum, setDiceNum, turn, setTurn,
         startTurn, setStartTurn} = useGame();

    //tem jogador mas ainda sem o jogo, então inicializa o jogo na primeira renderização
    useEffect(()=>{
        if(player && !game){
            init();
        }
    }, []);

    //quando o numero do dado alterar altera o estado do jogo na classe e atualizar no cotext
    //usando um useeffect e observando a variavel diceNum, mas e se ele tirar o numero 2 vezes
    //ai o useEffect não ira perceber que o valor do dado mudou
    useEffect(()=>{
        if(!game) return;
        //altera o estado de jogo e atualiza a position do jogador e o turno dele
        console.log("estado de jogo alterado");
        game.handleRolldice(diceNum);
        game.getCardAtPosition();

        //finaliza o turno
        game.endTurn();
        setTurn(game.getTurn());
        setStartTurn(game.isStartTurn());
    }, [diceNum]);

    //Enquanto eu não tiver esses dados prontos (o game), não tenta renderizar o resto da 
    //interface que depende deles. Mostra uma tela de carregamento
    if(!game){
        return(
            <p>Carregando ...</p>
        );
    }

    return(
        <>
            <Header page="jogo"/>
            <Main bannerURL={banner2}>
                <section className={`${stylesG.around} ${stylesG.responsiveGrow}`}>
                    {/*Dado a ser implementado com o sistema de rounds com position absolute*/}
                    <Dice/>
                    <ViewPlayer 
                        player={player} 
                        active={turn === 1}/>

                    <BoardGame/>

                    <ViewPlayer 
                        player={game.getNpc()} 
                        active={turn === 0}/>
                </section>
            </Main>
        </>
    );
}

export default GameView;
