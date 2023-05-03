
var num1 = getElementById('num1')
num1 = parseInt(num1)

var num2 = getElementById('num1')  
num2 = parseInt(num2)

escolher = getElementById('escolher')
function calcular (){
    if(escolher=1){
        var soma = num1 + num2
        document.write('O resultado da soma: '+soma)
    }
    if(escolher=2){
        var subt = num1 - num2
        document.write('O resultado da subtracao: '+subt)
    }
    if(escolher=3){
        var mult = num1 * num2
        document.write('O resultado da mult: '+mult)
    }
    if(escolher=4){
        var divisao = num1 / num2
        document.write('O resultado da divisao: '+divisao)
    }

}




