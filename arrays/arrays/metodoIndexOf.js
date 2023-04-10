// MÉTODO "INDEXOF" SERVE PRA ENCONTRAR A POSIÇAO DO ELEMENTO NO ARRAY:

EXEMPLO 1:
const jobs = ["FrontEnd", "BackEnd", "DevOps", "FullStack"];
let indexOf = jobs.indexOf("FrontEnd");

console.log(indexOf);

// No exemplo 1 ele retorna o valor do elemento dentro do Array, nesse caso o retorno é 0, que é a posição de "FrontEnd" dentro do Array

EXEMPLO 2:
const fruits = ["Apple", "Orange", "Banana", "Pear"];
let indexOfSearch = fruits.indexOf("Orange", 3);

console.log(indexOfSearch);

// No exemplo 2 a posição solicitada,"3", não corresponde a posição de "Orange"
// Quando a posição solicitada nao é a do elemento o console retorna "-1"