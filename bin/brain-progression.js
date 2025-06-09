#!/usr/bin/env node
// ↑ Шебанг (обязательно!) — указывает, что скрипт запускается через Node.js

import { generationArithmeticProgression, replaceRandomWithDots } from '../src/helpers/helpers.js'
import runGame from '../src/runGame.js'

const generateProgressionQuestion = () => {
  const arr = generationArithmeticProgression()
  const [newArr, correctAnswer] = replaceRandomWithDots(arr)

  const question = newArr.join(' ')

  return [question, correctAnswer]
}

const description = `What number is missing in the progression?`
runGame(description, generateProgressionQuestion)
