import styles from './Menu.module.css';
import { motion } from 'framer-motion';

function Menu({children, spaceBetween=false}){
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
      className={!spaceBetween ? `${styles.menu}` : `${styles.menu} ${styles.noSpace}`}>
        {children}
    </motion.div>
  );
}

export default Menu;
