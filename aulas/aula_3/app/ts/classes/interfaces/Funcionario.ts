/*Criaremos uma interface Funcionario a qual irá impor padrões aos quais as classes deveram seguir.
    Estes padrões só deveram ser seguidos pelas classes que implementarem esta interface.
        Uma interface é um exemplo de classe abstrata, desta forma nao podemos instancia-la, ou seja 
        não podemos criar um funcionario a partir da interface Funcionario.
            A interface irá nos apresentar para o Polimorfismo, ao qual irá permitir que várias classes
            sejam funcionários, tendo que seguir os padrões impostos por esta interface.*/

interface Funcionario{

    /*Primeiro diremos que os funcionarios deverão ter um atributo "salario" que retorna um valor number.*/

    salario: number;

    /*Em seguida iremos indicar que funcionarios devem ter um metodo "mudarSalario" ao qual deve receber um
    novo salario do tipo number e ter um retorno vazio.
        Um metodo com retorno vazio é aquele que não irá retornar nada.
            Para indicarmos o retorno de um metodo iremos usar um ":" após a declaração do metodo e informaremos
            o tipo ao qual deve ser retornado.*/

    mudarSalario(novoSalario: number): void;

    /*OBS: O void não impede com que sejam retornados valores com outros tipos, ele apenas é uma indicação
    para o próprio programador, porém se tivessemos colocado "number", "string", etc... a interface irá impedir
    que seja retornado um tipo diferente do informado.*/

}