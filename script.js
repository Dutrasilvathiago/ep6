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
//fim questionario

//img interativa
}
function mudar(objeto,imagem) {
    lam.src = imagem;
}
//fim img interativa

   //contas
function forcaelastica(){
    var a = vara.value;
    var b = varb.value;
    var f = varf.value;

    var r = a*b;

    if(a == 0){
        alert("A deve ser diferente de 0")
    }
    else{
        if(f == r){
            alert("acertou")
        }
        else{
            alert("errou, para resolver transforme os centimetros para metros!")
        }
    }
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