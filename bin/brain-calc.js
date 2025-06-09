#!/usr/bin/env node

import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operators.length);
  return operators[index];
};

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const playGame = (name) => {
  console.log('What is the result of the expression?');
  
  for (let i = 0; i < 3; i++) {
    const a = getRandomInt(1, 100);
    const b = getRandomInt(1, 100);
    const operator = getRandomOperator();
    const correctAnswer = calculate(a, b, operator);
    
    console.log(`Question: ${a} ${operator} ${b}`);
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