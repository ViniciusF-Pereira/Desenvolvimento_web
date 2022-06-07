/*function verificaPalindromo(string){
    if (!string) return 'String Invalida';

    return string === string.split("").reverse().join("");
}

verificaPalindromo('');
// com return, retorna tranquilo o codigo ja com throw ele nao retorna e da o erro.
*/

function verificaPalindromo(string){
    if (!string) throw ("String Invalida");

    return string === string.split("").reverse().join("");
}

verificaPalindromo('');

function tryCatchExemplo(string){
   try { 
       
    return verificaPalindromo(string)
    
   }
   catch(e) {
       throw e;
   }
   finally{
       console.log('A string enviada foi: '+  string);
   }
}
console.log(tryCatchExemplo('ala'));
