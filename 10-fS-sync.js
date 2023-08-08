const { readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync('./content/new-file.txt', `here is tthe result  : ${first} : ${second}`,{flag: 'a'});

