#!/usr/bin/env node

import { gcd, generationNumber } from '../src/helpers/helpers.js';
import runGame from '../src/runGame.js';

function generateGcdQuestion() {
  const firstNumber = generationNumber();
  const secondNumber = generationNumber();
  const correctAnswer = String(gcd(firstNumber, secondNumber));
  const question = `${firstNumber} ${secondNumber}`;

  return [question, correctAnswer];
}

const description = 'Find the greatest common divisor of given numbers.';
runGame(description, generateGcdQuestion);