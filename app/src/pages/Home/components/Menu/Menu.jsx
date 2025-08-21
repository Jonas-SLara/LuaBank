import {Link} from 'react-router-dom';
import styles from './Menu.module.css';
import { motion } from 'framer-motion';


import icon1 from '/game/iconIdea.png';
import icon2 from '/game/iconDado.png';
import icon3 from '/game/iconAvatar1.png';
const LinkMotion = motion(Link);


function Menu(){
  return(
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={{
        hidden:{
          scale: 0.8,
          opacity: 0
        },
        visible:{
          scale: 1,
          opacity: 1,
          transition:{
            delay: 0.4,
            duration: 0.5
          }
        },
      }}
      className={`${styles.menu}`}>

      <LinkMotion
      to="/novo-jogo" 
      className={`${styles.play} ${styles.link}`}
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #000000" }}
      whileTap={{ scale: 0.95 }}
      transition={{duration: 0.6}}
      >
          <span>NOVO JOGO</span>
          <img src={icon2} width={"32px"}></img>
      </LinkMotion>

      <LinkMotion
      to="/jogos-salvos" 
      className={`${styles.save} ${styles.link}`}
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #000000" }}
      whileTap={{ scale: 0.95 }}
      transition={{duration: 0.6}}
      >
          <span>JOGOS SALVOS</span>
          <img src={icon3} width={"32px"}></img>
      </LinkMotion>

      <LinkMotion 
      to="/tutorial" 
      className={`${styles.info} ${styles.link}`}
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #000000" }}
      whileTap={{ scale: 0.95 }}
      transition={{duration: 0.6}}
      >
          <span>TUTORIAL</span>
          <img src={icon1} width={"32px"}></img>
      </LinkMotion>

    </motion.div>
  );
}

export default Menu;
