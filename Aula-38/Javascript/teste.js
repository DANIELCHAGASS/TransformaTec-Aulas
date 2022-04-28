const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`Qual o seu nome?`, name => {
    console.log(`Hi ${nome}!`);
    readline.close();
});     


