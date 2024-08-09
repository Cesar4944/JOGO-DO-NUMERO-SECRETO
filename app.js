let listaDeNumerosSorteados =[];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese female', {rate:1.2});
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else {
        if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O numero secreto é menor');
        } else {
        exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo(); 
    }
}

// return parseInt(Math.random() * 10 + 1); foi tirado o return para programar as listas.

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quatidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   
   if (quatidadeDeElementosNaLista == numeroLimite) {
       listaDeNumerosSorteados = [];
   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
       return gerarNumeroAleatorio();   
   } else {
       listaDeNumerosSorteados.push(numeroEscolhido);
       console.log(listaDeNumerosSorteados)
       return numeroEscolhido;
   }
    
   
}

function limparCampo() {
    chute = document. querySelector('input');
    chute.value = '';

}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
}







