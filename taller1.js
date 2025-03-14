//punto 1
function convertidorTemp(c){
    return (c*(9/5)+ 32)
}

//punto 2
// mas o menos es booleano, true es + 
function resolvedorProbando(a, b, c, positivo) {
    let discriminante = b * b - 4 * a * c;
    if (discriminante < 0) {
        return null
    }
    let raiz = Math.sqrt(discriminante)
    return positivo ? (-b + raiz) / (2 * a) : (-b - raiz) / (2 * a)// operador ternario
}


//punto 3

function mejorParidad(num){
    if(num%2===0){
        return true 
    }else{
        return false
    }
}

//punto 4

function peorParidad(num){
    if (num==1){
        return false
    }else if(num==2){
        return true
    }else if(num==3){
        return false
    }else if(num==4){
        return true
    }else if(num==5){
        return false
    }else if(num==6){
        return true
    }else if(num==7){
        return false
    }else if(num==8){
        return true
    }else if(num==9){
        return false
    }else if(num==10){
        return true
    }
}

//pa probar
console.log(resolvedor(1,5,4,false)) 

