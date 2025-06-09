import readlineSync from 'readline-sync';

const readlineSyncQuestion = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
};

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export {readlineSyncQuestion, generateNumber};