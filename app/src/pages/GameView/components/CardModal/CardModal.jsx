import { motion, spring } from "framer-motion";
import styles from "./CardModal.module.css"
import { isEvent, isHouse } from "../../../../utils/utils";
import { useGame } from "../../../../context/gameContext";
import { useEffect, useState } from "react";
import data from "../../../../data/perfis.json"; //imagens de perfil

/* 
* um modal que recebe um hook vindo do GameView toda vez que
* for o turno do jogador e ele começar a jogada em uma casa do tabuleiro
* o jogo obtem a carta do jogador na posição do tabuleiro onde o player está
* e mostra isso em um modal de opções
*/

const Overlay = motion.div;
const Modal = motion.div;

const CardModal = ({ card, setCard }) => {
    //usar o contexto do jogo para extrair e alterar informações
    const {game} = useGame();
    const [amount, setAmout] = useState();

    // hook! sempre que uma nova carta for carregada pegar alguns dados
    // relevantes para setar algumas variaveis dinamicas na tela do modal
    useEffect(() => {
        if(game && card){
            setAmout(game.getInfoPlayerHouse(card, 1).amount);
        }
    }, [card]);

    if (!game || !card) return null; //não renderiza
    
     //quantidade de cotas do jogador atual abrindo o motal

    return (
        <Overlay
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
        <Modal
            className={styles.modal}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: spring, duration: 0.4, mass: 1.2 }}
        >
            {/*um botão de fechar o modal*/}
            <button 
                onClick={() => { setCard(null) }}
                className={styles.btn_modal_close}
            > 
                <span>X</span>
            </button>

            {/*card tipo House */}
        
            { isHouse(card) &&
            <div className={styles.modal_content}>
                <h2>{card.name}</h2>
                <p style={{width:"100%"}}>{card.description}</p>
                <p style={{width: "100%"}} className={styles.p_important}>COTAS</p>

                <div className={styles.model_info}>
                    <p>RESTANTES: <span>{card.uniCount}</span></p>
                    <p>VALOR UNITÁRIO: <span>{card.valueUni}</span></p>
                    <p>DIVIDENDOS: <span>{card.dividends}</span></p>
                </div>

                <p style={{width: "100%"}} className={styles.p_important}>COMPRADORES</p>
                
                <div className={styles.model_buyers}>

                    <div className={styles.model_buyer}>
                        <img 
                            src={data.perfis[game.getPlayer().getIndexPerfil()]}
                            alt="perfil player"
                            style={{width:"64px", aspectRatio: 1, borderRadius:"50%"}}
                        />
                        <div className={styles.player_box} id="totalCotasPlayer1" />
                        <p>{amount} cotas</p>                       
                    </div>

                    <div className={styles.model_buyer}>
                        <img 
                            src="/game/npc.png" 
                            alt="perfil player" 
                            style={{width:"64px", aspectRatio: 1, borderRadius:"50%"}}
                        />
                        <div className={styles.player_box} id="totalCotasPlayer0" />
                        <p>{game.getInfoPlayerHouse(card, 0).amount} cotas</p>                        
                    </div>
                </div>

                <button onClick={()=>{
                    game.controlPlayerAction(card, 1, 1);
                    setAmout(game.getInfoPlayerHouse(card, 1).amount);
                }}>
                    Comprar +1
                </button>
            </div>
            }

            {/*caso a carta seja do tipo evento*/}
            { isEvent(card) &&
            <div className={styles.modal_content}>

            </div>
            }
            
        </Modal>
        </Overlay>
    );
}

export default CardModal;