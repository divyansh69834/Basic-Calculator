const sdigits = document.querySelector("#sdigits");
const reverse = document.querySelector("#reverse");
const palindrome = document.querySelector("#palindrome");
const armstrong = document.querySelector("#armstrong");
const primes = document.querySelector("#btnPrime");
const dudeney = document.querySelector("#dudeney");
const pf = document.querySelector("#pf");

const sumOfDigits = (num) => {
    let s = 0;
    while (num != 0) 
    {
        s += (num % 10);
        num = Number.parseInt(num / 10);
    }
    return s;
}
const reverseOfNumber = (num) => {
    let rev = 0;
    while (num != 0) 
    {
        rev = rev * 10 + (num % 10);
        num = Number.parseInt(num / 10);
    }
    return rev;
}
const checkPalindrome = (num) => 
{
    return num == reverseOfNumber(num);
}
const checkArmstrong = (num) => 
{
		let flag,remainder,addition = 0;
		flag = num;
		while(num != 0)
		{
			remainder = num % 10;
			addition = addition + remainder * remainder * remainder;
			num = Number.parseInt(num/10);
		}
		if(addition == flag)
			return true;
		else
			return false;
}
const checkDudeney = (num) => 
{ 
        let cube_rt = Math.cbrt(num);
        if (cube_rt * cube_rt * cube_rt != num) 
            return false; 
        let dig_sum = 0; 
        let temp = num; 
        while (temp > 0) { 
            let rem = temp % 10; 
            dig_sum += rem; 
            temp = Number.parseInt(temp/10); 
        } 
        if (cube_rt != dig_sum) 
            return false; 
        return true; 
}
const isPrime = (num) => 
{
        let n = num;
        for(let i=2;i*i<=n;i++)
        {
            if(n%i==0)
                return false;
        }
        return true;
}
pf.addEventListener('click',(event) => 
{    
    let num = Number.parseInt(document.querySelector("#num").value); 
    if(Number.isNaN(num))
    {
        alert("Enter a number");
        return;
    }
    let str=`<div class='text-secondary'> Prime factors of ${num} are:-<br>`;
    let flag=false;
    for(let i=2;i*i<=num;i++)
    {
        if(num%i==0 && isPrime(i))
        {
            flag=true;
            str+=`<div class='text-secondary'> ${i} is a prime factor of ${num}<br>`;
        }   
    }
    if(!flag)
        str+=` <div class='text-secondary'> ${num} is a prime factor of ${num}`;
    document.querySelector("#result").innerHTML = str;
 })

sdigits.addEventListener('click', (event) => 
{
    let num = Number.parseInt(document.querySelector("#num").value);
    if(Number.isNaN(num))
    {
        alert("Enter a number");
        return;
    }
    let res = sumOfDigits(num);
    document.querySelector("#result").innerHTML = `<div class='text-secondary'> Digits sum of ${num} is :${res}`;
})

reverse.addEventListener('click', (event) => 
{
    let num = Number.parseInt(document.querySelector("#num").value);
    if(Number.isNaN(num))
    {
        alert("Enter a number");
        return;
    }
    let res = reverseOfNumber(num);
    document.querySelector("#result").innerHTML = `<div class='text-secondary'> Reverse of ${num} is :${res}`;
})

palindrome.addEventListener('click', (event) => 
{
    let num = Number.parseInt(document.querySelector("#num").value);
    if(Number.isNaN(num))
    {
        alert("Enter a number");
        return;
    }
    let res = checkPalindrome(num);
    let str = "";
    if (res) {
        str = `<div class='text-secondary'> ${num} is a Palindrome`;
    }
    else {
        str = `<div class='text-danger'> ${num} is not a Palindrome`;
    }
    document.querySelector("#result").innerHTML = str;
})
armstrong.addEventListener('click', (event) => 
{
    let num = Number.parseInt(document.querySelector("#num").value);
    if(Number.isNaN(num))
    {
        alert("Enter a number");
        return;
    }
    let res = checkArmstrong(num);
    let str = "";
    if (res) {
        str = `<div class='text-secondary'> ${num} is a Armstrong`;
    }
    else {
        str = `<div class='text-danger'> ${num} is not a Armstrong`;
    }
    document.querySelector("#result").innerHTML = str;
})
dudeney.addEventListener('click', (event) =>
{
    let num = Number.parseInt(document.querySelector("#num").value);
    if(Number.isNaN(num))
    {
        alert("Enter a number");
        return;
    }
    let res = checkDudeney(num);
    let str = "";
    if (res) {
        str = `<div class='text-secondary'> ${num} is a Dudeney`;
    }
    else {
        str = `<div class='text-danger'> ${num} is not a Dudeney`;
    }
    document.querySelector("#result").innerHTML = str;
})




