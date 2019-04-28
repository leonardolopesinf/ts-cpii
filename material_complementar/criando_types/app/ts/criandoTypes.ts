/*Agora vamos aprender a criar Types.
    Types como seu próprio nome diz são tipos.
        Para criar criar tipos vamos o "type" como uma especie de "var".
            Utilizaremos da seguinte sintaxe: type nomeDaVariavel = tipos que pode receber...
                Para indicarmos os tipos que nosso Type pode receber podemos usar um Union Type.*/

/*Para praticar o uso de Types vamos criar 2 types.
    O Type "letraOuNumero" poderá receber valores do tipo string ou do tipo number.
        Já o Type numeroOuData poderá receber valores do tipo number ou do tipo Date.*/                

type letraOuNumero = string | number;
type numeroOuData = number | Date;

/*Agora vamos criar uma variavel "x" que será do tipo letraOuNumero.*/

var x: letraOuNumero;

/*Vamos atribuir um valor number para "x".
    Em seguida iremos pedir para o console mostrar o valor de "x" para verificar se ele armazenou
    corretamente um valor number.*/

x = 3;
console.log(x);

/*Vamos repetir o processo acima, porém agora iremos atribuir um valor do tipo string para verificar
se o "x" também aceita valores do tipo string.*/

x = 'Agora x eh uma string!';
console.log(x);

/*Agora trataremos do nosso segundo type.
    Realizaremos o mesmo processo que fizemos com "x", mas agora utilizando de uma variavel "y" e
    atribuindo valores do tipo number e Date.*/

var y: numeroOuData;

y = 28042019;
console.log(y);

/*O tipo Date é uma classe, então para criarmos um valor do tipo Date teremos que instanciar sua classe
utilizando o "new".
    Quando usamos o "new Date()" ele acessa a data atual , ou seja, "y" receberá a data de hoje.*/

y = new Date();
console.log(y);


/*Obs: Para acessar o console abriremos o index.html utilizando um navegador, normalmente acessamos o console 
utizando a tecla "F12" e clicando na aba "Console", porém podem existir nagedadores com sua própria forma de
abrir o console.*/
