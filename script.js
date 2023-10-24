//questionario
function funcao_resposta(){

    var resp1 = document.querySelector('input[name="resposta1"]:checked');
    var resp2 = document.querySelector('input[name="resposta2"]:checked');
    var resp3 = document.querySelector('input[name="resposta3"]:checked');
    var resp4 = document.querySelector('input[name="resposta4"]:checked');
    var resp5 = document.querySelector('input[name="resposta5"]:checked');
    var resp6 = document.querySelector('input[name="resposta6"]:checked');
    var resp7 = document.querySelector('input[name="resposta7"]:checked');
    var resp8 = document.querySelector('input[name="resposta8"]:checked');
    var resp9 = document.querySelector('input[name="resposta9"]:checked');
    var resp0 = document.querySelector('input[name="resposta0"]:checked');

    var contador = 0;


    if(resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8 && resp9 && resp0){
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "Errada, pode ocorrer em qualquer objeto elastico!"

        }
        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Errada, pois é tudo medido em Newtons por aqui!"

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada, pois ocorre de forma seguida/linear!"

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada, é uma força potencial mas não enovolve gravidade!"

        }
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
        if(resp5.value == "correta"){
        document.getElementById("resp_correta_5").innerHTML = "Correta!"
        contador = contador + 1;
        }
        else{
        document.getElementById("resp_errada_5").innerHTML = "Errada, pois: <img src='img/formula.png' width='100px' height='50px'/>"

        }
        if(resp6.value == "correta"){
        document.getElementById("resp_correta_6").innerHTML = "Correta!"
        contador = contador + 1;
        }
        else{
        document.getElementById("resp_errada_6").innerHTML = "Errada, pois ela só aumenta!"

        }
        if(resp7.value == "correta"){
        document.getElementById("resp_correta_7").innerHTML = "Correta!"
        contador = contador + 1;
        }
        else{
        document.getElementById("resp_errada_7").innerHTML = "Errada, não são Newtons, agora são metros!"

        }
        if(resp8.value == "correta"){
            document.getElementById("resp_correta_8").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "Errada, pois sera sempre na direção ocorrida!"

        }
        if(resp9.value == "correta"){
            document.getElementById("resp_correta_9").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_9").innerHTML = "Errada, ela visa mostrar entre força elastica e deformação de molas!"

        }
        if(resp0.value == "correta"){
            document.getElementById("resp_correta_0").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_0").innerHTML = "Errada, pois a mola e rigida então se quebra!"
        }
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
    }
    else{
            alert("não deixe questões em branco!")
        }
}   
//fim questionario

//img interativa
function mudar(objeto,imagem) {
    lam.src = imagem;
}
//fim img interativa
//nome
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
//fim nome
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