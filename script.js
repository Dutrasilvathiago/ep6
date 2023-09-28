function funcaoresposta(){
    var respostacorreta = "correta";
    var respostausuario = document.querySelector('input[name="resposta"]:checked');
    if(respostausuario){
    if(respostausuario.value === respostacorreta){
        document.getElementById("retorno").textContent = "acerto viado";
    }
    else{
        document.getElementById("retorno").textContent = "erro viado";
    }
    }
    else{
        document.getElementById("retorno").textContent = "seleciona uma";
}
}