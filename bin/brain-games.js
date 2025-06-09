#!/usr/bin/env node

import welcomeUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = welcomeUser();
console.log(`Hello, ${userName}!`);