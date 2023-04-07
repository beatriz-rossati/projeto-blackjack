alert("Boas-vindas ao jogo de BlackJack!")

while (confirm("Deseja iniciar uma nova partida?")) {
    iniciarPartida()
}

alert("O jogo acabou")

function iniciarPartida() {
    let cartasJogador = [comprarCarta(), comprarCarta()]
    // testando 2 As hardcodado
    // let cartasJogador = [{texto: "AC", valor: 11},{texto: "AP", valor: 11}]
    let cartasComputador = [comprarCarta(), comprarCarta()]

    if (cartasJogador[0].valor == 11 && cartasJogador[1].valor == 11) {
        cartasJogador = [comprarCarta(), comprarCarta()]
        console.log("dois As para jogador, resorteando")
    }
    if (cartasComputador[0].valor == 11 && cartasComputador[1].valor == 11) {
        cartasComputador = [comprarCarta(), comprarCarta()]
        console.log("dois As para computador, resorteando")
    }

    let pontJogador = cartasJogador[0].valor + cartasJogador[1].valor
    let pontComputador = cartasComputador[0].valor + cartasComputador[1].valor

    let mensagemJogador = `Cartas Jogador: ${cartasJogador.map(carta => carta.texto)} e a soma delas é ${pontJogador}.`
    let mensagemComputador = `Carta revelada do Computador: ${cartasComputador[0].texto} e o valor delas é ${cartasComputador[0].valor}.`

    while (pontJogador < 21 && perguntarJogador() == true) {
        const novaCarta = comprarCarta()
        cartasJogador.push(novaCarta)
        pontJogador += novaCarta.valor
        mensagemJogador = `Cartas Jogador: ${cartasJogador.map(carta => carta.texto)} e a soma delas é ${pontJogador}`
    }

    while (pontComputador < 21 && pontJogador < 21 && pontComputador < pontJogador) {
        const novaCarta = comprarCarta()
        cartasComputador.push(novaCarta)
        pontComputador += novaCarta.valor

    }

    mensagemComputador = `Cartas Computador: ${cartasComputador.map(carta => carta.texto)} e a soma delas é ${pontComputador}.`

    alert(`
    ${mensagemJogador} 
    ${mensagemComputador} 
    ${resultadoJogo(pontJogador, pontComputador)}`)

    function perguntarJogador() {
        return confirm(`
            ${mensagemJogador}
            ${mensagemComputador}
            Deseja comprar mais uma carta?`)
    }

    function resultadoJogo(resultadoJogador, resultadoComputador) {
        if (((resultadoJogador > resultadoComputador) || (resultadoComputador > 21)) && (resultadoJogador <= 21)) {
            return ("Você ganhou!")
        } else
            if (((resultadoJogador < resultadoComputador) || (resultadoJogador > 21)) && (resultadoComputador <= 21)) {
                return ("O computador ganhou!")
            } else
                return ("Vocês empataram.")
    }
}