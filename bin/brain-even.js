#!/usr/bin/env node

import { isEven, generationNumber } from '../src/helpers/helpers.js';
import runGame from '../src/runGame.js';

function generateEvenQuestion() {
  const number = generationNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = String(number);

  return [question, correctAnswer];
}

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
runGame(description, generateEvenQuestion);