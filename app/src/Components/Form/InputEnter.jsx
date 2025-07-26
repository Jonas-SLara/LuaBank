import styles from "./Form.module.css";
import stylesG from "../../styles/common.module.css";
import { useContext, useState } from "react";
import { playerContext } from "../../context/playerContext";

function InputEnter(){
    const [nameInput, setInputName] = useState(null);
    const {setName} = useContext(playerContext);

    //trata a entrada do nome do jogador
    const handleInput = (e)=>{
        //bloqueia o comportamento padrão do submit de recaregamento
        e.preventDefault();
        if(nameInput.trim()){
            setName(nameInput);
            console.log(`valor recebido ${nameInput}`);
        }
    }

    return(
    <form className={styles.form} onSubmit={handleInput}>

        <input 
        type="text"
        placeholder="Seu Nome"
        onChange={ (e)=>{setInputName(e.target.value); console.log(nameInput);}}
        className={stylesG.input}
        />
        <button type="submit">Entrar</button>
    </form>
    );
}

export default InputEnter;