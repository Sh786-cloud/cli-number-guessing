#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to Number Guessing Game");
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1 to 6 !"
    }
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulations! you guessed a right number.");
}
else {
    console.log("Sorry! you guessed a wrong number.");
}
