// to calculate the sum of the salaries given in the object below in the variable "sum".
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for (let salary in salaries) {
    sum += salaries[salary];
}
console.log(sum);