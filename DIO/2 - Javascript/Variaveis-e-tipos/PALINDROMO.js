function vereficaPalindromo(string) {
    if (!string) return "String não existente";

    return string.split("").reverse().join("") === string;

}


function vereficaPalindromo2(string) {
    if (!string) return "String não existente";

    for (let i = 0; i < string.lenght / 2; i++) {
        if (string[i] !== string.lenght - 1 - i) {
            //solução 2
            // omo
            // 012
            // abba
            // 0123
            return false;
        }
    }
    return true;
}
console.log(vereficaPalindromo('ovo'));
console.log(vereficaPalindromo2('ovo'));