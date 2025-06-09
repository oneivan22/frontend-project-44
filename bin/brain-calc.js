#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[getRandomInt(0, operations.length - 1)];
};

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
};

const playGame = (name) => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i++) {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const operation = getOperation();
    const correctAnswer = calculate(num1, num2, operation);
    console.log(`Question: ${num1} ${operation} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) !== correctAnswer) {
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
