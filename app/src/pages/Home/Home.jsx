import Main from "../../Components/Main/Main";
import Menu from "../../Components/Menu/Menu";
import logo from "../../../public/dices2.png";

function Home(){
  const b1 = "../../../public/city.png";
  return(
    <>
      <Main bannerURL={b1}>
        <Menu></Menu>
      </Main>          
    </>
  );
}

export default Home;
