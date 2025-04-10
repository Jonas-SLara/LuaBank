--gerenciador de estados 0-menu -1jogo 2-tutorial
ESTADO = 0


--local love = require("love") necessito amor para programar
local telaMenu = require("telaMenu")
local telaJogo  = require("telaJogo")
local telaTutorial = require("telaTutorial")

function love.load()
    --CONSTANTES PARA O OBJETO JANELA
    LARGURA_JANELA = 800
    ALTURA_JANELA = 600
    TITULO_JANELA = "Banco Imobilario"

   love.window.setMode(LARGURA_JANELA, ALTURA_JANELA, {
      resizable = true,
      vsync = 1,
      minwidth=LARGURA_JANELA/2,
      minheight=LARGURA_JANELA/2
   })
   love.window.setTitle(TITULO_JANELA)
   angulo_GradientMenu = 90
   aumentar_angulo = true

   telaMenu.carregarTela()
   telaTutorial.carregar_Tutorial()
end

function love.update(dt)
   if ESTADO==0 then
      angulo_GradientMenu, aumentar_angulo =
         telaMenu.animacaoDaTelaMenu(angulo_GradientMenu, dt, aumentar_angulo)
   elseif ESTADO==1 then

   end
end

function love.draw()
   if ESTADO==0 then
      telaMenu.desenharFundo({0.3,0.2,0.6,1}, {0.4,0.27,0.8,1}, angulo_GradientMenu)

      love.graphics.setColor(1, 1, 1, 1)
      telaMenu.desenharPorco()

     love.graphics.setColor(1, 1, 1, 1)
     telaMenu.desenharBotoes()
   elseif ESTADO==1 then

      --love.graphics.print("tela de jogo")
   elseif ESTADO==2 then
      telaMenu.desenharFundo({0.2, 0.15, 0.5, 1}, {0.3, 0.2, 0.6, 1}, angulo_GradientMenu)
      love.graphics.setColor(1,1,1,1)
      telaTutorial.desenhar()
      --love.graphics.print("tela de tutorial")
   elseif  ESTADO==3 then
      print("saiu do jogo")
      love.event.quit()
   end
end

--funçao do love2d para pegar as dados do mouse quando um evento click do mouse acontece  
function love.mousepressed(x, y, button)
   if ESTADO == 0 then
      print("mouse clicou na tela de menu")
      telaMenu.mouseClicado(x, y, button)
   elseif ESTADO==1 then
      print("mouse clicou na tela de jogo")
   elseif ESTADO==2 then
     print("mouse clicado na tela de tutorial")
     telaTutorial.clickBtn(x, y, button)
   end
end

--funçao para uma responsividade magica com callbacks
function love.resize(w, h)
   if ESTADO == 0 then
      telaMenu.ajustarElementos()
   elseif ESTADO==1 then
     
   elseif ESTADO==2 then
      telaTutorial.ajustarElementos()
   end
end