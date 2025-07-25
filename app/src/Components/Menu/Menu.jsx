import {Link} from 'react-router-dom';
import styles from './Menu.module.css';
import stylesG from '../../styles/common.module.css';
import { motion } from 'framer-motion';

import icon1 from '../../assets/iconIdea.png';
import icon2 from '../../assets/iconDado.png';
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
      className={`${stylesG.center} ${styles.menu}`}>
      
      <LinkMotion 
      to="/tutorial" 
      className={`${stylesG.button} ${stylesG.info} ${styles.link}`}
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #000000" }}
      whileTap={{ scale: 0.95 }}
      transition={{duration: 0.6}}
      >
          <span>Tutorial</span>
          <img src={icon1} width={"32px"}></img>
      </LinkMotion>

      <LinkMotion
      to="/jogo" 
      className={`${stylesG.button} ${stylesG.play} ${styles.link}`}
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #000000" }}
      whileTap={{ scale: 0.95 }}
      transition={{duration: 0.6}}
      >
          <span>Jogo</span>
          <img src={icon2} width={"32px"}></img>
      </LinkMotion>

    </motion.div>
  );
}

export default Menu;
