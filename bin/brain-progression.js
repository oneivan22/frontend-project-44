#!/usr/bin/env node
import readlineSync from 'readline-sync';

// Функция для генерации случайного числа
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция создания прогрессии с пропущенным числом
const generateProgression = () => {
  const length = getRandomInt(5, 10); // Длина прогрессии от 5 до 10
  const step = getRandomInt(1, 10);  // Шаг прогрессии
  const start = getRandomInt(1, 20); // Начальное число
  const hiddenIndex = getRandomInt(0, length - 1); // Индекс скрытого числа

  let progression = [];
  let correctAnswer;

  for (let i = 0; i < length; i += 1) {
    const current = start + i * step;
    if (i === hiddenIndex) {
      progression.push('..');
      correctAnswer = String(current);
    } else {
      progression.push(String(current));
    }
  }

  return {
    question: progression.join(' '),
    answer: correctAnswer,
  };
};

// Основная функция игры
const runProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  // Играем 3 раунда
  for (let i = 0; i < 3; i += 1) {
    const { question, answer } = generateProgression();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  // Если все ответы верные
  console.log(`Congratulations, ${userName}!`);
};

runProgressionGame();