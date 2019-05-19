/*Aqui iremos testar todo nosso código.
    Utilizaremos bastante do "console.log()" que será responsável por escrever mensagens no console do navegador.
        Para acessar esse console basta utilizar o "F12" em seu navegador e entrar na aba console.*/

var in204 = new Turma('In204', '2º ano'); // Criando turma in204.
var in303 = new Turma('In301', '3º ano'); // Criando turma in303.

var alayne = new Professor('Alayne', 25, 'EDCBA'); // Criando professora Alayne.
console.log(alayne); // Mostrando no console a professora Alayne.

var ygor = new Professor('Ygor', 26, 'ABCDE'); // Criando professor Ygor.
console.log(ygor); // Mostrando no console o professor Ygor.

/*Agora vamos supor que após criar o professor Ygor, notamos que colocamos o código errado na hora de sua criação.
    Então usaremos o metodo "mudarCodigo" para corrigir esse erro.
        Para chamar um metodo iremos primeiramente escolher qual instancia queremos usar, neste caso queremos usar
        o "ygor", após isso iremos usar o "." para indicar que queremos usar algo que está dentro dessa instancia,
        já dentro de "ygor" iremos usar o seu metodo "mudarCodigo", pois como ele é um Professor possui os metodos
        referentes a essa classe.
            Indicaremos dentro dos parenteses o novo codigo correto.*/

ygor.mudarCodigo('JKLMN');
console.log(ygor); // Testando para ver se erro foi corrigido.

var pedro = new Aluno('Pedro', 16, 20); // Criando aluno Pedro.
console.log(pedro); // Mostrando no console o aluno Pedro.

var leonardo = new Aluno('Leandro', 17, 13); // Criando aluno Leonardo.
console.log(leonardo); // Mostrando no console o aluno leonardo.

/*Ops.....
    Parece que na criação do aluno Leonardo colocamos seu nome como "Leandro".
        Para corrigir este erro usaremos um metodo da instancia "leonardo" chamada "mudarNome" que irá receber
        o novo nome da nossa instancia.*/

leonardo.mudarNome('Leonardo');
console.log(leonardo); // Testando para ver se corriguimos o erro.

/*Agora vamos usar um metodo da classe Turma, para adicionar alunos nas turmas.*/

in204.adicionaAluno(pedro);
console.log(in204.listaAlunos()); // Mostrando no console a lista de alunos da In204.

in303.adicionaAluno(leonardo);
console.log(in303.listaAlunos()); // Mostrando no console a lista de alunos da In303.
