import icon1 from '/game/iconIdea.png';
import icon2 from '/game/iconDado.png';
import icon3 from '/game/iconAvatar1.png';
import { Link } from 'react-router-dom';
import styles from './ListButtons.module.css';
import { motion, spring } from 'framer-motion';

const LinkMotion = motion(Link);

const ListButtons = () => {
    return (
        <>
            <motion.div className={styles.linkContainer}
                initial={{ opacity: 0, y: -20, scale: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1}}
                exit={{ opacity: 0, y: 20 }}
                transition={{ type: spring, duration: 0.6, delay: 0.3 }}
            >
                <LinkMotion
                    to="/novo-jogo"
                    className={`${styles.play} ${styles.link}`}
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #000000" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: spring, duration: 0.6 }}
                >
                    <span>NOVO JOGO</span>
                    <img src={icon2} width={"32px"}></img>
                </LinkMotion>
            </motion.div>

            <motion.div className={styles.linkContainer}
                initial={{ opacity: 0, y: -20, scale: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1}}
                exit={{ opacity: 0, y: 20 }}
                transition={{ type: spring, duration: 0.6, delay: 0.6 }}
            >
                <LinkMotion
                    to="/jogos-salvos"
                    className={`${styles.save} ${styles.link}`}
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #000000" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: spring, duration: 0.6 }}
                >
                    <span>JOGOS SALVOS</span>
                    <img src={icon3} width={"32px"}></img>
                </LinkMotion>
            </motion.div>

            <motion.div className={styles.linkContainer}
                initial={{ opacity: 0, y: -20, scale: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1}}
                exit={{ opacity: 0, y: 20 }}
                transition={{ type: spring, duration: 0.6, delay: 0.9 }}
            >
                <LinkMotion
                    to="/tutorial"
                    className={`${styles.info} ${styles.link}`}
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #000000" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: spring, duration: 0.6 }}
                >
                    <span>TUTORIAL</span>
                    <img src={icon1} width={"32px"}></img>
                </LinkMotion>
            </motion.div>
        </>
    )
}

export default ListButtons;