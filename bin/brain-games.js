#!/usr/bin/env node
// ↑ Шебанг (обязательно!) — указывает, что скрипт запускается через Node.js

import welcomeUser from '../src/cli.js'

console.log('Welcome to the Brain Games!')

const name = welcomeUser()

console.log(`Hello, ${name}!`)
