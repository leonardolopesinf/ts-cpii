/*Criamos uma instancia da classe Pessoa, que não é nada mais do que criar uma nova Pessoa 
    Indicamos dentro do parenteses os atributos que a classe exige que uma Pessoa tenha.
        nome = 'João'
        idade = 17
        sexo = 'Masculino'
*/

var joao = new Pessoa('João', 17, 'Masculino');

/*Tentamos mudar o valor da variavel "nome" de "joao" que é uma Pessoa.
    Não conseguimos alterar o valor pois a variavel "nome" é privada e consequentemente só pode ser acessada
    pela própria classe Pessoa.*/

joao.nome = "leticia";