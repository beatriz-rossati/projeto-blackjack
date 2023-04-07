 // EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
console.log ("Boas-vindas ao jogo de BlackJack!")
  
if(confirm("Quer iniciar uma rodada?")){
   comecarJogo()
}else{
   console.log ("O jogo acabou")
}

function usuario (){
   let soma = 0
   let nomeCartas = ""
   while(soma === 22 || soma === 0){
      for (let i = 0; i<2; i++){
         const carta = comprarCarta()
         soma += carta.valor
         nomeCartas += `${carta.texto} `
      }
   }
   console.log (`Usuário - cartas: ${nomeCartas} - ${soma}`)
   return soma
}

function computador (){
   let soma = 0
   let nomeCartas = ""
   while(soma === 22 || soma === 0){
      for (let i = 0; i<2; i++){
         const carta = comprarCarta()
         soma += carta.valor
         nomeCartas += `${carta.texto} `
      }
   }
   console.log (`Computador - cartas: ${nomeCartas} - ${soma}`)
   return soma
}
  
function comecarJogo() {
   const resultUsuario = usuario()
   const resultComputador = computador()

   if (((resultUsuario > resultComputador) || (resultComputador > 21)) && (resultUsuario <= 21)) {
      console.log("Você ganhou!")
   } else
      if (((resultUsuario < resultComputador) || (resultUsuario > 21)) && (resultComputador <= 21)) {
         console.log("O computador ganhou!")
      } else
         console.log("Vocês empataram.")

}