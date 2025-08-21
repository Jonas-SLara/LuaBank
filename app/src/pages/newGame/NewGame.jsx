import Fundo from "../Home/components/Fundo/Fundo";
import Return from "./components/Return/Return";
const b1 = "/city.png";

const NewGame = ()=>{
    return(
        <>
            <Return/>
            <Fundo bannerURL={b1}></Fundo>
        </>
    )
}

export default NewGame;