let amigosSorteados = []


function adicionar() {
  let nomeDoAmigo = document.getElementById('nome-amigo').value.toUpperCase()
  let listaDeAmigos = document.getElementById('lista-amigos')
  
   
  if(nomeDoAmigo == '') {
    alert('Por favor digite um nome: ')
  }
  else {
    if(amigosSorteados.includes(nomeDoAmigo)) {
        alert('nome ja existe')
      }
      else {
        amigosSorteados.push(nomeDoAmigo)
        listaDeAmigos.textContent = amigosSorteados.join(' --> ')
        document.getElementById('nome-amigo').value = ''
      }
  }

  

 

}


function sortear() {
    embaralha(amigosSorteados)
    let listaSorteio = document.getElementById('lista-sorteio')

    if(amigosSorteados.length < 4) {
        alert('o numero de participantes deve ser pelo menos 4:')
    } else {
        for(let i = 0; i < amigosSorteados.length; i++) {
            if(i == amigosSorteados.length - 1) {
                   listaSorteio.innerHTML = listaSorteio.innerHTML + amigosSorteados[i] + ' --> ' + amigosSorteados[0] + '<br>'
            }
            else {
                  listaSorteio.innerHTML = listaSorteio.innerHTML + amigosSorteados[i] + ' --> ' + amigosSorteados[i + 1] + '<br>'
            }
          
       }
    }

  

}


function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}



function reiniciar() {
    document.getElementById('lista-amigos').textContent =  amigosSorteados = []
    document.getElementById('lista-sorteio').innerHTML = ''
}