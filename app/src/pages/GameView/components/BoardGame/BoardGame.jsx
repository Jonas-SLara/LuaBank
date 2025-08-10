import { motion, spring } from "framer-motion";
import styles from "./BoardGame.module.css";
import { div } from "framer-motion/client";
import { isHouse, isEvent} from "../../../../utils/utils";
import { useGame } from "../../../../context/gameContext";
import Piece from "../Piece/Piece";

const DivMotion = motion(div);

//recebe a matriz do tabuleiro da classe Board, Board.grid
export default function BoardGame() {
    const {game} = useGame();
    if(!game) return;
    

    const boardGrid = game.getBoard().getGrid();

    return(
        <DivMotion className={styles.board}
            initial={{ opacity: 0, scaleX:0.2, scaleY: 0.8 }}
            animate={{ opacity: 1, scaleX:1, scaleY:1 }}
            transition={{ type:spring ,duration: 2, mass: 1 }}
        >
            {
                boardGrid.map( (line, i) =>
                    line.map( (c, j) => {
                        let blockStyle = styles.empty;
                        blockStyle = isEvent(c) ? styles.event : blockStyle;
                        blockStyle = isHouse(c) ? styles.house : blockStyle;
                        return(
                            < div key={`${i}-${j}`} className={blockStyle} />
                        );
                    })
                )
            }
            <Piece isNpc={true}/>
            <Piece isNpc={false}/>
        </DivMotion>
    );
}