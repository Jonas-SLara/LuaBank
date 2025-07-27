import Main from "../../Components/Main/Main";
import Menu from "../../Components/Menu/Menu";
import Header from "../../Components/Header/Header";
import InputEnter from "../../Components/Form/InputEnter";
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
