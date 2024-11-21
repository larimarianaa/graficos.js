async function quantidadeUsuariosPorRede() {

    const url = 'https://raw.githubusercontent.com/larimarianaa/trabalho_json_grafico/refs/heads/main/disciplina.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)
    const data = [
    {
    x: nomeDasRedes,
    y: quantidadeDeUsuarios,
    type: 'bar'
    }
    ]
    const grafico = document.createElement('div')
    grafico.className = 'graficos'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)
    }
    quantidadeUsuariosPorRede()
    
