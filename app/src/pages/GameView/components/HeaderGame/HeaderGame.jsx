import { Link } from "react-router-dom";
import seta from "/game/icon-park-twotone_next.png";
import bank from "/game/iconBank.png";
import styles from "./HeaderGame.module.css";
import stylesG from "../../../../styles/common.module.css";

const HeaderGamer = ()=>{
    return (
        <header className={`${styles.header}`}>
            <Link to={"/"}
            className={styles.op} >
                <img src={seta} 
                alt="Voltar"/>
            </Link>

            <h1 className={styles.title}>Banco Imobiliario</h1>

            <button 
            style={{width: "150px"}}
            className={`${stylesG.button} ${stylesG.atention} ${styles.op}`}>
                <h3>BANCO</h3>
                <img src={bank}
                alt={"Banco"}
                style={{width: "32px"}} />
            </button>
        </header>
    );
}

export default HeaderGamer