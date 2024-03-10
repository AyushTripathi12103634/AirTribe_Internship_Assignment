import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let content = '';

const questions = [
  { key: 'PORT', question: 'Enter the PORT: ' },
  { key: 'MONGOURL', question: 'Enter the MONGOURL: ' },
  { key: 'JWT_SECRET', question: 'Enter the JWT_SECRET: ' },
];

function askQuestion(index) {
  if (index === questions.length) {
    fs.writeFileSync('.env', content);
    console.log(".env File Created");
    rl.close();
  } else {
    rl.question(questions[index].question, (answer) => {
      content += `${questions[index].key}=${answer}\n`;
      askQuestion(index + 1);
    });
  }
}

askQuestion(0);
