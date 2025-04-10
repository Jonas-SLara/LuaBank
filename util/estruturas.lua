local estruturas = {}
--[[
    aqui contem todas as funções para criar estruturas que vamos utilizar ao longo do projeto com tabelas
    que são as unicas estruturas de dados em lua, estas funções retornarao referencias para a uma estrutura
    que devera ser guardada em um arquivo como os botoes da tela de menu e os sprites da tela de jogo
]]--

--w, h = (largura e altura do botao)
--x , y = (coordenadas do botão na tela)
--cor, texto, tfont = (cor do botao, texto do botão, tamanho de fonte)
function estruturas.criarBotao(w, h, x, y, cor, texto, tFont)
    tFont = tFont or 16
    local botao = {
        w = w,
        h = h,
        x = x or 0,
        y = y or 0,
        cor = cor or {1, 1, 1, 1},
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

function estruturas.botaoSetCoord(ref_btn, x, y)
    if not ref_btn then
        print("referencia invalida para desenhar botao")
    end
    ref_btn.x = x
    ref_btn.y = y
end


--caminhoImagem = (caminho e nome do arquivo)
--sx, sy = (coordenadas x e y do corte na imagem)
--sw,sh = (largura e altura do corte)
--x y = (coordenadas da imagem na tela)
function estruturas.criarSprite(caminhoImagem, sx, sy, sw, sh, x, y)

    --verifica se o arquivo existe primeiro
    if not love.filesystem.getInfo(caminhoImagem) then
        print("err: arquivo não encontrado")
        return nil
    end
    --cria o objeto imagem com coordenadas na tela e salva em uma referencia para ele
    x = x or 0
    y = y or 0
    local ref = {
            imagem = love.graphics.newImage(caminhoImagem),
            quadros = {},
            coord_x = x,
            coord_y = y
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

function estruturas.spritesSetCoord(ref_imagem, x, y)
    if not ref_imagem then
        print("referencia de imagem invalida")
    end
    ref_imagem.coord_x = x
    ref_imagem.coord_y = y
end


--desenha a imagem na tela com base em uma referencia de uma imagem na memoria
function estruturas.desenharSpriteTela(ref_imagem, i_quadro) 
    i_quadro = i_quadro or 1

    if not ref_imagem then
        print("Erro: referência de imagem inválida!")
        return false
    end
    
    local quadro = ref_imagem.quadros[i_quadro]
    if not quadro then
        print("Erro: quadro da imagem não encontrado!")
        return false
    end

    love.graphics.draw(ref_imagem.imagem, quadro, ref_imagem.coord_x, ref_imagem.coord_y)
    return true
end

--apenas os parametros das dimensões ja serao padronizados
function estruturas.criarCard(texto, src_img, cor1, cor2, x, y, w, h)
    --imagem que ficara no topo da carta
    if not src_img then
        print("é preciso informar um caminho para imagem")
        return nil
    end
    local nova_img = love.graphics.newImage(src_img)
    cor1 = cor1 or {0, 0, 0, 0.9}--cor que ficara na borda dos textos e na carta
    cor2 = cor2 or {0.8, 0.8, 0.8, 1} --cor de preenchimento da maioria da carta
    w = w or 320 --tamanho minimo da carta tambem sera 300px
    h= h or w*1.5 --h tera 1/3 vezes o tamanho de w
    x=x or 0
    y=y or 0
    local tfont = love.graphics.newFont(14)
    local novo = {
        larg = w,
        alt = h,
        coord_x=x,
        coord_y=y,
        cont=texto,
        font = tfont,
        img=nova_img,
        cor_bordas = cor1,
        cor_fundo = cor2
    }
    return novo --retorna ponteiro para a nova carta criada na memoria
end

--função para setar as coordenadas onde sera desenhada as cartas
function estruturas.setCoorCard(ref_card, x, y)
    if not ref_card then
        print("referencia de card invalida")
        return nil
    end
    --nao deixa ter valores negativos
    ref_card.coord_x = (x>0) and x or 0
    ref_card.coord_y = (y>0) and y or 0
end

--ref_card  uma referencia para o objeto carta, x e y são as coordenadas
function estruturas.desenharCard(ref_card)
    if not ref_card then
        print("nao exite este objeto carta ainda na memoria, referencia invalida")
        return false
    end
    if not ref_card.img then
        print("esta carta não tem nenhuma imagem")
        return false
    end
    local x = ref_card.coord_x
    local y = ref_card.coord_y
    --primeiro desenha a borda da imagem com um retangulo
    local borda = 10
    local raio = 16
    love.graphics.setColor(ref_card.cor_bordas)
    love.graphics.rectangle("fill", x-borda, y-borda, ref_card.larg+borda*2, ref_card.alt+borda*2, raio)

    love.graphics.setColor(ref_card.cor_fundo)
    love.graphics.rectangle("fill", x, y, ref_card.larg, ref_card.alt, raio)
    
    --desenhar a imagem com um molde para caber dentro, usando o stencil do love
    
    love.graphics.stencil(function ()
        love.graphics.rectangle("fill", x, y, ref_card.larg, ref_card.alt, raio)
    end, "replace", 1)
    
    love.graphics.setStencilTest("greater", 0)
    love.graphics.setColor(1,1,1,1)--reset cor branco para a imagem
    love.graphics.draw(ref_card.img, x, y)
    love.graphics.setStencilTest()

    --desenha o texto logo abaixo da tela alterando as cordenadas x e y
    x = x --apenas movimenta o texto para 10 px a direita da coordenada x da card
    y = y + ref_card.img:getHeight() + 10 --movimenta y para 10px abaixo da imagem da card

    love.graphics.setFont(ref_card.font)
    love.graphics.setColor(0,0,0,1)
    love.graphics.print(ref_card.cont, x, y)
    return true
end


return estruturas