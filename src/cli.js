import readlineSync from 'readline-sync'

export default function welcomeUser() {
  return readlineSync.question('May I have your name? ')
}
