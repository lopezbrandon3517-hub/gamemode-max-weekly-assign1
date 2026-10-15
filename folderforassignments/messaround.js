const prompt = require(`prompt-sync`)();




function add(x, y){
    console.log(x + y)
}


function subtract(b, u){
    console.log(b - u)
}

function multiply(i, j){
    console.log(i * j)
}



// let start = Number(prompt("you have 3 choices\n1. add two numbers\n2. subtract two numbers\n3. multiply two numbers\nplease enter number 1-3 to select your choice"));

// if(start === 1){
//     let usersnum1 = Number(prompt("select your first number"));
//     let usernum2 = Number(prompt("select your second number"));
//     let sum = add(usersnum1, usernum2)
//     return sum
// }else if (start === 2){
//     let usersnum1 = Number(prompt("please select your first number"));
//     let usersnum2 = Number(prompt("select your second number"));
//     let sum = subtract(usersnum1, usersnum2)
//     return sum
// }else if (start === 3){
//     let usernum1 = Number(prompt("select the first number"))
//     let usernum2 = Number(prompt("select your second number"))
//     let u = multiply(usernum1, usernum2)
//     return u
// } else {
//     console.log("select 1-3")
// }



let start = Number(prompt("you have 3 choices\n1. add two numbers\n2. subtract two numbers\n3. multiply two numbers\nplease enter number 1-3 to select your choice"));

while(true){

    if(start === 1){
    let usersnum1 = Number(prompt("select your first number"));
    let usernum2 = Number(prompt("select your second number"));
    let sum = add(usersnum1, usernum2)
    return sum
}else if (start === 2){
    let usersnum1 = Number(prompt("please select your first number"));
    let usersnum2 = Number(prompt("select your second number"));
    let sum = subtract(usersnum1, usersnum2)
    return sum
}else if (start === 3){
    let usernum1 = Number(prompt("select the first number"))
    let usernum2 = Number(prompt("select your second number"))
    let u = multiply(usernum1, usernum2)
    return u
} else {
    console.log("select 1-3")
}};

