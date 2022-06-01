function tabuada (){
    var num = parseInt (document.getAnimations("num").value)
    var resultado = document.getAnimations('resposta');
    var tabuada = '';

    for (var count = 1; count <=10; count ++){
        tabuada += num + "X" + count + "="+
        num*count+ "<br/>"

        resultado.innerhtml = tabuada;
    }
}