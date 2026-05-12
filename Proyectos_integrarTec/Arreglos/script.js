 
 const myArray = [1, 2, 3, 4, 5];
const minSum = [7,4,2,3] 
const maxAdjacentElementsProduct = [9,5,10,2,24,-1]

 function copyArray(arr) {
    return [...arr];
}

 //Ejercicio 1: Eliminar el primer elemento del arreglo
 function deleteFirstElementArray(arr){
         arr.shift();
         return arr;
     }
console.log(deleteFirstElementArray(myArray)); // Output: [2, 3, 4, 5]



// Ejercicio 2: Haga una función que solo reciba arreglos con más de 5 elementos y luego elimine los últimos 3.
// En caso de recibir un arreglo de menos de 5 elementos, mostrar en pantalla un mensaje de error.
function deleteLastThreeElements(arr) {
 if (arr.length > 5) {
    arr.splice(-3);
    return arr;  
}else{
    console.error("Error: El arreglo debe tener más de 5 elementos.");
    return arr;
    }
}


console.log(deleteLastThreeElements(myArray)); // Output: [1, 2, 3, 4]
// Ejercicio 3: Haga una función que reciba un arreglo y un número. Tenemos que sumarle dicho número a cada elemento del arreglo y
//  devolver el arreglo modificado.
function addNumberToArray(arr, num) {
    return arr.map(element => element + num);
}
console.log(addNumberToArray(myArray, 2)); // Output: [3, 4, 5, 6, 7]



// Ejercicio 4: Haga una función que reciba un número y devuelva un arreglo que tenga el tamaño del número recibido.
// El contenido del arreglo deben ser números desde el 1 hasta el número recibido. (1 a n)
function createArrayFromNumber(num) {
    return Array.from({ length: num }, (_, index) => index + 1);
}
console.log(createArrayFromNumber(5)); // Output: [1, 2, 3, 4, 5]



// Ejercicio 5
// Hay un arreglo con varios números donde todos son iguales excepto uno. Haga una función que encuentre qué número es el distinto.
const findUniq = [1, 1, 1, 2, 1, 1];
function findUniq(findUniq) {
    const unique = [...new Set(arr)];
    return unique.length === 1 ? arr[0] : unique.find(num => arr.filter(x => x === num).length === 1);
}
console.log(findUniq(findUniq)); // Output: 2



    // Ejercicio 6
// Dado un arreglo de números enteros, encuentre y devuelva el valor de la menor suma posible entre ellos.
function minSum(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[0] + sortedArr[1];
} 
console.log(minSum(minSum)); // Output: 5



// Ejercicio 7
    // Dado un arreglo de números enteros, encuentre el mayor producto posible entre dos números adyacentes y devuelva el valor de dicho producto.
function maxAdjacentElementsProduct(arr) {
    let maxProduct = arr[0] * arr[1];
    for (let i = 0; i < arr.length - 1; i++) {
        const product = arr[i] * arr[i + 1]; 
        if (product > maxProduct) {
            maxProduct = product;
        }
    }
    return maxProduct;
}
console.log(maxAdjacentElementsProduct(maxAdjacentElementsProduct)); // Output: 50

   

// Ejercicio 8:
    // Tenemos un grupo de ovejas amenazadas por un lobo y necesitamos saber a cuál se está por comer.
    // Consideramos que tenemos a las ovejas y al lobo en un arreglo y que en ese mismo consideramos al último elemento como el primero.
    // Consideración: El lobo solo puede comer a la oveja que tiene a su derecha.
function warnTheSheep(array) {
    const newArray = array.slice(0);
    let sheepTaken = 0;

    while (newArray.pop() !== "wolf") {
        sheepTaken++;
    }

    if (sheepTaken === 0) {
        return "No sigas comiendo ovejas!";
    } else {
        return `Hey! Oveja numero ${sheepTaken}! El lobo esta cerca!`;
    }
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf"]));
console.log(warnTheSheep(["sheep", "wolf" , "sheep", "sheep", "sheep"]));