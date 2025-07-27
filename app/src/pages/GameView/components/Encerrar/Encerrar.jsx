import { Link } from "react-router-dom";
import stylesG from "../../../../styles/common.module.css";

//componente prório da tela de jogo para encerrar o jogo e salvar o progresso
function Encerrar(){
    return(
        <Link 
        to={"/"} 
        className={`${stylesG.button} ${stylesG.close} ${stylesG.link}`}>
            Encerrar
        </Link>
    );
}

export default Encerrar;