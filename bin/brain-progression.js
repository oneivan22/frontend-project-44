#!/usr/bin/env node

import { generationArithmeticProgression, replaceRandomWithDots } from '../src/helpers/helpers.js';
import runGame from '../src/runGame.js';

function generateProgressionQuestion() {
  const progression = generationArithmeticProgression();
  const [changedProgression, hiddenNumber] = replaceRandomWithDots(progression);
  const question = changedProgression.join(' ');

  return [question, String(hiddenNumber)];
}

const description = 'What number is missing in the progression?';
runGame(description, generateProgressionQuestion);