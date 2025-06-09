#!/usr/bin/env node

import readlineSync from 'readline-sync'

const greetUser = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  return name
}

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generateProgression = (length) => {
  const start = getRandomInt(1, 100)
  const step = getRandomInt(1, 10)
  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }
  return progression
}

const hideElement = (progression) => {
  const index = getRandomInt(0, progression.length - 1)
  const hiddenElement = progression[index]
  progression[index] = '..'
  return { progression, hiddenElement }
}

const playGame = (name) => {
  console.log('What number is missing in the progression?')
  for (let i = 0; i < 3; i++) {
    const length = getRandomInt(5, 10)
    const progression = generateProgression(length)
    const { progression: hiddenProgression, hiddenElement } = hideElement(progression)
    console.log(`Question: ${hiddenProgression.join(' ')}`)
    const answer = readlineSync.question('Your answer: ')
    if (Number(answer) !== hiddenElement) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hiddenElement}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${name}!`)
}

const name = greetUser()
playGame(name)