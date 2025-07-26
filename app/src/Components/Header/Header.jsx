import styles from './Header.module.css';
import stylesG from '../../styles/common.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import seta from '../../assets/icon-park-twotone_next.png';

function Header({page}){
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
    
    className={`${styles.nav} ${stylesG.around}`}>
      
      {/*seta de navegação para voltar para a home quando a página não foro menu */}
      <div>
      { page !== "menu" &&
          <Link to={"/"} className={styles.link}>
                <img src={seta} width={"32px"}/>
          </Link>
      }
      </div> 

      {/* titulo do cabeçalho sempre padrão */}
      <div className={styles.titulo}>
       <span>Banco Imobiliario</span>       
      </div>

      {/*Botão de encerrar o jogo, vai aparecer somente quando tiver ná página do jogo */}
      <div>
      {
        page === "jogo" &&
          <Link 
          to={"/"} 
          className={`${stylesG.button} ${stylesG.close} ${stylesG.link}`}
          >
            Encerrar
          </Link>
      }
      </div>
    </motion.nav>
  );
}

export default Header;
