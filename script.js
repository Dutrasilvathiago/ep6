//questionario
function funcaoresposta(){ //1
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
function funcaoresposta2(){ //2
    var respostacorreta2 = "correta2";
    var respostausuario2 = document.querySelector('input[name="resposta2"]:checked');
    if(respostausuario2){
    if(respostausuario2.value === respostacorreta2){
        document.getElementById("retorno2").textContent = "acertou";
    }
    else{
        document.getElementById("retorno2").textContent = "errou";
    }
    }
    else{
        document.getElementById("retorno2").textContent = "tem que escolher uma";
}
}
function funcaoresposta3(){ //3
    var respostacorreta3 = "correta3";
    var respostausuario3 = document.querySelector('input[name="resposta3"]:checked');
    if(respostausuario3){
    if(respostausuario3.value === respostacorreta3){
        document.getElementById("retorno3").textContent = "acertou";
    }
    else{
        document.getElementById("retorno3").textContent = "errou";
    }
    }
    else{
        document.getElementById("retorno3").textContent = "tem que escolher uma";
}
}
function funcaoresposta4(){ //4
    var respostacorreta4 = "correta4";
    var respostausuario4 = document.querySelector('input[name="resposta4"]:checked');
    if(respostausuario4){
    if(respostausuario4.value === respostacorreta4){
        document.getElementById("retorno4").textContent = "acertou";
    }
    else{
        document.getElementById("retorno4").textContent = "errou";
    }
    }
    else{
        document.getElementById("retorno4").textContent = "tem que escolher uma";
}
}
function funcaoresposta5(){ //5
    var respostacorreta5 = "correta5";
    var respostausuario5 = document.querySelector('input[name="resposta5"]:checked');
    if(respostausuario5){
    if(respostausuario5.value === respostacorreta5){
        document.getElementById("retorno5").textContent = "acertou";
    }
    else{
        document.getElementById("retorno5").textContent = "errou";
    }
    }
    else{
        document.getElementById("retorno5").textContent = "tem que escolher uma";
}
}
function funcaoresposta6(){ //6
    var respostacorreta6 = "correta6";
    var respostausuario6 = document.querySelector('input[name="resposta6"]:checked');
    if(respostausuario6){
    if(respostausuario6.value === respostacorreta6){
        document.getElementById("retorno6").textContent = "acertou";
    }
    else{
        document.getElementById("retorno6").textContent = "errou";
    }
    }
    else{
        document.getElementById("retorno6").textContent = "tem que escolher uma";
}
}
function funcaoresposta7(){ //7
    var respostacorreta7 = "correta7";
    var respostausuario7 = document.querySelector('input[name="resposta7"]:checked');
    if(respostausuario7){
    if(respostausuario7.value === respostacorreta7){
        document.getElementById("retorno7").textContent = "acertou";
    }
    else{
        document.getElementById("retorno7").textContent = "errou";
    }
    }
    else{
        document.getElementById("retorno7").textContent = "tem que escolher uma";
}
}
function funcaoresposta8(){ //8
    var respostacorreta8 = "correta8";
    var respostausuario8 = document.querySelector('input[name="resposta8"]:checked');
    if(respostausuario8){
    if(respostausuario8.value === respostacorreta8){
        document.getElementById("retorno8").textContent = "acertou";
    }
    else{
        document.getElementById("retorno8").textContent = "errou";
    }
    }
    else{
        document.getElementById("retorno8").textContent = "tem que escolher uma";
}
}
function funcaoresposta9(){ //9
    var respostacorreta9 = "correta9";
    var respostausuario9 = document.querySelector('input[name="resposta9"]:checked');
    if(respostausuario9){
    if(respostausuario9.value === respostacorreta9){
        document.getElementById("retorno9").textContent = "acertou";
    }
    else{
        document.getElementById("retorno9").textContent = "errou";
    }
    }
    else{
        document.getElementById("retorno9").textContent = "tem que escolher uma";
}
}
function funcaoresposta0(){  //10
    var respostacorreta0 = "correta0";
    var respostausuario0 = document.querySelector('input[name="resposta0"]:checked');
    if(respostausuario0){
    if(respostausuario0.value === respostacorreta0){
        document.getElementById("retorno0").textContent = "acertou";
    }
    else{
        document.getElementById("retorno0").textContent = "errou";
    }
    }
    else{
        document.getElementById("retorno0").textContent = "tem que escolher uma";
}
}
//fim questionario

//img interativa
function mudar(objeto,imagem) {
    lam.src = imagem;
}
//fim img interativa

   //contas
function forcaelastica(){
 varf.value = parseFloat(vara.value) * parseFloat(varb.value)
}
function forcaelastica2(){
    var c = varc.value;
    var d = vard.value;
    var x = varx.value;

    var r2 = c*d;

    if(c == 0){
        alert("A deve ser diferente de 0")
    }
    else{
        if(x == r2){
            alert("acertou")
        }
        else{
            alert("errou")
        }
    }
}
function forcaelastica3(){
    var e = vare.value;
    var y = vary.value;
    var z = varz.value;

    var r3 = e*y;

    if(e == 0){
        alert("A deve ser diferente de 0")
    }
    else{
        if(z == r3){
            alert("acertou")
        }
        else{
            alert("errou")
        }
    }
}
//fim contas
function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = nome_variavel;
    }
    else{
        alert("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }
}
function funcao_resposta(){

    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');
    var resp5 = document.querySelector('input[name="quest_5"]:checked');
    var resp6 = document.querySelector('input[name="quest_6"]:checked');
    var resp7 = document.querySelector('input[name="quest_7"]:checked');
    var resp8 = document.querySelector('input[name="quest_8"]:checked');
    var resp9 = document.querySelector('input[name="quest_9"]:checked');
    var resp10 = document.querySelector('input[name="quest_10"]:checked');
    var resp11 = document.querySelector('input[name="quest_11"]:checked');
    var resp12 = document.querySelector('input[name="quest_12"]:checked');
    var resp13 = document.querySelector('input[name="quest_13"]:checked');

    var contador = 0;


    if(resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8 && resp9 && resp10 && resp11 && resp12 && resp13){
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
        if(resp5.value == "correta"){
        document.getElementById("resp_correta_5").innerHTML = "Correta!"
        contador = contador + 1;
        }
        else{
        document.getElementById("resp_errada_5").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resp6.value == "correta"){
        document.getElementById("resp_correta_6").innerHTML = "Correta!"
        contador = contador + 1;
        }
        else{
        document.getElementById("resp_errada_6").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resp7.value == "correta"){
        document.getElementById("resp_correta_7").innerHTML = "Correta!"
        contador = contador + 1;
        }
        else{
        document.getElementById("resp_errada_7").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resp8.value == "correta"){
            document.getElementById("resp_correta_8").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resp9.value == "correta"){
            document.getElementById("resp_correta_9").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_9").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resp10.value == "correta"){
            document.getElementById("resp_correta_10").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_10").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resp11.value == "correta"){
            document.getElementById("resp_correta_11").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_11").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resp12.value == "correta"){
            document.getElementById("resp_correta_12").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_12").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resp13.value == "correta"){
            document.getElementById("resp_correta_13").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_13").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
    }
    else{
            alert("não deixe questões em branco!")
        }
}   