import { useEffect, useState } from "react";
import { usePlayer } from '../../../../context/playerContext';
import data from "../../../../data/perfis.json";
import styles from "./Perfil.module.css";
import { motion, spring } from "framer-motion";
import { Link } from "react-router-dom";
const perfis = data.perfis;
const IM = motion.div;
const LM = motion(Link)

export default function Perfil() {
    //obtem jogador para salvar o index da imagem no player
    const { player } = usePlayer();

    //altera a imagem para a próxima com um clique
    const [index, setIndex] = useState(player.getIndexPerfil());

    //quando muda o index, salva no perfil
    useEffect(() => {
        player.setIndexPerfil(index);
    }, [index, player]);

    return (
        <div className={styles.perfilContainer}>
            <div className={styles.perfil}>
                {/*move para a esquerda*/}
                <IM className={`${styles.icon} ${styles.before}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: spring, duration: 0.2 }}
                    onClick={() => setIndex((index - 1 + perfis.length) % perfis.length)}
                >
                    <img src="/game/iconNext.png" alt="before" />
                </IM>

                <img
                    className={styles.perfilImg}
                    src={perfis[index]}
                    alt={"perfil"}
                />
                {/*move para direita*/}
                <IM className={`${styles.icon} ${styles.next}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: spring, duration: 0.2 }}
                    onClick={() => setIndex((index + 1) % perfis.length)}
                >
                    <img src="/game/iconNext.png" alt="next" />
                </IM>
            </div>

            <LM 
                className={`${styles.button} ${styles.play}`}
                to={"/jogo"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: spring, duration: 0.2 }}
            >
                PRONTO!
                <img 
                    src={"/game/iconDado.png"} 
                    alt={"play"} 
                    style={{width: "32px", height: "32px"}}
                />
            </LM>
        </div>
    );
}