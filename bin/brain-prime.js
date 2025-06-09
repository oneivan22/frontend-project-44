#!/usr/bin/env node

import runGame from '../src/runGame.js'
import { generationNumber, isPrime } from '../src/helpers/helpers.js'

const generatePrimeQuestion = () => {
  const num = generationNumber()
  const question = num
  const correctAnswer = isPrime(num) ? 'yes' : 'no'
  return [question, correctAnswer]
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'
runGame(description, generatePrimeQuestion)
