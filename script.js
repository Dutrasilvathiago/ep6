function funcaoresposta(){
    var respostacorreta = "correta";
    var respostausuario = document.querySelector('input[name="resposta"]:checked');
    if(respostausuario){
    if(respostausuario.value === respostacorreta){
        document.getElementById("retorno").textContent = "acertou";
    }
    else{
        document.getElementById("retorno").textContent = "errou";
    }
    }
    else{
        document.getElementById("retorno").textContent = "tem que escolher uma";
}
}
function mudar(objeto,imagem) {
    lam.src = imagem;
}