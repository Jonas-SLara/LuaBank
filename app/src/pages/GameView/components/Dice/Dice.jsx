import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Dice.module.css";
import { getRandomDicesFaces } from "../../../../utils/utils";
import { useGame } from "../../../../context/gameContext";

function Dice() {
  //import o contexto do jogo para poder alterar o numero do dado
  const {game, setDiceNum, turn, startTurn} = useGame();

  if(!game) return;

  const gameDice = game.getDice();

  //seta a variavel para quando estiver rolando
  const [isRolling, setIsRolling] = useState(false);

  //seta a rotação do angulo de onde está a face
  const [rotation, setRotation] = useState({
    rotateX: 0,
    rotateY: 0
  });

  //quando for o turno do npc, o dado gira sózinho, para cada vez que o turno altera
  useEffect(()=>{
    if(turn === 0 && !startTurn){
      handleRoll();
    }
  }, [turn, startTurn]);

  //coordenadas de rotação de cada uma das faces
  const faceRotations = {
    1: {x: 0, y: 0},
    2: {x: 0, y: 180},
    3: {x: 0, y: 90},
    4: {x: 0, y: -90},
    5: {x: -90, y: 0},
    6: {x: 90, y: 0}
  };

  //tratar o rolamento do dado
  const handleRoll = () => {
    //seta o estado da animação de roll para true
    setIsRolling(true);

    //simular uma rotação extra
    //pega o valor escolhido pelo dado e as coordenadas da face
    const finalValue = gameDice.roll();
    const f = faceRotations[finalValue];
    const arr = getRandomDicesFaces();

    console.log("Valor do dado:", finalValue, f);

    const keyframesX = [];
    const keyframesY = [];

    for(let i= arr.length; i>0; i--){
      keyframesX.push(faceRotations[arr[i-1]].x);
      keyframesY.push(faceRotations[arr[i-1]].y)
    }
    keyframesX.push(f.x);
    keyframesY.push(f.y);
   
    setRotation({rotateX: keyframesX, rotateY: keyframesY});

     //espera a animação terminar
    setTimeout(()=>{
      setDiceNum(finalValue); //muda no contexto do game
      setIsRolling(false);
    }, 1500);
  }

  //uso do framer motion para a animação
  return (
    <div className={(!isRolling && !startTurn && turn===1) ? 
          `${styles.diceWrapper}` :
          `${styles.diceWrapper} ${styles.inactive}`
        }>
      <motion.div
        className={styles.dice}
        onClick={()=>{
          //só pode chamar a função handleRoll com click se for a vez do jogador
          //e não pode estar rolando ou já ter iniciado o turno
          //isso evita que o dado seja rolado várias vezes sem querer
          if(!isRolling && !startTurn && turn=== 1){
            handleRoll();
          }
        }}
        animate={rotation}
        transition={{ duration: 1.5 }}
      >
        <div className={`${styles.face} ${styles.front}`}>1</div>
        <div className={`${styles.face} ${styles.back}`}>2</div>
        <div className={`${styles.face} ${styles.right}`}>3</div>
        <div className={`${styles.face} ${styles.left}`}>4</div>
        <div className={`${styles.face} ${styles.top}`}>5</div>
        <div className={`${styles.face} ${styles.bottom}`}>6</div>
      </motion.div>
    </div>
  );
}

export default Dice;
