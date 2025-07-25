import {Link} from 'react-router-dom';
import styles from './Menu.module.css';
import { motion } from 'framer-motion';

import icon1 from '../../assets/iconIdea.png';
import icon2 from '../../assets/iconDado.png';

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
      className={styles.menu}>
      
      <Link to="/tutorial" className={styles.link}>
        <button id='btn1' className={styles.info}>
          <span>Tutorial</span>
          <img src={icon1} width={"32px"}></img>
        </button>
      </Link>

      <Link to="/jogo" className={styles.link}>
        <button id='btn2' className={styles.play}>
          <span>Jogo</span>
          <img src={icon2} width={"32px"}></img>
        </button>
      </Link>

    </motion.div>
  );
}

export default Menu;
