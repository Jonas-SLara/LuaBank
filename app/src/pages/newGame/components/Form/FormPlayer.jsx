import styles from "./Form.module.css";
import { useState } from "react";
import { usePlayer } from "../../../../context/playerContext";

function FormPlayer() {
    const [nameInput, setInputName] = useState(null);
    const { player, createPlayer, resetPlayer } = usePlayer();

    //trata a entrada do nome do jogador
    const handleInput = (e) => {
        //bloqueia o comportamento padrão do submit de recaregamento
        e.preventDefault();
        const namePlayer = nameInput.trim();
        if (!namePlayer) {
            console.log("nome está vazio");
            return;
        }

        //se não existe um jogador
        if (!player) {
            console.log("criando player");
            createPlayer(nameInput);
        } else {
            player.setName(nameInput);
        }
    }

    //se existir um player, deletar para iniciar um novo jogo(opcional)
    const deletarPlayer = () => {
        if (player) {
            console.log("excluindo Player");
            resetPlayer();
        }
        console.log("player null");
    }

    return (
        <form className={styles.form} onSubmit={handleInput}>
            <label htmlFor="in1">JOGADOR: </label>
            <input
                id="in1"
                type="text"
                placeholder="Nome"
                onChange={(e) => { setInputName(e.target.value); }}
                required
                className={styles.input}
            />
            
            {
            //se não tiver um jogador ainda só mostra a opção de criar
            !player &&
            <button type="submit"
                className={`${styles.button} ${styles.secure}`} >
                ENTRAR
            </button>
            }

            {
                //botão de deletar aparece quando tem player
                player &&
                <button type="button" onClick={deletarPlayer}
                    className={`${styles.button} ${styles.reset}`}>
                    DESFAZER
                </button>
            }
        </form>
    );
}

export default FormPlayer;