/*Aqui iremos testar todo nosso código.
    Utilizaremos bastante do "console.log()" que será responsável por escrever mensagens no console do navegador.
        Para acessar esse console basta utilizar o "F12" em seu navegador e entrar na aba console.*/
var in204 = new Turma('In204', '2º ano');
var in303 = new Turma('In301', '3º ano');
var alayne = new Professor('Alayne', 25, 'EDCBA');
console.log(alayne);
var ygor = new Professor('Ygor', 26, 'ABCDE');
console.log(ygor);
ygor.mudarCodigo('JKLMN');
console.log(ygor);
var pedro = new Aluno('Pedro', 16, 20);
console.log(pedro);
var leonardo = new Aluno('Leandro', 17, 13);
console.log(leonardo);
leonardo.mudarNome('Leonardo');
console.log(leonardo);
in204.adicionaAluno(pedro);
console.log(in204.listaAlunos());
in303.adicionaAluno(leonardo);
console.log(in303.listaAlunos());
