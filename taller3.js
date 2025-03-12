function desglosarString(cadena, tipo) {
    const vocales = "aeiou";
    const consonantes = "bcdfghjklmnpqrstvwxyz";
    let contador = 0;

    for (let letra of cadena.toLowerCase()) {// voy letra por letra
        if (tipo === "vocales" && vocales.includes(letra)) {// si lo incluye lo sumo
            contador++;
        } else if (tipo === "consonantes" && consonantes.includes(letra)) {
            contador++;
        }
    }

    return contador;
}



function twoSum(nums, target) {
    const indicesMap = new Map();// lo creo

    for (let i = 0; i < nums.length; i++) {
        const complemento = target - nums[i];// hallo el com
        if (indicesMap.has(complemento)) {//lo busco y si ya está
            return [indicesMap.get(complemento), i];//lo devuelvo 
        }
        indicesMap.set(nums[i], i);
    }

    return []; 
}





function conversionRomana(romano) {
    const valores = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let anterior = 0;

    for (let i = romano.length - 1; i >= 0; i--) {
        let valor = valores[romano[i]];

        if (valor < anterior) {
            total -= valor;
        } else {
            total += valor;
        }

        anterior = valor;
    }

    return total;
}
