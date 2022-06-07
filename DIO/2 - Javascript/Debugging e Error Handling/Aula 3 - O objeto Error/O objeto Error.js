/*new Error(message, filleName, lineNumber);

const MeuErro = new Error('Menssagem Invalida');

throw MeuErro;*/


const MeuErro = new Error('Menssagem Invalida');
MeuErro.name = "invalidMessage";


console.log(MeuErro.name);

console.log(MeuErro.stack);

console.log(MeuErro);
throw MeuErro;