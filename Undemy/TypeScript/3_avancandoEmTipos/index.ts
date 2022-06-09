/*/*/console.log("//----------------------------------------------------------------");
/*/*/console.log("//                     1 - array");
/*/*/console.log("//________________________________________________________________");
/*/*/
/*/*/
/*/*/let numbers: number[] = [1, 2, 3, 4, 5];
/*/*/
/*/*/console.log(numbers);
/*/*/
/*/*/numbers.push(6)
/*/*/
/*/*/console.log(numbers[5])
/*/*/
/*/*/ // numbers = "teste" <----------- ele avisa
/*/*/console.log("numbers = teste <----------- ele avisa")
/*/*/console.log("")
/*/*/
/*/*/const nomes: string[] = ["teste", "testjose", "kose", "lose"] 
/*/*/console.log(nomes)
/*/*/
/*/*/console.log("")
/*/*/console.log("//----------------------------------------------------------------")
/*/*/console.log("//                     2 - outra sintaxe arrays <number> and <string>  are  ")
/*/*/console.log("//________________________________________________________________")
/*/*/console.log("")
/*/*/
/*/*/const nums: Array<number> = [100, 200, 100, 200, 100, 100]
/*/*/
/*/*/console.log("const nums: Array<number> = [100, 200, 100, 200, 100, 100]")
/*/*/console.log(nums)
/*/*/
/*/*/console.log("")
/*/*/
/*/*/const noms: Array<String> = ["teste", "testjose", "kose",]
/*/*/
/*/*/console.log("const noms: Array<String> = [teste, testjose, kose,]")
/*/*/console.log(noms)
/*/*/
/*/*/console.log("")
/*/*/console.log("//----------------------------------------------------------------")
/*/*/console.log("//                     3 - any    ")
/*/*/console.log("//________________________________________________________________")
/*/*/console.log("")
/*/*/
const ar1: any = [1, 2, 3, 4, 5 , "jose", "kose", "antonio", [1,2,3,4, "muita coisa", "muita coisa mesmo"]]
/*/*/
/*/*/console.log(ar1)
/*/*/
/*/*/console.log("")
/*/*/console.log("//----------------------------------------------------------------")
/*/*/console.log("//                     4 - paramentros tipados")
/*/*/console.log("//________________________________________________________________")
/*/*/console.log("")
/*/*/
/*/*/
/*/*/function soma(a: number, b: number){
/*/*/        console.log(`a soma de ${a} e de ${b} é ` + (a+b))
}
/*/*/
soma(5, 2)
/*/*/
/*/*/console.log("")
/*/*/console.log("//----------------------------------------------------------------")
/*/*/console.log("//                    5 - retorno de function")
/*/*/console.log("//________________________________________________________________")
/*/*/console.log("")
/*/*/
/*/*/function greeting(name: string){
/*/*/    return `Olá ${name}`
/*/*/
/*/*/}
/*/*/
/*/*/console.log(greeting("Vinicius"))
/*/*/
/*/*/console.log("")
/*/*/console.log("//----------------------------------------------------------------")
/*/*/console.log("//                    6 - function anonima")
/*/*/console.log("//________________________________________________________________")
/*/*/console.log("")
/*/*/
/*/*/setTimeout(function() {
/*/*/    
/*/*/    const Sallary:number = 100
/*/*/
/*/*/    //console.log(Sallary)
/*/*/
/*/*/}, 0) // ele imprime depois de <valor ou numbero> em millesegundos após ser chamada.
/*/*/
/*/*/
/*/*/console.log("")
/*/*/console.log("//----------------------------------------------------------------")
/*/*/console.log("//                    7 - tipos de objetos")
/*/*/console.log("//________________________________________________________________")
/*/*/console.log("")
/*/*/
/*/*/function passCordinates(coor: {X: number, Y: number}){
/*/*/
/*/*/    console.log("")
/*/*/    console.log("X cordenadas é " + coor.X)
/*/*/    console.log("Y cordenadas é " + coor.Y)
/*/*/    console.log("")
/*/*/
/*/*/}
/*/*/
/*/*/const objetoCordenadas = {X: 329, Y: 84.2}
/*/*/
/*/*/passCordinates(objetoCordenadas)
/*/*/
/*/*/
/*/*/const pessoaObject: {nome: string, surname: string} = {nome: "Vinicius", surname: "Freitas"}
/*/*/console.log(pessoaObject)
/*/*/
/*/*/
/*/*/console.log("")
/*/*/console.log("//----------------------------------------------------------------")
/*/*/console.log("//                   8 -  props opcionais")
/*/*/console.log("//________________________________________________________________")
/*/*/console.log("")
/*/*/
/*/*/function showNumber(a: number, b?: number, c?: number){
/*/*/    console.log("A:" + a)
/*/*/    console.log("B:" + b)
/*/*/
/*/*/    if(c) {
/*/*/    console.log("C:" + c)
/*/*/    }
/*/*/    console.log("")
 /*/*/
/*/*/}
/*/*/
/*/*/showNumber(1,2,3)
/*/*/showNumber(4,5)
/*/*/
/*/*/console.log("")
/*/*/console.log("//----------------------------------------------------------------")
/*/*/console.log("//                   9 -  props opcionais")
/*/*/console.log("//________________________________________________________________")
/*/*/console.log("")
/*/*/
/*/*/
/*/*/function advancedGreeting(firstName: string, lastName?: string) {
/*/*/
/*/*/    if(lastName !== undefined){
/*/*/       return console.log(`Olá ${firstName} ${lastName}, tudo bem?`)
/*/*/    }
/*/*/    
/*/*/    return console.log(`Olá ${firstName}, tudo bem? `)
/*/*/    
/*/*/}
/*/*/
/*/*/advancedGreeting("vinicius",)
/*/*/
/*/*/console.log("")
/*/*/console.log("//----------------------------------------------------------------")
/*/*/console.log("//                  10 - Union type")
/*/*/console.log("//________________________________________________________________")
/*/*/console.log("")
/*/*/
/*/*/function showBalance(balance?: string | number | boolean) {
/*/*/
/*/*/    if (!balance) {
/*/*/        return console.log("o saldo da conta nao existe")
/*/*/    }
/*/*/        return console.log(`o saldo da conta é de R$ ${balance}`)
/*/*/}
/*/*/
/*/*/showBalance(100)
/*/*/showBalance("500")
/*/*/showBalance(false)
/*/*/
/*/*/console.log("")
/*/*/
/*/*/const arr2: Array < number | string | boolean > = [1000, "-500", false]
/*/*/
/*/*/showBalance(arr2[0])
/*/*/showBalance(arr2[1])
/*/*/showBalance(arr2[2])
/*/*/
/*/*/console.log("");
/*/*/console.log("//----------------------------------------------------------------");
/*/*/console.log("//                  11 - avancando em Union type");
/*/*/console.log("//________________________________________________________________");
/*/*/console.log("");
/*/*/
/*/*/function showUserRole(role: boolean| string ){
/*/*/    if (typeof role === "boolean"){
/*/*/       return `Usuario nao aprovado`
/*/*/    }
/*/*/
/*/*/        return `A funcao do usuario é de ${role}`
/*/*/
/*/*/}
/*/*/
/*/*/console.log(showUserRole(false))
/*/*/
/*/*/console.log(showUserRole("admin"))
/*/*/
/*/*/console.log("");
/*/*/console.log("//----------------------------------------------------------------");
/*/*/console.log("//                  12 - type alias");
/*/*/console.log("//________________________________________________________________");
/*/*/console.log("");
/*/*/
/*/*/type ID = string | number
/*/*/
/*/*/function showId(id: ID){
/*/*/   console.log(`O ID é ${id}`);
/*/*/}
/*/*/
/*/*/showId(1)
/*/*/showId("200")
/*/*/
/*/*/
/*/*/console.log("");
/*/*/console.log("//----------------------------------------------------------------");
/*/*/console.log("//                  13 - interface");
/*/*/console.log("//________________________________________________________________");
/*/*/console.log("");
/*/*/
/*/*/interface Point {
/*/*/    X: number;
/*/*/    Y: number;
/*/*/    Z: number;
/*/*/
/*/*/}
/*/*/
/*/*/function showCordes(obj: Point) {
/*/*/    console.log(`X:${obj.X}, Y:${obj.Y}, Z:${obj.Z}`);
/*/*/}
/*/*/
/*/*/const coordObjet: Point = {
/*/*/    X:0,
/*/*/    Y:35,
/*/*/    Z:42
/*/*/}
/*/*/
/*/*/showCordes(coordObjet)
/*/*/
/*/*/
/*/*/console.log("");
/*/*/console.log("//----------------------------------------------------------------");
/*/*/console.log("//                  14 - interface X type alias");
/*/*/console.log("//________________________________________________________________");
/*/*/console.log("");
/*/*/
/*/*/var ano_atual = new Date().getFullYear();
/*/*/var ano_informado = 1998;
/*/*/
/*/*/interface person {
/*/*/    name: string
/*/*/}
/*/*/interface person {
/*/*/    age: number
/*/*/}
/*/*/
/*/*/const somePerson: person = {name: "Vinicus", age:(ano_atual - ano_informado)}
/*/*/
/*/*/console.log(somePerson)
/*/*/
/*/*/type personType = {
/*/*/    name: string
/*/*/}
/*/*/
/*/*/console.log("");
/*/*/console.log("//----------------------------------------------------------------");
/*/*/console.log("//                  15 -  literal types");
/*/*/console.log("//________________________________________________________________");
/*/*/console.log("");
/*/*/
/*/*/let test: "testando"
/*/*/test = "testando"
/*/*/console.log(test);
/*/*/
/*/*/function  showDirection (direction: "left" | "right " | "up" | "down"){
/*/*/       console.log("the direction is " + direction)
/*/*/}
/*/*/showDirection("down")
/*/*/
/*/*/console.log("");
/*/*/console.log("//----------------------------------------------------------------");
/*/*/console.log("//                  16 - not null assertions operators");
/*/*/console.log("//________________________________________________________________");
/*/*/console.log("");
/*/*/
const span = document.getElementById("span-x")
/*/*/
console.log(span!.innerHTML)
/*/*/
/*/*/console.log("");
/*/*/console.log("//----------------------------------------------------------------");
/*/*/console.log("//                  17 - bigint");
/*/*/console.log("//________________________________________________________________");
/*/*/console.log("");
/*/*/
/*/*/let n: bigint
/*/*/
/*/*/n = 10000n
/*/*/
/*/*/console.log(n)
/*/*/console.log(n + 100n)
/*/*/console.log(typeof n)
/*/*/
/*/*/console.log("");
/*/*/console.log("//----------------------------------------------------------------");
/*/*/console.log("//                  18 - Symbol");
/*/*/console.log("//________________________________________________________________");
/*/*/console.log("");
/*/*/
/*/*/let symbolA: symbol = Symbol("a")
/*/*/let symbolB = Symbol("a")
/*/*/
/*/*/console.log(symbolA == symbolB)
/*/*/console.log(symbolA === symbolB)

