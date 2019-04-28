type letraOuNumero = string | number;
type numeroOuData = number | Date;

var x: letraOuNumero;

x = 3;
console.log(x);

x = 'Agora x eh uma string!';
console.log(x);

var y: numeroOuData;

y = 28042019;
console.log(y);

y = new Date();
console.log(y);