import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Dice.module.css";
import { getRandomDicesFaces } from "../../../../utils/utils";
import { useGame } from "../../../../context/gameContext";

function Dice() {
  //import o contexto do jogo para poder alterar o numero do dado
  const {game, setDiceNum, turn, startTurn, setStartTurn} = useGame();
  if(!game) return;

  const gameDice = game.getDice();

  //seta a variavel para quando estiver rolando
  const [isRolling, setIsRolling] = useState(false);
  //seta a rotação do angulo de onde está a face
  const [rotation, setRotation] = useState({
    rotateX: 0,
    rotateY: 0
  });


  //coordenadas de rotação de cada uma das faces
  const faceRotations = {
    1: {x: 0, y: 0},
    2: {x: 0, y: 90},
    3: {x: 90, y: 0},
    4: {x: -90, y: 0},
    5: {x: 0, y: -90},
    6: {x: 100, y: 0}
  };

  //tratar o rolamento do dado
  const handleRoll = () => {
    //se estiver rolando ou não for sua vez ou não terminou o seu turno então nao gira
    if(isRolling || startTurn || turn!== 1) return;

    //seta o estado da animação de roll para tru
    setIsRolling(true);

    //simular uma rotação extra
    //pega o valor escolhido pelo dado e as coordenadas da face
    const finalValue = gameDice.roll();
    const f = faceRotations[finalValue];
    const arr = getRandomDicesFaces();

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
      setStartTurn(true);
    }, 1500);
  }

  //uso do framer motion para a animação
  return (
    <div className={styles.diceWrapper}>
      <motion.div
        className={styles.dice}
        onClick={handleRoll}
        animate={rotation} 
        transition={{ duration: 1.5}} 
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
