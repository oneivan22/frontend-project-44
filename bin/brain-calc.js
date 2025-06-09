#!/usr/bin/env node

import runGame from '../src/runGame.js';
import { generationMathOperator, calcNums, generationNumber } from '../src/helpers/helpers.js';

function generateCalcQuestion() {
  const firstNumber = generationNumber();
  const secondNumber = generationNumber();
  const operator = generationMathOperator();

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = String(calcNums(firstNumber, secondNumber, operator));

  return [question, correctAnswer];
}

const description = 'What is the result of the expression?';
runGame(description, generateCalcQuestion);