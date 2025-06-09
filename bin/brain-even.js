#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { generateNumber } from "../src/cli.js";
const evenOdd = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < 3; i+=1) {
        const randomNum = generateNumber(1, 30);
        console.log("Question:", randomNum);
        const answer = readlineSync.question('Your answer:');
        const isEven = randomNum % 2 === 0;
        const correctAnswer = isEven ? 'yes' : 'no';

        if (answer !== correctAnswer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }

        console.log('Correct!');
    }

    console.log(`Congratulations, ${name}!`);
};

evenOdd();


