import { spring, motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Leave.module.css";

const LinkMotion = motion(Link);

const Leave = ()=>{
    return (
        <LinkMotion
            to={"/"}
            className={styles.leaveButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: spring, duration: 0.2 }}
        >
            <span>SAIR</span>
            <img src="/game/iconGo.png" alt="leave" />
        </LinkMotion>
    );
}

export default Leave;