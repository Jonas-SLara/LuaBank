import { useEffect, useState } from "react";
import {usePlayer} from '../../context/playerContext';

import styles from "./Perfil.module.css";

import p1 from "/perfils/perfil1.png";
import p2 from "/perfils/perfil2.png";
import p3 from "/perfils/perfil3.png";
import p4 from "/perfils/perfil4.png";
import p5 from "/perfils/perfil5.png";
import p6 from "/perfils/perfil6.png";

const perfis = [p1, p2, p3, p4, p5, p6];


export default function Perfil(){
    //obtem jogador para salvar o index da imagem no player
    const {player} = usePlayer();

    //altera a imagem para a próxima com um clique
    const [index, setIndex] = useState(player.getIndexPerfil());
    
    //quando muda o index, salva no perfil
    useEffect(()=>{
        player.setIndexPerfil(index);
    }, [index, player]);

    return(
        <img
        className={styles.perfil}
        src={perfis[index]}
        alt={"perfil"}
        onClick={ () => {setIndex( (index+1)%6 );} }
        />
    );
}