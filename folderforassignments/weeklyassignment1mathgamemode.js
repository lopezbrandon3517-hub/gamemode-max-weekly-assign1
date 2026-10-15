const prompt = require(`prompt-sync`)();

// Welcome message
console.log("Welcome to the Math Game!");

// Choose game mode
let mode = prompt("Choose mode: 1 = Max Score, 2 = Three-Out");

while (mode !== "1" && mode !== "2") {
    mode = prompt("Invalid choice. Enter 1 or 2:");//making sure they enter a valid choice
}

// Choose difficulty
let difficulty = prompt("Choose difficulty: 1 = Easy, 2 = Medium, 3 = Hard");

while (difficulty !== "1" && difficulty !== "2" && difficulty !== "3") {//making sure its a valid choice agaiin using while loop
    difficulty = prompt("Invalid choice. Enter 1, 2, or 3:");
}

// Starting values
let score = 0;//initial values for game
let lives = 3;
let question = 1;

// Start game
while ((mode === "1" && question <= 20) || (mode === "2" && lives > 0)) {

    let num1;
    let num2;
    let operation;

    // EASY
    if (difficulty === "1") {

        num1 = Math.floor(Math.random() * 10); //generating random numebrs math.random makes decimals so we also use math.floor to round it to whole numeber
        num2 = Math.floor(Math.random() * 10);//following code dfollows same structure just small changes. both using mathrandom to generate random number then math.floor to make round it
//also doing the math.random * ten to generate a number 0-10 not past
        operation = Math.floor(Math.random() * 2);//this is so that it only gives addition and subtraction since its difficulty 1
    }

    // MEDIUM
    else if (difficulty === "2") {

        num1 = Math.floor(Math.random() * 100); //generating numbers up to 100 following same concept as before
        num2 = Math.floor(Math.random() * 100);

        operation = Math.floor(Math.random() * 5); //generates number 0-4 to gives you addition subtraction multiplication and modulus

        if (operation >= 2) {
            num1 = Math.floor(Math.random() * 9) + 1; //gives you the number 1-9 so you dont divide by 0
            num2 = Math.floor(Math.random() * 9) + 1;
        }
    }

    // HARD
    else {

        num1 = Math.floor(Math.random() * 1000);//literally same thing just generating bigger numbers cuz its hard mode
        num2 = Math.floor(Math.random() * 1000); //0-1000

        operation = Math.floor(Math.random() * 5);

        if (operation >= 2) {
            num1 = Math.floor(Math.random() * 90) + 10; //generates from 10 to 99
            num2 = Math.floor(Math.random() * 9) + 1;
        }
    }

    let answer;
    let symbol;

    // Addition
    if (operation === 0) {
        answer = num1 + num2;
        symbol = "+";
    }

    // Subtraction
    else if (operation === 1) {
        answer = num1 - num2;
        symbol = "-";
    }

    // Multiplication
    else if (operation === 2) {
        answer = num1 * num2;
        symbol = "*";
    }

    // Division
    else if (operation === 3) {
        answer = num1 / num2;
        symbol = "/";
    }

    // Modulus
    else {
        answer = num1 % num2;
        symbol = "%";
    }

    // Ask question
    let userAnswer = prompt(
        "Question " + question + ": " +
        num1 + " " + symbol + " " + num2 + " = ?" //using concatenation to get user anwser add first number then second 
    );

    // MAX SCORE MODE
    if (mode === "1") {

        if (userAnswer !== null && userAnswer.toLowerCase() === "skip") {//seing if user skipped and using .tolower case function to turn the string into lowercase if he speells it wiered

            console.log("Question skipped!");
        }

        else if (userAnswer !== null &&
                 userAnswer.trim() !== "" && //used trim to remove spaces if they lefdt their anwser with any
                 Number(userAnswer) === answer) {

            score = score + 10;

            console.log("Correct!");
        }

        else {

            score = score - 5;

            console.log("Wrong!");
        }

        console.log("Your score: " + score);
    }

    // THREE-OUT MODE
    else {

        if (userAnswer !== null && //making sure their anwser isint null using not equal to
            userAnswer.trim() !== "" && //same as before .trim to remove empty spaces
            Number(userAnswer) === answer) { 

            score = score + 10;

            console.log("Correct!");
        }

        else {

            lives = lives - 1;

            console.log("Wrong or invalid answer!");
        }

        console.log("Your score: " + score);
        console.log("Lives left: " + lives);
    }

    question = question + 1;
}

// Game ends
console.log("Game Over!");
console.log("Your final score is: " + score);
