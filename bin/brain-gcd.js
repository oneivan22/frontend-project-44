#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { generateNumber } from "../src/cli.js";

const getGCD = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Find the greatest common divisor of given numbers.');

    for (let i = 0; i < 3; i+=1) {
        const randomNum = generateNumber(1, 30);
        const randomNum2 = generateNumber(1, 30);
        console.log("Question:", randomNum, randomNum2);
        const answer = readlineSync.question('Your answer:');
        
        // Вычисляем НОД
        const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
        const correctAnswer = gcd(randomNum, randomNum2);

        if (Number(answer) !== correctAnswer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }

        console.log("Correct!");
    }

    console.log(`Congratulations, ${name}!`);
};

getGCD();