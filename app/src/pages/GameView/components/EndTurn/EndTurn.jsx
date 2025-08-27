import styles from "./endTurn.module.css"
import { useGame } from "../../../../context/gameContext";
const EndTurn = () => {
    const { game, setTurn, setStartTurn } = useGame();
    return (
        <button
            onClick={() => {
                //finaliza o turno
                game.endTurn();
                setTurn(game.getTurn());
                setStartTurn(game.isStartTurn());
            }}
            className={styles.endTurn}
        >
            Finalizar Turno
        </button>
    )
}
export default EndTurn;