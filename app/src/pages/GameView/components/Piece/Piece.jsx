import styles from "./Piece.module.css";
import { useGame } from "../../../../context/gameContext";
import { usePlayer } from "../../../../context/playerContext";

export default function Piece({isNpc=false}){
    const {game} = useGame();
    if(!game) return;

    //recebrea o player ou o jogador
    const player = (!isNpc)? game.getPlayer(): game.getNpc();
    return(
        <div>
            {player.getName()}
        </div>
    );
}