<h1>Desafio de projeto DIO Node JS: Mario Kart.JS</h1>

<h4> Professor: Felipe Silva Aguiar</h4>
Conheça o <a href = "https://github.com/digitalinnovationone/formacao-nodejs/tree/main/03-projeto-mario-kart">projeto original</a>, o código que apresento aqui é uma resposta ao desafio da DIO, onde implementei algumas modificações (vide abaixo)<br><br>

  <table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Objetivo:</b>
                <p>Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Manobrabilidade: 3</p>
                <p>Poder: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 4</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 5</p>
                <p>Poder: 2</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 3</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 3</p>
                <p>Poder: 5</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Regras & mecânicas:</h3>

<b>Jogadores:</b>

<label for="jogadores-item">✔️ O Computador <s>deve receber dois</s> pode receber dois ou mais personagens para disputar a corrida em um objeto cada (o projeto original permitia somente dois personagens) </label>

<b>Pistas:</b>

<ul>
  <li><label for="pistas-1-item">✔️ Os personagens irão correr em uma pista aleatória de 5 rodadas</label></li>
  <li><label for="pistas-2-item">✔️ A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto</label>
    <ul>
      <li><label for="pistas-2-1-item">✔️ Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto</label></li>
      <li><label for="pistas-2-2-item">✔️ Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto</label></li>
      <li><label for="pistas-2-3-item">✔️ Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem perder, perde um ponto</label></li>
      <li><label for="pistas-2-3-item">✔️ Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)</label></li>
    </ul>
  </li>
</ul>

<b>Condição de vitória:</b>

<label for="vitoria-item">✔️ Ao final, vence quem acumulou mais pontos</label>

<b>Desafios:</b>

<ul>
<li><label for="propostos-dio">Desafios propostos pela DIO: <ul>
  <li><label for="desafios-1-item">✔️ No caso de um confronto, sortear aleatoriamente se é um Casco (-1 ponto) ou um Bomba(-2 pontos)
</label></li>
  <li><label for="desafios-2-item">✔️ Quem vence o confronto ganha um turbo (+1 ponto) aleatoriamente</label>
  </li>
</li>
</ul>
<li><label for="incluidos-por-mim">Incluídos por mim: <ul>
    <li><label for="desafios-3-item">✔️ Permitir seleção de personagem, quantidade de trechos/blocos de corrida e número de jogadores antes do início da corrida</label>
    </li>
    <li><label for="desafios-4-item">✔️ Permitir corridas com mais de 2 personagens mas refatorar a lógica para que mantenha os confrontos de 1 contra 1</label>
    </li>
    <li><label for="desafios-5-item">✔️ Devido ao item anterior, fazer mudança na regra de negócio: somente trechos de corrida contam para o término da corrida, confrontos não são considerados para o progresso até o fim da corrida</label>
    </li>
    <li><label for="desafios-6-item">✔️ Adiconar pausas de tempo para poder acompanhar o progresso passo a passo da corrida</label>
    </li>
    <li><label for="desafios-7-item">✔️ Mostrar o resultado completo da corrida (posições de todos os jogadores) e o progresso durante a mesma</label>
    </li>
</li>
</ul>
</ul>

<b>Algumas modificações que realizei para implementar os desafios e também aprimorar o código:</b>
<ul><li>
Separei as lógicas de corrida, seleção de personagens e dos blocos, componentizado de forma simples para separar as funções utilizadas.</li>
<li>
Também modifiquei algumas lógicas, como por exemplo retirei a possibilidade de confrontos na primeira rodada. O número de modificações é extenso, recomendo olhar comparativamente com o código original.</li>
<li>
Um exemplo foram as mudanças necessárias no código para passar os personagens de maneira que fosse aceita uma lista, facilitando o uso de N número de personagens ao invés de apenas 2 como no original, trocando parâmetros e mudando lógicas de funcionamento do exercício.
</li>
</ul>
