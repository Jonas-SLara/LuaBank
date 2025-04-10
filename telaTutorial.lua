local estruturas = require "util.estruturas"

local TelaTutorial = {}

local index_card = 1 --variavel para guardar o indice da carta que esta na tela
--estrutura para criar as cards de informações

TelaTutorial.cards={}
--estrutura para armazenar os botões da tela
TelaTutorial.btn={}

function TelaTutorial.carregar_Tutorial()
   local carregando = true
    local imagens = {
        dica1 = "img/dica.png",
        dica2 = "img/dica.png",
        dica3 = "img/dica.png",
        dica4 = "img/dica.png"
    }

    local textos = {
        dica1 = [[
                ***DICA 1***
        _________________________________
            Olá :D Bem vindo ao jogo do
        Banco Imobilário, seu objetivo
        é investir ou gastar seu
        dinheiro com responsabilidade.
        _________________________________
        ]],
        dica2 = [[
                ***DICA 2***
        __________________________________
            Quando aparecer a sua vez de 
        jogar clique no dado para realizar
        a jogada e avançar as casas
        __________________________________
        ]],
        dica3 = [[
                ***DICA 3***
        __________________________________
            Depois que você aparecera uma 
        carta na tela, leia o que ela pede
        e clique em sim ou não
        __________________________________
        ]],
        dica4 = [[
                ***DICA 4***
        __________________________________
            Cartas  podem te dar Bônus,
        Ativos, Passivos ou Problemas de 
        Montão @~@, tudo tera um preço
        __________________________________
        ]]
    }

    
    --criar as cartas
    local carta = estruturas.criarCard(textos.dica1, imagens.dica1)
    local carta2 = estruturas.criarCard(textos.dica2, imagens.dica2)
    local carta3 = estruturas.criarCard(textos.dica3, imagens.dica3)
    local carta4 = estruturas.criarCard(textos.dica4, imagens.dica4)
    --inserts
    table.insert(TelaTutorial.cards, carta)
    table.insert(TelaTutorial.cards, carta2)
    table.insert(TelaTutorial.cards, carta3)
    table.insert(TelaTutorial.cards, carta4)

    --verificar
    for index, value in ipairs(TelaTutorial.cards) do
        if not value then
            print("carta com valor nil index: "..index)
            carregando = false
        else
            print(" index: "..index.." w: "..value.larg.." h: "..value.alt)
        end
        
    end

    --definir as coordenadas de todas as cartas no centro
    
    for index, value in ipairs(TelaTutorial.cards) do
        local x, y = love.graphics.getDimensions() 
        x=(x - value.larg)/2
        y=(y - value.alt)/2
        estruturas.setCoorCard(TelaTutorial.cards[index], x, y)
    end
   
    --criar os botões de prox e ant e voltar
    local prox = estruturas.criarBotao(100, 40, 0, 0, {0.2, 0.8, 0.2, 1}, ">>>", 20)
    local ant = estruturas.criarBotao(100, 40, 0, 0, {0.2, 0.8, 0.2, 1}, "<<<", 20)
    local menu = estruturas.criarBotao(200, 40, 0, 0, {0.2, 0.9, 0.2, 1}, "Menu", 20)

    if carta==nil or prox==nil or ant ==  nil or carregando==false or menu==nil then
        return false
    end

    --definir suas coordenadas relativas a primeira carta
    estruturas.botaoSetCoord(prox, carta.coord_x + carta.larg + 20, (carta.coord_y + carta.alt - prox.h)/2)
    estruturas.botaoSetCoord(ant, carta.coord_x - prox.w - 20, (carta.coord_y + carta.alt - ant.h)/2)

    --definir coordenadas para o botao de menu
    estruturas.botaoSetCoord(menu, carta.coord_x + (carta.larg - menu.w)/2, carta.alt + carta.coord_y+20)

    table.insert(TelaTutorial.btn, prox)
    table.insert(TelaTutorial.btn, ant)
    table.insert(TelaTutorial.btn, menu)

    print("tutorial carregado: ", carregando)
    return carregando
end

function TelaTutorial.nextCard()
    index_card = (index_card == 4) and 1 or index_card + 1
end

function TelaTutorial.lastCard()
    index_card = (index_card == 1) and 4 or index_card - 1
end

function TelaTutorial.clickBtn(x, y, button)
    --percorres todos os botoes da tabela e ver se algum foi clicado
    for index, value in ipairs(TelaTutorial.btn) do
        if x > value.x and x < (value.x + value.w)
        and y > value.y and y < (value.y + value.h) then
            --agora verificar qual foi clicado
            if index == 1 then
                TelaTutorial.nextCard()
            elseif index == 2 then
                TelaTutorial.lastCard()
            elseif index == 3 then
                ESTADO = 0
            end
        end
    end
end

function TelaTutorial.desenhar()
    local carta = TelaTutorial.cards[index_card]
    estruturas.desenharCard(carta)
   
    local prox = TelaTutorial.btn[1]
    estruturas.desenharBotao(prox)
    local ant = TelaTutorial.btn[2]
    estruturas.desenharBotao(ant)
    local menu = TelaTutorial.btn[3]
    estruturas.desenharBotao(menu)
end

function TelaTutorial.ajustarElementos()
    local x, y = love.graphics.getDimensions() --obter coordenas da tela inicialmente
    local carta = TelaTutorial.cards[1]
    --definir as coordenadas de todas as cartas no centro
    x=(x - carta.larg)/2
    y=(y - carta.alt)/2
    estruturas.setCoorCard(carta, x, y)

    table.insert(TelaTutorial.cards, carta)

    --inserir os botões de prox e ant
    local prox = TelaTutorial.btn[1]
    local ant = TelaTutorial.btn[2]
    --definir suas coordenadas relativas a carta
    estruturas.botaoSetCoord(prox, carta.coord_x + carta.larg + 20, (carta.coord_y + carta.alt - prox.h)/2)
    estruturas.botaoSetCoord(ant, carta.coord_x - prox.w - 20, (carta.coord_y + carta.alt - ant.h)/2)
end

return TelaTutorial