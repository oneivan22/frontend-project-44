#!/usr/bin/env node

import runGame from '../src/runGame.js';
import { generationNumber, isPrime } from '../src/helpers/helpers.js';

function generatePrimeQuestion() {
  const number = generationNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = String(number);

  return [question, correctAnswer];
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
runGame(description, generatePrimeQuestion);