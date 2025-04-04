--SHADERS
--[[
        Shaders são como filtros que processam cada pixel (fragment shader) ou cada vértice (vertex shader) 
        que será desenhado na tela. No LÖVE2D, trabalhamos principalmente com fragment shaders 
        (também chamados de pixel shaders). são com eles que texturas dinamicas como sobras, luz sao criadas
    
        // Fragment shader básico Um shader mínimo no LÖVE tem esta estrutura:
        vec4 effect(vec4 color, Image texture, vec2 texture_coords, vec2 screen_coords) {
            color -- cor atual do pixel
            texture --pixel atual da textura ou imagem
            texture_coords -- coordenas do pixel atual em relação a textura
            screen_coords -- coordenas do pixel atual em relação a tela
            return color; // Retorna a cor original sem modificações
        }
        
    Variáveis Especiais

    love_ScreenSize: Vetor com as dimensões da tela (ex: love_ScreenSize.xy dá a largura e altura)

    love_PixelColor: Cor do pixel atual

    Texture2D: Tipo para imagens/texturas
    
    -funçoes GLSL:
    Texel(tex, tex_coords); 
        Pega a cor de um pixel específico em uma textura (imagem).
        Equivalente a love.graphics.getPixel(x, y) no Lua, mas muito mais rápido (rodando na GPU).
        vec4 Texel(Image tex, vec2 texCoord);

    mix(a, b, t)	Interpola entre a e b baseado em t (0 a 1)
        mistura dois valores (a e b) baseado em um fator t (entre 0 e 1):
        vec4 mix(vec4 a, vec4 b, float t);

    dot(a, b)
        Calcula o produto escalar entre dois vetores. Matematicamente:
        Se os vetores estão na mesma direção → dot é máximo
        Se estão perpendiculares → dot é zero.
        Se estão em direções opostas → dot é negativo.
        float dot(vec2 a, vec2 b);

    normalize(v)
        Ajusta um vetor para ter comprimento 1 (mantendo a mesma direção).
        vec2 normalize(vec2 v);
    length(v)
        calcula o comprimento (magnitude) de um vetor:
        float length(vec2 v);

    os shaders podem ter variaveis externas que recebem de fora por outro program que acessa elas
    normalmente é nome_shader:send("nome_var", valor)
]]--

local shaders = {
    --shader de inverter cores
    invertShader = love.graphics.newShader[[
        vec4 effect(vec4 color, Image tex, vec2 tex_coords, vec2 screen_coords) {
            vec4 pixel = Texel(tex, tex_coords); // Pega a cor do pixel atual
            return vec4(1.0 - pixel.r, 1.0 - pixel.g, 1.0 - pixel.b, pixel.a);
        }
    ]],
    
    --shader de colorkey para retirar a cor branca de fundo
    colorKeyShader = love.graphics.newShader([[
        extern vec3 keycolor;
        extern float tolerancia;

        vec4 effect(vec4 color, Image tex, vec2 tex_coords, vec2 screen_coords){
            vec4 pixel = Texel(tex, tex_coords); //pega a cor do pixel atual
            float dif = distance(pixel.rgb, keycolor);
            if(dif<tolerancia){
                return vec4(0.0, 0.0, 0.0, 0.0);
            }
            else{
                return pixel;
            }
        }
    ]]),

    --shader de gradiente
    shaderGradiente = love.graphics.newShader[[
        extern vec2 direcao;
        extern vec4 cor1;
        extern vec4 cor2;
        
        vec4 effect(vec4 cor, Image tex, vec2 texCoord, vec2 pixelCoord) {
            vec2 normCoords = pixelCoord / love_ScreenSize.xy;
            float t = dot(normCoords, direcao);
            return mix(cor1, cor2, t);
        }
    ]]
}

return shaders