// FINAL DA PAGINA
const element: HTMLElement = document.getElementById('personDetails') as HTMLElement
element.innerHTML =  `<br>console.log&#40;"//----------------------------------------------------------------"&#41;;
<br>console.log&#40;"//                     1 - array"&#41;;
<br>console.log&#40;"//________________________________________________________________"&#41;;
<br>
<br>
<br>let numbers: number[] = [1, 2, 3, 4, 5];
<br>
<br>console.log&#40;numbers&#41;;
<br>
<br>numbers.push&#40;6&#41;
<br>
<br>console.log&#40;numbers[5]&#41;
<br>
<br> // numbers = "teste" <----------- ele avisa
<br>console.log&#40;"numbers = teste <----------- ele avisa"&#41;
<br>console.log&#40;""&#41;
<br>
<br>const nomes: string[] = ["teste", "testjose", "kose", "lose"] 
<br>console.log&#40;nomes&#41;
<br>
<br>console.log&#40;""&#41;
<br>console.log&#40;"//----------------------------------------------------------------"&#41;
<br>console.log&#40;"//                     2 - outra sintaxe arrays <number> and <string>  are  "&#41;
<br>console.log&#40;"//________________________________________________________________"&#41;
<br>console.log&#40;""&#41;
<br>
<br>const nums: Array<number> = [100, 200, 100, 200, 100, 100]
<br>
<br>console.log&#40;"const nums: Array<number> = [100, 200, 100, 200, 100, 100]"&#41;
<br>console.log&#40;nums&#41;
<br>
<br>console.log&#40;""&#41;
<br>
<br>const noms: Array<String> = ["teste", "testjose", "kose",]
<br>
<br>console.log&#40;"const noms: Array<String> = [teste, testjose, kose,]"&#41;
<br>console.log&#40;noms&#41;
<br>
<br>console.log&#40;""&#41;
<br>console.log&#40;"//----------------------------------------------------------------"&#41;
<br>console.log&#40;"//                     3 - any    "&#41;
<br>console.log&#40;"//________________________________________________________________"&#41;
<br>console.log&#40;""&#41;
<br>
const ar1: any = [1, 2, 3, 4, 5 , "jose", "kose", "antonio", [1,2,3,4, "muita coisa", "muita coisa mesmo"]]
<br>
<br>console.log&#40;ar1&#41;
<br>
<br>console.log&#40;""&#41;
<br>console.log&#40;"//----------------------------------------------------------------"&#41;
<br>console.log&#40;"//                     4 - paramentros tipados"&#41;
<br>console.log&#40;"//________________________________________________________________"&#41;
<br>console.log&#40;""&#41;
<br>
<br>
<br>function soma&#40;a: number, b: number&#41;&#123;
<br>        console.log&#40;&#96;	a soma de $&#123;a&#125; e de $&#123;b&#125; é &#96;	 + &#40;a+b&#41;&#41;
&#125;
<br>
soma&#40;5, 2&#41;
<br>
<br>console.log&#40;""&#41;
<br>console.log&#40;"//----------------------------------------------------------------"&#41;
<br>console.log&#40;"//                    5 - retorno de function"&#41;
<br>console.log&#40;"//________________________________________________________________"&#41;
<br>console.log&#40;""&#41;
<br>
<br>function greeting&#40;name: string&#41;&#123;
<br>    return &#96;	Olá $&#123;name&#125;&#96;	
<br>
<br>&#125;
<br>
<br>console.log&#40;greeting&#40;"Vinicius"&#41;&#41;
<br>
<br>console.log&#40;""&#41;
<br>console.log&#40;"//----------------------------------------------------------------"&#41;
<br>console.log&#40;"//                    6 - function anonima"&#41;
<br>console.log&#40;"//________________________________________________________________"&#41;
<br>console.log&#40;""&#41;
<br>
<br>setTimeout&#40;function&#40;&#41; &#123;
<br>    
<br>    const Sallary:number = 100
<br>
<br>    //console.log&#40;Sallary&#41;
<br>
<br>&#125;, 0&#41; // ele imprime depois de <valor ou numbero> em millesegundos após ser chamada.
<br>
<br>
<br>console.log&#40;""&#41;
<br>console.log&#40;"//----------------------------------------------------------------"&#41;
<br>console.log&#40;"//                    7 - tipos de objetos"&#41;
<br>console.log&#40;"//________________________________________________________________"&#41;
<br>console.log&#40;""&#41;
<br>
<br>function passCordinates&#40;coor: &#123;X: number, Y: number&#125;&#41;&#123;
<br>
<br>    console.log&#40;""&#41;
<br>    console.log&#40;"X cordenadas é " + coor.X&#41;
<br>    console.log&#40;"Y cordenadas é " + coor.Y&#41;
<br>    console.log&#40;""&#41;
<br>
<br>&#125;
<br>
<br>const objetoCordenadas = &#123;X: 329, Y: 84.2&#125;
<br>
<br>passCordinates&#40;objetoCordenadas&#41;
<br>
<br>
<br>const pessoaObject: &#123;nome: string, surname: string&#125; = &#123;nome: "Vinicius", surname: "Freitas"&#125;
<br>console.log&#40;pessoaObject&#41;
<br>
<br>
<br>console.log&#40;""&#41;
<br>console.log&#40;"//----------------------------------------------------------------"&#41;
<br>console.log&#40;"//                   8 -  props opcionais"&#41;
<br>console.log&#40;"//________________________________________________________________"&#41;
<br>console.log&#40;""&#41;
<br>
<br>function showNumber&#40;a: number, b?: number, c?: number&#41;&#123;
<br>    console.log&#40;"A:" + a&#41;
<br>    console.log&#40;"B:" + b&#41;
<br>
<br>    if&#40;c&#41; &#123;
<br>    console.log&#40;"C:" + c&#41;
<br>    &#125;
<br>    console.log&#40;""&#41;
 <br>
<br>&#125;
<br>
<br>showNumber&#40;1,2,3&#41;
<br>showNumber&#40;4,5&#41;
<br>
<br>console.log&#40;""&#41;
<br>console.log&#40;"//----------------------------------------------------------------"&#41;
<br>console.log&#40;"//                   9 -  props opcionais"&#41;
<br>console.log&#40;"//________________________________________________________________"&#41;
<br>console.log&#40;""&#41;
<br>
<br>
<br>function advancedGreeting&#40;firstName: string, lastName?: string&#41; &#123;
<br>
<br>    if&#40;lastName !== undefined&#41;&#123;
<br>       return console.log&#40;&#96;	Olá $&#123;firstName&#125; $&#123;lastName&#125;, tudo bem?&#96;	&#41;
<br>    &#125;
<br>    
<br>    return console.log&#40;&#96;	Olá $&#123;firstName&#125;, tudo bem? &#96;	&#41;
<br>    
<br>&#125;
<br>
<br>advancedGreeting&#40;"vinicius",&#41;
<br>
<br>console.log&#40;""&#41;
<br>console.log&#40;"//----------------------------------------------------------------"&#41;
<br>console.log&#40;"//                  10 - Union type"&#41;
<br>console.log&#40;"//________________________________________________________________"&#41;
<br>console.log&#40;""&#41;
<br>
<br>function showBalance&#40;balance?: string | number | boolean&#41; &#123;
<br>
<br>    if &#40;!balance&#41; &#123;
<br>        return console.log&#40;"o saldo da conta nao existe"&#41;
<br>    &#125;
<br>        return console.log&#40;&#96;	o saldo da conta é de R$ $&#123;balance&#125;&#96;	&#41;
<br>&#125;
<br>
<br>showBalance&#40;100&#41;
<br>showBalance&#40;"500"&#41;
<br>showBalance&#40;false&#41;
<br>
<br>console.log&#40;""&#41;
<br>
<br>const arr2: Array < number | string | boolean > = [1000, "-500", false]
<br>
<br>showBalance&#40;arr2[0]&#41;
<br>showBalance&#40;arr2[1]&#41;
<br>showBalance&#40;arr2[2]&#41;
<br>
<br>console.log&#40;""&#41;;
<br>console.log&#40;"//----------------------------------------------------------------"&#41;;
<br>console.log&#40;"//                  11 - avancando em Union type"&#41;;
<br>console.log&#40;"//________________________________________________________________"&#41;;
<br>console.log&#40;""&#41;;
<br>
<br>function showUserRole&#40;role: boolean| string &#41;&#123;
<br>    if &#40;typeof role === "boolean"&#41;&#123;
<br>       return &#96;	Usuario nao aprovado&#96;	
<br>    &#125;
<br>
<br>        return &#96;	A funcao do usuario é de $&#123;role&#125;&#96;	
<br>
<br>&#125;
<br>
<br>console.log&#40;showUserRole&#40;false&#41;&#41;
<br>
<br>console.log&#40;showUserRole&#40;"admin"&#41;&#41;
<br>
<br>console.log&#40;""&#41;;
<br>console.log&#40;"//----------------------------------------------------------------"&#41;;
<br>console.log&#40;"//                  12 - type alias"&#41;;
<br>console.log&#40;"//________________________________________________________________"&#41;;
<br>console.log&#40;""&#41;;
<br>
<br>type ID = string | number
<br>
<br>function showId&#40;id: ID&#41;&#123;
<br>   console.log&#40;&#96;	O ID é $&#123;id&#125;&#96;	&#41;;
<br>&#125;
<br>
<br>showId&#40;1&#41;
<br>showId&#40;"200"&#41;
<br>
<br>
<br>console.log&#40;""&#41;;
<br>console.log&#40;"//----------------------------------------------------------------"&#41;;
<br>console.log&#40;"//                  13 - interface"&#41;;
<br>console.log&#40;"//________________________________________________________________"&#41;;
<br>console.log&#40;""&#41;;
<br>
<br>interface Point &#123;
<br>    X: number;
<br>    Y: number;
<br>    Z: number;
<br>
<br>&#125;
<br>
<br>function showCordes&#40;obj: Point&#41; &#123;
<br>    console.log&#40;&#96;	X:$&#123;obj.X&#125;, Y:$&#123;obj.Y&#125;, Z:$&#123;obj.Z&#125;&#96;	&#41;;
<br>&#125;
<br>
<br>const coordObjet: Point = &#123;
<br>    X:0,
<br>    Y:35,
<br>    Z:42
<br>&#125;
<br>
<br>showCordes&#40;coordObjet&#41;
<br>
<br>
<br>console.log&#40;""&#41;;
<br>console.log&#40;"//----------------------------------------------------------------"&#41;;
<br>console.log&#40;"//                  14 - interface X type alias"&#41;;
<br>console.log&#40;"//________________________________________________________________"&#41;;
<br>console.log&#40;""&#41;;
<br>
<br>var ano_atual = new Date&#40;&#41;.getFullYear&#40;&#41;;
<br>var ano_informado = 1998;
<br>
<br>interface person &#123;
<br>    name: string
<br>&#125;
<br>interface person &#123;
<br>    age: number
<br>&#125;
<br>
<br>const somePerson: person = &#123;name: "Vinicus", age:&#40;ano_atual - ano_informado&#41;&#125;
<br>
<br>console.log&#40;somePerson&#41;
<br>
<br>type personType = &#123;
<br>    name: string
<br>&#125;
<br>
<br>console.log&#40;""&#41;;
<br>console.log&#40;"//----------------------------------------------------------------"&#41;;
<br>console.log&#40;"//                  15 -  literal types"&#41;;
<br>console.log&#40;"//________________________________________________________________"&#41;;
<br>console.log&#40;""&#41;;
<br>
<br>let test: "testando"
<br>test = "testando"
<br>console.log&#40;test&#41;;
<br>
<br>function  showDirection &#40;direction: "left" | "right " | "up" | "down"&#41;&#123;
<br>       console.log&#40;"the direction is " + direction&#41;
<br>&#125;
<br>showDirection&#40;"down"&#41;
<br>
<br>console.log&#40;""&#41;;
<br>console.log&#40;"//----------------------------------------------------------------"&#41;;
<br>console.log&#40;"//                  16 - not null assertions operators"&#41;;
<br>console.log&#40;"//________________________________________________________________"&#41;;
<br>console.log&#40;""&#41;;
<br>
const span = document.getElementById&#40;"span-x"&#41;
<br>
console.log&#40;span!.innerHTML&#41;
<br>
<br>console.log&#40;""&#41;;
<br>console.log&#40;"//----------------------------------------------------------------"&#41;;
<br>console.log&#40;"//                  17 - bigint"&#41;;
<br>console.log&#40;"//________________________________________________________________"&#41;;
<br>console.log&#40;""&#41;;
<br>
<br>let n: bigint
<br>
<br>n = 10000n
<br>
<br>console.log&#40;n&#41;
<br>console.log&#40;n + 100n&#41;
<br>console.log&#40;typeof n&#41;
<br>
<br>console.log&#40;""&#41;;
<br>console.log&#40;"//----------------------------------------------------------------"&#41;;
<br>console.log&#40;"//                  18 - Symbol"&#41;;
<br>console.log&#40;"//________________________________________________________________"&#41;;
<br>console.log&#40;""&#41;;
<br>
<br>let symbolA: symbol = Symbol&#40;"a"&#41;
<br>let symbolB = Symbol&#40;"a"&#41;
<br>
<br>console.log&#40;symbolA == symbolB&#41;
<br>console.log&#40;symbolA === symbolB&#41;
<br>`;