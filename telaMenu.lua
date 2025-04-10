--aqui é implementado todo o módulo da  tela de menu inicial do jogador
local Tela_menu= {}
local estruturas = require("util.estruturas")
local shaders = require("util.shaders")

--estrutura de dados para armazenar os botoes
Tela_menu.btns={}
--estruturas de dados para armazenar as imagens
Tela_menu.imgs={}
--carregando shaders
local shaderGradiente = shaders.shaderGradiente
local colorKeyShader = shaders.colorKeyShader

--inicializa a tela de menu carregando todos os elementos a serem renderizados
function Tela_menu.carregarTela()
    --criar botoes e depois definir suas posiçoes dinamicamente
    local w, h = 200, 50
    table.insert(Tela_menu.btns, estruturas.criarBotao(
        w, h, 0, 0, {0.2, 0.6, 1}, "JOGAR", 20
    ))
    table.insert(Tela_menu.btns, estruturas.criarBotao(
        w, h, 0, 0, {0.2, 0.8, 0.6}, "TUTORIAL", 20
    ))

    table.insert(Tela_menu.btns, estruturas.criarBotao(
        w, h, 0, 0, {0.8, 0.2, 0.4}, "SAIR", 20
    ))

    

    table.insert(Tela_menu.imgs, estruturas.criarSprite("img/porco.jpg"))

    --inicicializando as coordenadas  dos elementos na tela
    for i, botao in ipairs(Tela_menu.btns) do
        local x,y = love.graphics.getDimensions()
        x = (x - botao.w)/2
        y = (y - botao.h)/2 + botao.h*(i-1) + (i-1)*10
        estruturas.botaoSetCoord(botao, x, y)
    end

    local x, y = love.graphics.getDimensions()
    local porco = Tela_menu.imgs[1]
    estruturas.spritesSetCoord(porco, (x-porco.imagem:getWidth())/2, (y-porco.imagem:getHeight())/2)
end


--função para desenhar a tela de fundo com animaçao de particulas
function Tela_menu.desenharFundo(cor1, cor2, angulo)
    --obtendo e normalizando um vetor com base no angulo dado
    local dirX = math.cos(angulo)
    local dirY = math.sin(angulo)
    local comprimento = math.sqrt(dirX^2 + dirY^2)
    dirX, dirY = dirX/comprimento, dirY/comprimento

     -- Configura o shader
    shaderGradiente:send("direcao", {dirX, dirY})
    shaderGradiente:send("cor1", cor1)
    shaderGradiente:send("cor2", cor2)

    -- Aplica e desenha
    love.graphics.setShader(shaderGradiente)--começa a usar o shader para desenhar
    love.graphics.rectangle("fill", 0, 0, love.graphics.getWidth(), love.graphics.getHeight())
    love.graphics.setShader()--termina de usar o shader para desenhar outras coisas
end

function Tela_menu.animacaoDaTelaMenu(angulo, dt, aumentar)
    if angulo > 180 and aumentar then
        aumentar = false
    elseif angulo < 45 and not aumentar then
        aumentar = true
    end
    angulo = (aumentar) and angulo + dt*2 or angulo - dt*2
    return angulo, aumentar
end

function Tela_menu.desenharBotoes()
    local borda = 5
    for _, botao in ipairs(Tela_menu.btns) do
        --desenharborda do botao primeiro
        love.graphics.setColor(0, 0, 0, 0.8)
        love.graphics.rectangle("fill", botao.x - borda, botao.y - borda,
            botao.w + borda, botao.h + borda)
        estruturas.desenharBotao(botao)
    end
end

function Tela_menu.desenharPorco()
    local ref_imagem = Tela_menu.imgs[1]

 
    if ref_imagem then
        shaders.colorKeyShader:send("keycolor", {1.0, 1.0, 1.0})
        shaders.colorKeyShader:send("tolerancia", 0.2)
        love.graphics.setShader(colorKeyShader)
        estruturas.desenharSpriteTela(ref_imagem, 1)
        love.graphics.setShader()
    else
        print("Erro: imagem não carregada corretamente!")
        return false
    end
end

function Tela_menu.mouseClicado(x, y, button)
    if button == 1 then
        for _, btn in ipairs(Tela_menu.btns) do
            if x >= btn.x and x <= btn.x + btn.w and
            y >= btn.y and y <= btn.h + btn.y then
                if btn.texto == "JOGAR" then
                    print("mouse clicou em jogar")
                    ESTADO = 1
                    print(ESTADO)
                elseif btn.texto == "TUTORIAL" then
                    print("mouse clicou em tutorial")
                    ESTADO = 2
                    print(ESTADO)
                elseif btn.texto == "SAIR" then
                    ESTADO = 3
                end
            end
        end
    end
end

function Tela_menu.ajustarElementos()
    --ajusta imagem no centro
    local x, y = love.graphics.getDimensions()
    local porco = Tela_menu.imgs[1]
    estruturas.spritesSetCoord(porco, (x-porco.imagem:getWidth())/2, (y-porco.imagem:getHeight())/2)
    --ajusta botoes no centro
    for i, botao in ipairs(Tela_menu.btns) do
        local x,y = love.graphics.getDimensions()
        x = (x - botao.w)/2
        y = (y - botao.h)/2 + botao.h*(i-1) + (i-1)*10
        estruturas.botaoSetCoord(botao, x, y)
    end
    print("elemento da tela de menu foram ajustados")
end

return Tela_menu --retorna o modulo com todas as suas funções e variaveis para o programa que chamou

