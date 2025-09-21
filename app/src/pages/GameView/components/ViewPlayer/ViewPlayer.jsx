import { section } from "framer-motion/client";
import stylesG from "../../../../styles/common.module.css"
import styles from "./ViewPlayer.module.css";
import { motion } from "framer-motion";
import data from "../../../../data/perfis.json";
const VMotion = motion(section);

//o estilo pode mudar se for o turno do jogador com o active
//o jogador que for tipo npc tem uma foto de perfil determinada
function ViewPlayer({player, active}){
    return(
        <VMotion 
        initial={{x: -100, scale: 0.5}}
        animate={{x: 0, scale: 1}}
        transition={{duration: 0.5}}
        className={active ? styles.viewActive : styles.view}>
            <img
                className={stylesG.perfil}
                src={
                    player.isNpc() ?
                    "game/npc.png"
                    : data.perfis[player.getIndexPerfil()]
                }
                alt={"perfil"}
            /><br/>
            <span>{player.getName()}</span><br/>
            <p>Saldo: <span>{player.getCount()}</span></p>
            <p>Patrimônio: <span>{player.getPatrimonio()}</span></p>
        </VMotion>
    );
}

export default ViewPlayer