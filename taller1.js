//punto 1
function convertidorTemp(c){
    return (c*(9/5)+ 32)
}

//punto 2
// mas o menos es booleano, true es + 
function cuadratica(a,b,c,masomenos){
    const discriminante = b*b-4*a*c

    if(discriminante < 0){
        return null
    }else {
      const raiz= Math.sqrt(discriminante)
        if(masomenos){
            return (b+raiz)/(2*a)
        }else{
            return (b-raiz)/(2*a)
        }
    }
    
}

//punto3
function mejorParidad(num){
    if(num%2===0){
        return true 
    }else{
        return false
    }
}


//punto4
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
console.log(cuadratica(1,5,4,true))
