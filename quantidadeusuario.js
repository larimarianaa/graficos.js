const url = 'https://raw.githubusercontent.com/larimarianaa/trabalho_json_grafico/refs/heads/main/disciplina.json'

async function vizualizarInformacoesGlobais() {

const res = await fetch(url)

const dados = await res.json()

const pessoas_brancas = (dados.Branca) /1000000
const pessoas_preta = (dados.preta) /1000000
const pessoas_amarela = (dados.amarela) /1000000
const pessoas_parda = (dados.parda) /1000000
const pessoas_indigena = (dados.indígena) /1000000

  
const paragrafo = document.createElement('p')
paragrafo.innerHTML = `No mundo existem ${pessoas_preta} milhões de pessoas pretas que são descendentes de africanos,que trouxeram para o Brasil a sua força e cultura vibrante.
Pessoas amarelas , cerca de ${pessoas_amarela} milhões que carregam consigo mesmos influências asiáticas.As pessoas pardas com ${pessoas_parda} milhões que é a mistura de brancos e negros. Pessoas indígenas com mais de
${pessoas_indigena} milhões de pessoas que foram os primeiros habitantes , guardiões da natureza e das tradições ancestrais,por fim ${pessoas_brancas} milhões de pessoas brancas que trouxeram para o Brasil tradições europeias.` 



const container = document.getElementById('graficos-container')

container.appendChild(paragrafo)

}


vizualizarInformacoesGlobais()
