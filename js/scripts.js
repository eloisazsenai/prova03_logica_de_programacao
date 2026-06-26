const formLotes = document.querySelector('#form-lotes')
const divListaLotes = document.querySelector('#div-lista-lotes')

const lotes = []

formLotes.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const dadosFormLotes = new FormData(formLotes)

    const lote = {
        descricao: dadosFormLotes.get('descricao'),
        comprimento: Number(dadosFormLotes.get('comprimento')),
        largura: Number(dadosFormLotes.get('largura')),
    }

    // CHAMAR FUNCAO addLote
    addLote(lote)

    formLotes.reset()
})

// FUNÇÃO ADICIONAR LOTES
const addLote = (objLote) => {
    lotes.push(objLote)

    // CHAMAR FUNÇÃO listLotes
    listLotes()
}

// FUNÇÃO CALCULAR ÁREA DO LOTE
const areaLote = function(objLote){
    return objLote.comprimento * objLote.largura
}

// FUNÇÃO VALOR ADICIONAL
const resultValorAdicional = (objtLote) => {
    let resultado = ''

    const valorBase = areaLote(objtLote) * 550 

    if (valorBase <= 20000) {
        resultado = 'Isento de valor adicional'
    } else if (valorBase <= 100000) {
        resultado = `R$ ${(valorBase * 0.05).toFixed(2)}`
    } else if (valorBase <= 500000) {
        resultado = `R$ ${(valorBase * 0.10).toFixed(2)}`
    } else if (valorBase <= 1000000) {
        resultado = `R$ ${(valorBase * 0.15).toFixed(2)}`
    } else { 
        resultado = `R$ ${(valorBase * 0.20).toFixed(2)}`
    }
    
    return resultado
}

// FUNÇÃO PERCORRER ARRAY
const listLotes = () => {
    divListaLotes.innerHTML = ''

    lotes.forEach((elem, i) => {
        const area = areaLote(elem)
        const adicional = resultValorAdicional(elem)

        divListaLotes.innerHTML += `
            <b>Descrição:</b> ${elem.descricao} <br> 
            <b>Comprimento:</b> ${elem.comprimento}m <br>
            <b>Largura:</b> ${elem.largura}m (${area} m²) <br>
            <b>Área:</b> ${areaLote(elem).toFixed(1)}m²<br>
            <b>Valor do lote:</b> R$${(areaLote(elem) * 550).toFixed(2)}<br>
            <b>Adicional:</b> ${adicional} <br>
            <br>
        `
    })
}