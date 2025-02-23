function findMax(lista) {
    let mayor= lista[0]
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i]
        }

    }
    return mayor
}


function includes(lista, num) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == num) {
            return true; 
        }
    }
    return false;
}




function sum(lista){
    let suma = 0

    for (let i = 0; i < lista.length; i++) {
       suma+=lista[i]

    }
    return suma
}


function missingNumbers(lista) {
    let min = lista[0];
    let max = lista[0];

    
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < min) {
            min = lista[i];
        }
        if (lista[i] > max) {
            max = lista[i];
        }
    }

    let missing = [];
    
   
    for (let num = min; num <= max; num++) {
        let found = false;
        for (let j = 0; j < lista.length; j++) {
            if (lista[j] === num) {
                found = true;
                break;
            }
        }
        if (!found) {
            missing.push(num);
        }
    }

    return missing;
}



