let sum = document.querySelector("#sum");
let sub = document.querySelector("#sub");
let mul = document.querySelector("#mul");
let xor = document.querySelector("#xor");
let or = document.querySelector("#or");
let and = document.querySelector("#and");


function getResult(operator) {
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);
    if(Number.isNaN(num1) || Number.isNaN(num2)) {
        alert("Enter a number");
        return;
    }
    if (operator === "+") 
    {
        return `${num1} ${operator} ${num2} is ${num1 + num2}`;
    } 
    else if (operator === "-")
    {
        return `${num1} ${operator} ${num2} is ${num1 - num2}`;
    } 
    else  if ( operator === "*") 
    {
        return `${num1} ${operator} ${num2} is ${num1 * num2}`;
    } 
    else  if ( operator === "|") 
    {
        return `${num1} ${operator} ${num2} is ${num1 | num2}`;
    } 
    else  if ( operator === "&")
    {
        return `${num1} ${operator} ${num2} is ${num1 & num2}`;
    } 
    else
    {
        return `${num1} ${operator} ${num2} is ${num1 ^ num2}`;
    }
}
sum.addEventListener('click', (event) => {
    event.preventDefault();
    let res = getResult("+")
    document.querySelector("#result").value = res;
})

sub.addEventListener('click', (event) => {
    event.preventDefault();
    let res = getResult("-")
    document.querySelector("#result").value = res;

})

mul.addEventListener('click', (event) => {
    event.preventDefault();
    let res = getResult("*")
    document.querySelector("#result").value = res;

})

xor.addEventListener('click', (event) => {
    event.preventDefault();
    let res = getResult("^")
    document.querySelector("#result").value = res;

})

or.addEventListener('click', (event) => {
    event.preventDefault();
    let res = getResult("|")
    document.querySelector("#result").value = res;

})

and.addEventListener('click', (event) => {
    event.preventDefault();
    let res = getResult("&")
    document.querySelector("#result").value = res;

})


