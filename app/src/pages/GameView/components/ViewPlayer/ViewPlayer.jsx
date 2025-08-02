import { section } from "framer-motion/client";
import stylesG from "../../../../styles/common.module.css"
import styles from "./ViewPlayer.module.css";
import { motion } from "framer-motion";

import {perfis} from "../../../../Components/Perfil/Perfil";

const VMotion = motion(section);

function ViewPlayer({player}){
    return(
        <VMotion 
        initial={{x: -100, scale: 0.5}}
        animate={{x: 0, scale: 1}}
        transition={{duration: 0.5}}
        className={styles.view}>
            <img
                className={stylesG.perfil}
                src={perfis[player.getIndexPerfil()]}
                alt={"perfil"}
            />
            <span>{player.getName()}</span><br/>
            <span>{player.getCount()}</span>
        </VMotion>
    );
}

export default ViewPlayer