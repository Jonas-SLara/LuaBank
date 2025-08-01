# Jogo de Educação Financeira Banco Imobiliario
**author: @JONAS_SL**
_______________________________________________

## Resumo
        O jogo banco imobiliário se resume a uma dinâmica em um tabuleiro
    com dados e cartas para comprar imóveis e propriedades com dinheiro
    ganho dentro do jogo, os elementos desta dinâmica foram usados para gamificar
    uma maneira de se ensinar enducação financeira para adolescentes cursando
    o 8º e 9º ano do ensino fundamental II (público alvo) de maneira lúdica
    equilibrando diversão com responsabilidades financeiras e conhecimento
        Os principais Conteudos Abordados Serão a respeitos de matemática 
    financeira Da BNCC nestas séries dos anos finais as quais são: juros compostos,
    montante, taxa de juros.
        Outros conteúdos relacionados ao mesmo escopo de educação financeira serão
    abordados, estes conteúdos são: Reserva de emergencia, Ativos e Passivos, Fundos
    imobiliários, Inflação e Controle de Dívidas

_______________________________________________

## Diagrama de Casos de Uso
![Diagrama casos uso](./documentation/casos_de_uso.png)

## Diagrama de Sequencia
![Diagrama de sequencia](./documentation/sequencia.png)

## Diagrama de Atividades, escopo geral
![Diagrama de atividades 1](./documentation/atividades1.drawio.png)

## Diagrama de Atividades, escopo das cartas
![Diagrama de atividades 2](./documentation/atividades2.png)

[Link pro protótipo no figma](https://www.figma.com/design/1ZqToWNni79YQuaJudrlLu/Jogo-do-banco-Imobilario?node-id=0-1&t=A38d9BysGKyVixUv-1)

[Link pro template no Engaged](https://docs.google.com/document/d/1PoYMowO57KqJXd2PIGKLjQapXWg-2SflWNqnVqUFat4/edit?usp=sharing)


## próximos passos

NPC como Player com npc = true:

    Criado junto com o jogador humano em GameView ou encapsulado na Game.

Tela do adversário (ViewPlayer):

    Mostra nome, saldo, propriedades, se é NPC, etc.

    Talvez com estilo diferente (cor ou posição).

Movimentação:

    Dice define o número.

    Atualiza player.position.

    Exibe a peça do jogador no tabuleiro (você vai precisar mapear isso visualmente depois).

Sistema de salvamento:

    Pode vir com localStorage, IndexedDB, ou API backend.

    Uma estrutura GameState contendo grid, jogadores, saldo, itens, turno, etc.