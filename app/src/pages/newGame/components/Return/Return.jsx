import icon from "/game/iconGo.png";
import styles from "./Return.module.css";
import {Link} from "react-router-dom";
import {motion} from "framer-motion"

const LinkMotion = motion(Link);
const Return = () => {
    return (
       <LinkMotion to="/" className={styles.return}
       initial={{ opacity: 0, left: "-100%" }}
       animate={{ opacity: 1, left: "0.5rem" }}
       exit={{ opacity: 0 }}
       transition={{ type: "spring", duration: 0.5, mass: 0.5 }}
       >
        <span>VOLTAR</span>
        <img src={icon}/>
       </LinkMotion>
    );
}

export default Return;
