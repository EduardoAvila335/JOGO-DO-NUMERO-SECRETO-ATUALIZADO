 let tentativas;
 let numeroSecreto;

começandojogo()


function começandojogo(){
    numeroSecreto = Math.floor(Math.random() * 100) + 1; 
    tentativas = 0; 
    document.getElementById("p").textContent = '';
    document.getElementById('numero').value = '';
    document.getElementById('Recomeçar').style.display = 'none';
}
    //console.log(numeroScreto);
    
   function verificarNumeroSecreto(){
        let mensagem = document.getElementById("p");
        let digiteseunumero = Number(document.getElementById('numero').value);

    if(isNaN(digiteseunumero) || digiteseunumero < 1 || digiteseunumero > 100){
        mensagem.textContent = 'ERRO, verifique se está tudo certo!! ';
        return;
    }






     if(digiteseunumero === numeroSecreto){
        mensagem.textContent = `🎉Parabens você acertou!!, o numero secreto (${numeroSecreto}) com (${tentativas}) tentativas`;
        alert(`🎉Parabens você acertou!!, o numero secreto (${numeroSecreto}) com (${tentativas}) tentativas`);
        document.getElementById('Recomeçar').style.display = 'inline-block';
    }else if(digiteseunumero < numeroSecreto){
         mensagem.textContent = '🔼 O número secreto é MAIOR!'
        tentativas++
    }else {
         mensagem.textContent = '🔽 O número secreto é MENOR!'
        tentativas++
    }

     document.getElementById("numero").value = "";
}
