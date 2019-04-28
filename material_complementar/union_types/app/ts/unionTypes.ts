/*Quando falamos que uma variavel pode receber mais de 1 unico tipo, na verdade estamos falando de
um tipo chamado Union Type, que pode receber outros tipos.
    A variavel "numeroOuLetra possui como tipo um Union Type que pode receber valores do tipo string
    ou valores do tipo number.*/

var numeroOuLetra: string | number;   // string | number é um Union Type!

/*Agora vamos testar para ver se realmente funciona!*/

/*Vamos primeiramente atribuir um valor do tipo number para a variavel numeroOuLetra.*/

numeroOuLetra = 2;  // 2 é do tipo number!

/*Agora vamos pedir para que o console nos mostre o valor de numeroOuLetra para verificar se ele
aceitou um valor do tipo number.*/

console.log(numeroOuLetra);

/*Vamos agora fazer a mesma coisa que no caso de cima, porém vamos usar o tipo string. 
    Atribuiremos um valor string para numeroOuLetra.
        Logo em seguida pedimos para o console mostrar o valor de numeroOuLetra, assim descobriremos
        se nosso Union Type pode realmente receber tanto number quanto string.*/

numeroOuLetra = 'Recebi uma string!';   // 'Recebi uma string!' é do tipo string!
console.log(numeroOuLetra);


/*Obs: Para acessar o console abriremos o index.html utilizando um navegador, normalmente acessamos o console 
utizando a tecla "F12" e clicando na aba "Console", porém podem existir nagedadores com sua própria forma de
abrir o console.*/
 
