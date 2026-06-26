const formLotes = document.querySelector('#form-lotes')
const divListaLotes = document.querySelector('#div-lista-lotes')

const lotes = []

formLotes.addEventListener('submit', (evt)=>{
    evt.defaultPrevented()

    const dadosFormLotes = new FormData(formLotes)

    const lote={
        descricao: dadosFormLotes.get('descricao'),
        comprimento: dadosFormLotes.get('comprimento'),
        largura: dadosFormLotes.get('largura'),
    }

    //CHAMAR FUNCAO addLote


    formLotes.reset()
})

//FUNÇÃO ADICIONAR LOTES
const addLote = (objLote) =>{
    lotes.push(objLote)

    //CHAMAR FUNÇÃO listLotes
}

//FUNÇÃO PERCORRER ARRAY lotes
const listLotes = ()=>{
    divListaLotes.innerHTML = ''

    lotes.forEach((elem, i)=>{
        divListaLotes.innerHTML += `${i+1} - ${elem.descricao} - ${elem.comprimento} - ${elem.largura} <br>`
    })
}