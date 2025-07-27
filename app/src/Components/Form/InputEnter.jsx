import styles from "./Form.module.css";
import stylesG from "../../styles/common.module.css";

import { useState } from "react";
import { usePlayer } from "../../context/playerContext";
import Perfil from "../Perfil/Perfil";

function InputEnter(){
    const [nameInput, setInputName] = useState(null);
    const { player, createPlayer, resetPlayer } = usePlayer();

    //trata a entrada do nome do jogador
    const handleInput = (e)=>{
        //bloqueia o comportamento padrão do submit de recaregamento
        e.preventDefault();
        const namePlayer = nameInput.trim();
        if(!namePlayer){
            console.log("nome está vazio");
            return;
        }

        //se não existe um jogador
        if(!player){
            console.log("criando player");
            createPlayer(nameInput); //setPlayer é assincrono
        }else{
            player.setName(nameInput);
        }
    }

    //se existir um player, deletar para iniciar um novo jogo(opcional)
    const deletarPlayer = () => {
        if(player){
            console.log("excluindo Player");
            resetPlayer();
        }
        console.log("player null");
    }

    return(
    <form className={styles.form} onSubmit={handleInput}>
        
        { player != null && <Perfil/>}

        <input 
        id="in1"
        type="text"
        placeholder="Seu Nome"
        onChange={ (e)=>{setInputName(e.target.value);} }
        className={stylesG.input}
        />

        <button type="submit" 
        className={`${stylesG.button} ${stylesG.secure}`} >
            Entrar
        </button>

        {   
            //botão de deletar aparece quando tem player
            player &&
            <button type="button" onClick={deletarPlayer}
            className={`${stylesG.button} ${stylesG.close}`}>
                Deletar
            </button>
        }
    </form>
    );
}

export default InputEnter;