import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import seta from '../../assets/icon-park-twotone_next.png';
import { motion } from 'framer-motion';

function Header(){
  return(
    <motion.nav initial="hidden" animate="visible"
    variants={{
      hidden: {
        top: "-10px"
      },
      visible: {
        top: "0px",
        transition:{
          duration: 0.5
        }
      },
    }}
    
    className={styles.nav}>
      <Link to={"/"} className={styles.link}>
        <img src={seta} width={"32px"}/>
      </Link>
    </motion.nav>
  );
}

export default Header;
