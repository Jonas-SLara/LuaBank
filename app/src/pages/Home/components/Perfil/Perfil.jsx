import { useEffect, useState } from "react";
import {usePlayer} from '../../../../context/playerContext';

import stylesG from "../../../../styles/common.module.css";
import data from "../../../../data/perfis.json";
const perfis = data.perfis;


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
        className={stylesG.perfil}
        src={perfis[index]}
        alt={"perfil"}
        onClick={ () => {setIndex( (index+1)%6 );} }
        />
    );
}