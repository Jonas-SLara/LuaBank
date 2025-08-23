import Fundo from "./components/Fundo/Fundo"; 
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import ListButtons from "./components/ListButtons/ListButtons";

function Home(){
  const b1 = "/city.png";
  return(
    <>
      <Header titulo="BANCO IMOBILIÁRIO"/>
      <Fundo bannerURL={b1}>
        <Menu>
          <ListButtons/>
        </Menu>
      </Fundo>          
    </>
  );
}

export default Home;
