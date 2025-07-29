import Board from "../../../../models/Board";
import { motion, spring } from "framer-motion";
import styles from "./BoardGame.module.css";
import { div } from "framer-motion/client";

const DivMotion = motion(div);

export default function BoardGame() {
    //cria a matriz
    const boardGrid = Board.getGrid(Board.createBoardArray());
    //const cards = Board.getCards(Board.createCards());
    console.log(boardGrid)
    
    return(
        <DivMotion className={styles.board}
            initial={{ opacity: 0, scaleX:0.2, scaleY: 0.8 }}
            animate={{ opacity: 1, scaleX:1, scaleY:1 }}
            transition={{ type:spring ,duration: 2, mass: 1 }}
        >
            {
                boardGrid.map( (line, i) =>
                    line.map( (e, j) => {
                        return(
                            e!==null ? (
                                <div key={`${i}-${j}`}
                                className={styles.house}>
                                </div>
                            ):
                            <div key={`${i}-${j}`} className={styles.empty} />
                            
                        );
                    })
                )
            }
        </DivMotion>
    );
}