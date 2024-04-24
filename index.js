
function twoNumberSum(array, targetSum) {
    let par = {};

    for (let i = 0; i < array.length; i++) {
        let complemento = targetSum - array[i];
        if (par[complemento] !== undefined) {
            return [complemento, array[i]];
        }
        par[array[i]] = i;
    }

    return [];
}

// Ejemplo de uso
const numeros = [3, 5, -4, 8, 11, 1, -1, 6]
const target = 10

const resultado = twoNumberSum(numeros, target);

if (resultado.length > 0) {
    console.log(`El par de números que suma ${target} es: [${resultado.join(', ')}]`);
} else {
    console.log(`No se encontró ningún par de números que sume ${target}`);
}


