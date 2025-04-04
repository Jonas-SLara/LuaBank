local estruturas = {}
--[[
    aqui contem todas as funções para criar estruturas que vamos utilizar ao longo do projeto com tabelas
    que são as unicas estruturas de dados em lua, estas funções retornarao referencias para a uma estrutura
    que devera ser guardada em um arquivo como os botoes da tela de menu e os sprites da tela de jogo
]]--

--w, h = (largura e altura do botao)
--x , y = (coordenadas do botão na tela)
--cor, texto, font = (cor do botao, texto do botão, tipo de fonte)
function estruturas.criarBotao(w, h, x, y, cor, texto, tFont)
    tFont = tFont or 16
    local botao = {
        w = w,
        h = h,
        x = x,
        y = y,
        cor = cor or {1, 1, 1},
        texto = texto or "",
        font = love.graphics.newFont(tFont)
    }
    print("um novo botao -"..texto.."- foi criado na memoria\n")
    return botao
end

--desenhara o botao em x,y mas caso nao seja especificado desenhe nas coordenadas do botao
function estruturas.desenharBotao(botao)
    love.graphics.setColor(botao.cor)--inicializa cor
    love.graphics.rectangle("fill", botao.x, botao.y, botao.w, botao.h)--cria um retangulo
    --centraliza o texto no botao de acordo com o tamanho da fonte dele que veio do love2d
    love.graphics.setFont(botao.font)
    local textow = botao.font:getWidth(botao.texto)
    local textoh = botao.font:getHeight(botao.texto)
    love.graphics.setColor(0,0,0,1)
    love.graphics.print(botao.texto, botao.x + (botao.w - textow) / 2, botao.y + (botao.h - textoh) / 2)
end

--caminhoImagem = (caminho e nome do arquivo)
--sx, sy = (coordenadas x e y do corte na imagem)
--sw,sh = (largura e altura do corte)
function estruturas.criarSprite(caminhoImagem, sx, sy, sw, sh)

    --verifica se o arquivo existe primeiro
    if not love.filesystem.getInfo(caminhoImagem) then
        print("err: arquivo não encontrado")
        return nil
    end
    --cria o objeto imagem na memoria e salva em uma referencia para ele
    local ref = {
            imagem = love.graphics.newImage(caminhoImagem),
            quadros = {}
    }
    --cria um quadro pra imagem, por padrao cria um quadro do todo da imagem
    sx = sx or 0
    sy = sy or 0
    sw = sw or ref.imagem:getWidth()
    sh = sh or ref.imagem:getHeight()
    local quadro = love.graphics.newQuad(sx, sy, sw, sh, ref.imagem:getDimensions())
    table.insert(ref.quadros, quadro)--o quadro pode ser acessado com indices posteriormente
    print("nova imagem criada: "..caminhoImagem.." "..ref.imagem:getHeight().."X"..ref.imagem:getWidth())
    return ref --esta referencia devera ser guardada em um lugar para armazenar imagens
end

--desenha a imagem na tela com base em uma referencia de uma imagem na memoria
function estruturas.desenharSpriteTela(ref_imagem, i_quadro, x, y) 
    i_quadro = i_quadro or 1
    x, y = x or 0, y or 0

    if not ref_imagem then
        print("Erro: referência de imagem inválida!")
        return false
    end
    
    local quadro = ref_imagem.quadros[i_quadro]
    if not quadro then
        print("Erro: quadro da imagem não encontrado!")
        return false
    end

    love.graphics.draw(ref_imagem.imagem, quadro, x, y)
    return true
end

--apenas os parametros das dimensões ja serao padronizados
function estruturas.criarCard(texto, ref_imgl, cor1, cor2, w,h)
    ref_imgl = ref_imgl or nil --imagem que ficara no topo da carta
    cor1 = cor1 or {0, 0, 0, 0.9}--cor que ficara na borda dos textos e na carta
    cor2 = cor2 or {0.9, 0.9, 0.9, 1} --cor de preenchimento da maioria da carta
    w = w or 300 --tamanho minimo da carta tambem sera 300px
    h= h or w*1.3 --y tera 1/3 vezes o tamanho de x
    local novo = {
        larg = w,
        alt = h,
        cont=texto,
        img=ref_imgl,
        cor_bordas = cor1,
        cor_fundo = cor2
    }
    return novo --retorna ponteiro para a nova carta criada na memoria
end

--ref_card  uma referencia para o objeto carta, x e y são as coordenadas
function estruturas.desenharCard(ref_card, x, y)
    local w, h = love.window.getMode()--obtem a largura e altura da janela
    --por padrao centraliza a carta no meio
    x = x or (w - ref_card.larg)/2
    y = y or (h - ref_card.alt)/2
    if not ref_card then
        print("nao exite este objeto carta ainda na memoria, referencia invalida")
        return false
    end
    love.graphics.setColor(ref_card.cor_fundo)
end

function estruturas.criar_casa_do_tabuleiro()
    local casa = {
        propiedade = {
            preco = nil,
            aluguel = nil,
            nome = nil,
            comprada = false,
            tipo = nil
        },

        posicao = nil

    }
    return casa
end

return estruturas