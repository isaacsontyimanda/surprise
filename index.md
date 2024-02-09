Olá, Esse é o HEADME(Leia-me)
Depois de eu conhecer a plataforma <a href="https://www.fronteditor.dev">Site da Plataforma</a> comecei a brincar e deu nesse resultado, código muito simples usando apenas, HTML5,CSS3,JS.

!--Código fonte: HTML5 {
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>É Surpresa😊</title>
</head>
<body>
    <h1>&#x1f979</h1>
    <p class="p1">
        Escreva seu nome e vê a sua surpresa
    <abbr title="clique para ver a sua surpresa...">
  <input class="bot" type="button" value="Ver Surpresa" onclick="Ver()">
    </abbr>
    </p>
    <p class="boxtext p1">
  <input class="boxtext" type="text" name="instext" id="instext" placeholder="insira seu nome aqui!">
    </p>
    <div id="res">
      <img id="img" src="https://media.licdn.com/dms/image/C4D22AQGSV699onYgLQ/feedshare-shrink_1280/0/1675048683850?e=1710374400&v=beta&t=Nbhk8Xp2c7DaeuQr9SdHqkWBBSidFC698WjgrCsPrdg" alt="Imagens de React">
    </div>
    <footer>
    <p class="foot">
    &COPY; <a href="https://github.com/isaacsontyimanda">Softgames</a> All Rights Reserved 2024
    </p>
    </footer>
</body>
</html>
--!
}

Código fonte: CSS3 {
  /*
    @charset "UTF-8";

@import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;1,300;1,500&display=swap');

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #333;
  color: #fff;
}
h1 {
  text-align: center;
  font-size: 3em;
}
p.p1 {
  text-align: center;
}
p {
  text-align: justify;
  font-size: 1em;
}
ul > li {
  margin: auto;
  width: 450px;
  font-size: .9em;
}
abbr {
  text-decoration: none;
}
p > abbr > a {
  text-decoration: none;
  color: #fff;
}
p > abbr > a:hover {
  text-decoration: underline;
}
input.bot {
  font-weight: bold;
  background: orange;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  padding: 4px;
}
input.bot:hover {
  background: rgb(163, 107, 1);
  color: rgb(224, 223, 223);
}
input.boxtext {
  text-align: center;
  font-weight: bold;
  background: orange;
  color: #fff;
  border-radius: 5px;
  padding: 4px;
}
img {
  display: block;
  width: 60%;
  border: 6px solid orange;
  border-radius: 10px;
  margin: auto;
}
p.foot {
  text-align: center;
  font-size: .9em;
}
p.foot > a {
  text-decoration: none;
  color: #fff;
}
p.foot > a:hover {
  text-decoration: underline;
}
  */
}

Código fonte: JS {
  /*
    function Ver() {
  let img = document.getElementById('img')
  let nome = document.querySelector('input#instext')
  let res = document.getElementById('res')
  if (nome.value.length == 0) {
    alert('[ERRO] Por favor! insira seu nome e tente novamente...')
  } else {
    img.style.display = 'none'
    res.style.textAlign = 'justify'
    res.innerHTML = `<p>
      <p class="p1"><strong>${nome.value}</strong>, essas frases são para você: </p> 
      <ul>
      <li><p>Comprometa-se com suas metas e encare os obstáculos como etapas para atingir o objetivo final.</p></li>
      <li><p>É preciso impor a si mesmo algumas metas para se ter a coragem de alcançá-las.</p></li>
      <li><p>Quando surgirem os obstáculos, mude a sua direção para alcançar a sua meta, mas não a decisão de chegar lá.</p></li>
      <li><p>Estabeleça metas que você pode alcançar, pois se a gente fica querendo o impossível, a frustração cedo ou tarde bate na porta. Decida o que você não quer mais na sua vida. Esse é um bom jeito de abrir espaço para tudo aquilo que você sonha. Ou tudo que você nem sabe que deseja.</p></li>
      <li><p>Ninguém nunca conseguiu alcançar sucesso simplesmente fazendo o que lhe é solicitado. É a quantidade e a excelência do que está além do solicitado que determina a grandeza da distinção final.</p></li>
      <li><p>Por último vai essa: "Você nunca alcança o sucesso verdadeiro a menos que você goste do que está fazendo."</p></li>
      </ul>
    </p>`
  }
}
  */
}