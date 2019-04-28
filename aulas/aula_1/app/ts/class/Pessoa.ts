/*Criamos uma nova Classe e a nomeamos de "Pessoa".*/

class Pessoa{
    
    /*Criamos inicialmente 3 variaveis privadas: 
        -nome
        -idade
        -sexo
    */
    
    /*Variaveis privadas são aquelas que só podem ser acessadas pela própria classe.
        Elas são indicadas a partir do "private" antes do nome de cada variavel.*/
    
    /*Cada uma das variaveis possui um tipo indicado após os dois pontos.
        Sendo nome e sexo do tipo string (texto) e idade do tipo number (número).*/

    private nome: string;   
    private idade: number;  
    private sexo: string;

    /*A seguir criamos uma variavel data_de_nascimento, porém não indicamos seu tipo. 
        Quando não indicamos o tipo de uma variavel em TypeScript automaticamente ela recebe o tipo Any.
            Porém como adicionamos no "tsconfig" a opção " "noImplicitAny": true " ao nosso compilador
            ele irá impedir que não seja atribuido nenhum tipo para a variavel, evitando que ela receba
            o tipo Any automáticamente.*/

    private data_de_nascimento;

    /*Criamos também um "constructor" que vai indicar dentro dos parênteses quais serão os atributos necessários
    para a criação de uma nova Pessoa, ou seja, ele indica o que deverá ser recebido pela classe quando uma nova
    Pessoa for criada.
        Neste caso será necessário um nome, uma idade e um sexo.
            Lembrando que os dados dentro dos parênteses são variaveis que armazenam os parametros 
            recebidos pela classe na criação de uma nova Pessoa, mas não se referem às 3 variaveis 
            criadas acima.
                Obs: Não foram indicados os tipos de "nome", "idade" e "sexo" do "construcor", logo
                também sofreram com o mesmo erro da variavel "data_de_nascimento"*/

    constructor(nome, idade, sexo){

    }
}