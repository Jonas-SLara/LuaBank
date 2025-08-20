import Main from "./components/Fundo/Fundo"; 
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import InputEnter from "./components/Form/InputEnter";
function Home(){
  const b1 = "/city.png";
  return(
    <>
      <Header page="menu"/>
      <Main bannerURL={b1}>
        <InputEnter></InputEnter>
        <Menu></Menu>
      </Main>          
    </>
  );
}

export default Home;
