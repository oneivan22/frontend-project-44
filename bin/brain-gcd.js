#!/usr/bin/env node

import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const playGame = (name) => {
  console.log('Find the greatest common divisor of given numbers.');
  
  for (let i = 0; i < 3; i++) {
    const a = getRandomInt(1, 100);
    const b = getRandomInt(1, 100);
    const correctAnswer = gcd(a, b);
    
    console.log(`Question: ${a} ${b}`);
    const answer = Number(readlineSync.question('Your answer: '));
    
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    
    console.log('Correct!');
  }
  
  console.log(`Congratulations, ${name}!`);
};

const name = greetUser();
playGame(name);