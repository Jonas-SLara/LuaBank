import { usePlayer } from "../../../../context/playerContext";
import { useGame } from "../../../../context/gameContext";
import Dice from "../Dice/Dice";
import ViewPlayer from "../ViewPlayer/ViewPlayer";
import BoardGame from "../BoardGame/BoardGame";
import styles from "./game.module.css";

const GameMain = () => {
    const { player } = usePlayer();
    const { game, turn } = useGame();
    
    //por segurança também renderiza tudo se já tiver iniciado
    if(!game || !player) return null;

    return (
        <section className={styles.game}>

            {/*Dado a ser implementado com o sistema de rounds com position absolute*/}
            <Dice />
            <ViewPlayer
                player={player}
                active={turn === 1}
            />

            <BoardGame />

            <ViewPlayer
                player={game.getNpc()}
                active={turn === 0}
            />

        </section>
    );
}

export default GameMain