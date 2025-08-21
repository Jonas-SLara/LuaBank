import styles from './Header.module.css';
import stylesG from '../../../../styles/common.module.css'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import seta from '/game/icon-park-twotone_next.png';

function Header({goBack}){

  return(
    <motion.nav initial="hidden" animate="visible"
    variants={{
      hidden: {
        opacity: 0,
        top: "-10px"
      },
      visible: {
        top: "0px",
        opacity: 1,
        transition:{
          duration: 0.5
        }
      },
    }}

    className={styles.nav}>
      {/*Logo do dado*/}
      <div className={styles.logo}>
        <img src="/game/iconDado.png" alt="Logo do Dado" />
      </div>
      <div className={styles.titulo}>
       <h1>BANCO IMOBILIÁRIO</h1>       
      </div>
    </motion.nav>
  );
}

export default Header;
