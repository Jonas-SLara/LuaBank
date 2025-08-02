import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import styles from './Menu.module.css';
import stylesG from '../../styles/common.module.css';
import { motion } from 'framer-motion';
import { usePlayer } from '../../context/playerContext';


import icon1 from '/game/iconIdea.png';
import icon2 from '/game/iconDado.png';
const LinkMotion = motion(Link);


function Menu(){
  const {player} = usePlayer();
  const [enable, setEnable]= useState(false);

  //hook para setar o estado do menu se existir um player ou não
  useEffect(()=>{
    if(player){
      setEnable(true); //fica habilitado quando existir
    } else{
      setEnable(false); //fica desabilitado quando não tiver
    }
  }, [player]);

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
      className={`${stylesG.rowCenter} ${styles.menu}`}>
      
      <LinkMotion 
      to="/tutorial" 
      className={`${stylesG.button} ${stylesG.info} ${styles.link}`}
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #000000" }}
      whileTap={{ scale: 0.95 }}
      transition={{duration: 0.6}}
      style={{
          pointerEvents: !enable ? "none" : "auto",
          opacity: !enable ? 0.5 : 1
      }}
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
      style={{
          pointerEvents: !enable ? "none" : "auto",
          opacity: !enable ? 0.5 : 1
      }}
      >
          <span>Jogo</span>
          <img src={icon2} width={"32px"}></img>
      </LinkMotion>

    </motion.div>
  );
}

export default Menu;
