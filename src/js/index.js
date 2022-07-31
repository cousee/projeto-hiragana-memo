/*

OBJETIVO 1 - quando cliclar em avancar tem que mostrar o prox cartao
    	- passo 1 - pegar o elemento html da seta avancar
        - passo 2 - identificar o vlique do user na seta
        - passo 3 - fazer aparecer o prox cartao
        - passo 4 - esconder o cartao selecionado

        OBJETIVO 2 - quando cliclar em voltar tem que mostrar o prox cartao
    	- passo 1 - pegar o elemento html da seta voltar
        - passo 2 - identificar o vlique do user na seta
        - passo 3 - fazer aparecer o cartao anterior
        - passo 4 - esconder o cartao selecionado

*/

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function (){
    if(cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();
    
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
    
});

btnVoltar.addEventListener('click', function (){
    
    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
    
});