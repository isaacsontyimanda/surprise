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
      <p class="p1">Olá, <strong>${nome.value}</strong>. Essas frases foram devidamente preparadas para você: </p> 
      <ul>
      <li><p>Comprometa-se com suas metas e encare os obstáculos como etapas para atingir o objetivo final.</p></li>
      <li><p>É preciso impor a si mesmo algumas metas para se ter a coragem de alcançá-las.</p></li>
      <li><p>Quando surgirem os obstáculos, mude a sua direção para alcançar a sua meta, mas não a decisão de chegar lá.</p></li>
      <li><p>Estabeleça metas que você pode alcançar, pois se a gente fica querendo o impossível, a frustração cedo ou tarde bate na porta. Decida o que você não quer mais na sua vida. Esse é um bom jeito de abrir espaço para tudo aquilo que você sonha. Ou tudo que você nem sabe que deseja.</p></li>
      <li><p>Ninguém nunca conseguiu alcançar sucesso simplesmente fazendo o que lhe é solicitado. É a quantidade e a excelência do que está além do solicitado que determina a grandeza da distinção final.</p></li>
      <li><p>Por último vai essa: "Você nunca alcança o sucesso verdadeiro a menos que você goste do que está fazendo."</p></li>
      <li><abbr title="Volte a sessão anterior"><a class="links" href="index.html">Voltar</a></abbr></li>
      </ul>
    </p>`
    nome.value = ''
  }
}