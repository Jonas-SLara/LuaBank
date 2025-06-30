const tutorial = document.getElementById('tutorial');
const voltar = document.getElementById('voltar');
const sair = document.getElementById('sair');
const jogar = document.getElementById('jogar');

const iniciar = ()=>{
    if(voltar){
        voltar.addEventListener("click", ()=>{
            window.location = "../index.html";
        });
    }
    if(tutorial){
        tutorial.addEventListener("click", ()=>{
            window.location = "./pages/tutorial.html";
        });
    }
    if(jogar){
        jogar.addEventListener("click", ()=>{
            window.location = "./pages/jogo.html";
        });
    }
}

iniciar();