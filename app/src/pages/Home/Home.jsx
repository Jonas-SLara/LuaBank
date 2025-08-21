import Fundo from "./components/Fundo/Fundo"; 
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";

/*Menu enter para renderizar as opções de jogo */
function Home(){
  const b1 = "/city.png";
  return(
    <>
      <Header/>
      <Fundo bannerURL={b1}>
        <Menu/>
      </Fundo>          
    </>
  );
}

export default Home;
