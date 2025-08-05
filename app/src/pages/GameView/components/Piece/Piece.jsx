import { useGame } from "../../../../context/gameContext";
import { useState } from "react";
import stylesG from "../../../../styles/common.module.css"

import imgPlayer from "/game/iconAvatar1.png";
import imgNpc from "/game/iconAvatar2.png";

export default function Piece({isNpc}){

    //seta o estado de animação para o movimento da peça
    //isso pode ser usado para animar a peça quando ela se move
    const [animation, setAnimation] = useState(false);

    //seta a posição da peça, isso pode ser usado para animar a peça quando ela se move
    //a posição será baseada na posição do player no tabuleiro
    const [position, setPosition] = useState(0);

    const {game} = useGame();
    if(!game) return;

    //recebera o player ou o jogador
    const player = isNpc ? game.getNpc() : game.getPlayer();

    //se não tiver o player, não renderiza nada
    if(!player) return;

    //pega as coordenadas do player
    const pointsCoord = game.getBoard().getPointsCoord();
    const coord = pointsCoord[player.getPosition()];

    //se não tiver coordenadas, não renderiza nada
    if(!coord) return;

    const style = {
        position: "absolute",
        top: `calc(${coord.row} * (100% / 7))`,
        left: `calc(${coord.col} * (100% / 7))`,
        width: `42px`,
        height: `42px`,
        borderRadius: `50%`,
        background: `#222222`,
        zIndex: 5,
    }

    //quando a peça for renderizada, ela terá a imagem do jogador ou do npc
    //quando a o valor da posição da peça alterar, a animação de movimentaão acontce
    return(
        <div 
            className={`${stylesG.center}`}
            style={style}>
            <img src={isNpc ? imgNpc : imgPlayer} width={"32px"}/>
        </div>
    );
}