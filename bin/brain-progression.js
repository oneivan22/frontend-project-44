#!/usr/bin/env node

import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
};

const playGame = (name) => {
  console.log('What number is missing in the progression?');
  
  for (let i = 0; i < 3; i++) {
    const length = getRandomInt(5, 10);
    const start = getRandomInt(1, 100);
    const step = getRandomInt(1, 10);
    const progression = generateProgression(length, start, step);
    
    const hiddenIndex = getRandomInt(0, length - 1);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    
    console.log(`Question: ${progression.join(' ')}`);
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