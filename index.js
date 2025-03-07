const formulario = document.querySelector('#formPost')
const campoTitulo = document.querySelector('#campoTitulo')
const campoTexto = document.querySelector('#campoTexto')
const areaTitulo = document.querySelector('#mostraTitulo')
const areaTexto = document.querySelector('#mostraTexto')

formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()

  const dados = {
    title: campoTitulo.value,
    body: campoTexto.value,
    userId: 1,
  }

  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(dados),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    const resultado = await resposta.json()

    
    areaTitulo.innerHTML = resultado.title
    areaTexto.innerHTML = resultado.body

    
    formulario.reset()
  } catch (erro) {
    console.error('Erro:', erro)
  }
})
