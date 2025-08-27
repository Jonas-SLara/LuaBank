import { motion, spring } from "framer-motion";
import styles from "./CardModal.module.css"

/* 
* um modal que recebe um hook vindo do GameView toda vez que
* for o turno do jogador e ele começar a jogada em uma casa do tabuleiro
* o jogo obtem a carta do jogador na posição do tabuleiro onde o player está
* e mostra isso em um modal de opções
*/

const Overlay = motion.div;
const Modal = motion.div;

const CardModal = ({ card, setCard }) => {
    if (!card) return null; //não renderiza
    return (
        <Overlay
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <Modal
                className={styles.modal}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: spring, duration: 0.4, mass: 1.2 }}
            >
                <div className={styles.header}>
                    <h2>{card.name}</h2>
                    <button onClick={() => { setCard(null) }}>X</button>
                </div>
            </Modal>
        </Overlay>
    );
}

export default CardModal;