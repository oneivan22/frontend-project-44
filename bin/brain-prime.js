#!/usr/bin/env node

import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;// nosonar - not used for security purposes

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {// nosonar - not used for security purposes
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const playGame = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i++) {
    const num = getRandomInt(1, 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrime(num) ? 'yes' : 'no';
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
