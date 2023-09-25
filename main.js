const form = document.getElementById('campoAB');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

    
    form.addEventListener('submit', function(e){
        e.preventDefault();

        const valorA = campoA.valueAsNumber;
        const valorB = campoB.valueAsNumber;

        const mensagemValido= `O número ${valorB} do Campo B é maior que o número ${valorA} do campo A`
        const mensagemInvalido = `O número do Campo A não pode ser maior que o número do Campo B.`
        const mensagemIgual = `Os dois valor são iguais!`
        
        if (valorA > valorB) {
            const containerMensagemInvalido = document.querySelector('.mensagem')
            containerMensagemInvalido.innerHTML = mensagemInvalido
            containerMensagemInvalido.style.display = 'block';
        } 
        else if (valorA === valorB) {
            const containerNumeroIgual = document.querySelector('.mensagem');
            containerNumeroIgual.innerHTML = mensagemIgual;
            containerNumeroIgual.style.display = 'block'
        } 
        else {
            const containerMensagemValido = document.querySelector('.mensagem');
            containerMensagemValido.innerHTML = mensagemValido;
            containerMensagemValido.style.display = 'block';
        } 
})
