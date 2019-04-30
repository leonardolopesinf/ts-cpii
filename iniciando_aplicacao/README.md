# Criando Aplicação TypeScript

Iniciando uma aplicação TypeScript utilizando o Node.

## Requisitos:

O TypeScript tem como requisito o pacote do Node que pode ser baixado [aqui](https://nodejs.org/en/).



## Criando servidor Node:

### Chegando na pasta do projeto:

Primeiramente criaremos uma pasta onde será armazenado o projeto; lembrando que a mesma não pode ter caracteres especiais no nome, ou se chamar "typescript".

Após a criação da pasta, precisaremos abrir o "cmd".

Então vamos usar o comando `cd` para mudarmos o diretório atual para chegar até a pasta da nossa aplicação. Usaremos como exemplo o seguinte diretório: `C:\Users\Leo\Desktop\projeto`. Neste caso utilizaremos os seguintes comandos para chegar na pasta:

```
cd Users            // Troca o repositório de C:\ para Users.
cd Leo             // Troca o repositório de Users para Leo.
cd Desktop        // Troca o repositório de Leo para Desktop. 
cd projeto       // Troca o repositório de Desktop para projeto.
```

> Obs: Sempre verificar o diretório atual indicado pelo próprio cmd, logo que o mesmo é iniciado.

---

### Configurando Servidor:

Já dentro da pasta criaremos nosso servidor Node, onde poderemos instalar o TypeScript, a partir da ferramenta de gerenciamento do Node, o Node Package Manager (npm):  

``` 
npm init
```

Após a execução do comando `npm init` o Node irá pedir as configurações iniciais para o servidor:

```
package name: (projeto)        // Nome do seu servidor; lembrando que não pode conter caracteres especiais.
version: (1.0.0)              // Versão do Node ao qual será usada.
description:                 // Descrição sobre o seu servidor.
entry point: (index.js)     // Arquivo JavaScript que o servidor irá usar como página principal.
test command:              // Comando de Teste.
git repository:           // Repositório Git.
keywords:                // Palavras chaves para o servidor.
author:                 // Autor do servidor.
license: (ISC)         // Licença usada pelo servidor.
```

> Obs: Dentro dos parênteses estão as configurações padrões do servidor, ou seja, se nada for informado em um determinado campo ele receberá a configuração indicada dentro dos parênteses.

Usaremos apenas de algumas configurações, aquelas que não formos usar apenas iremos deixar em branco.

```
package name: (projeto)        // Fica a seu critério.
version: (1.0.0)              // Em branco, pois utilizaremos da versão padrão do Node.
description:                 // Fica a seu critério.
entry point: (index.js)     // Em branco, utilizaremos a configuração padrão para manter boas práticas.
test command:              // Em branco, não utilizaremos comandos de teste.
git repository:           // Em branco, não vincularemos um repositório git.
keywords:                // Fica a seu critério.
author:                 // Seu nome.
license: (ISC)         // Em branco, utilizaremos da licensa padrão do Node.
```

Por fim o Node irá pedir para confirmarmos as configurações e basta apertar "Enter" ou digitar "yes" para confirmar os dados. Feito isso o servidor estará criado e configurado.



## Configurando TypeScript:

### Instalação:

Utilizaremos novamente do cmd, já dentro do diretório do nosso projeto, então digitaremos o seguinte comando para a instalação do TypeScript:

```
npm install typescript --save-dev
```
---

### Configurando o TypeScript:

Após instalar o TypeScript precisaremos configura-lo, para isso criaremos um arquivo `tsconfig.json` dentro da pasta do projeto. 

Com a ajuda de um editor de textos, de preferencia o Visual Studio Code iremos inserir os seguintes dados no arquivo:

```
{
    "compilerOptions": {            // Adiciona configurações para o TypeScript.
        "target": "es6",           // Indica para qual versão do JavaScript o nosso TypeScript será traduzido.
        "outDir": "app/js",       //Indica a pasta que será criada para a alocação do nosso código traduzido.
        "noEmitOnError": true    //Evita com que o compilador do TypeScript traduza códigos com erros.
    },

    "include": [              // Indica a lista de pastas nas quais serão compiladas.
        "app/ts/**/*"        // Diretório onde ficará nossos arquivos TypeScript.
    ]
}
```



## Iniciando compilador TypeScript:

O compilador vai ser responsável por verificar se nosso código TypeScript possui erros, e também irá traduzi-lo para JavaScript, já que os navegadores não conseguem utilizar diretamente o TypeScript. 

Para utilizarmos o compilador temos que configurar um script de comando nas configurações do nosso servidor, que estão localizadas no arquivo `package.json`.

Iremos nos preocupar apenas com o seguinte trecho, ao qual lista os nossos scripts de comando:

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Iremos então configurar 2 comandos que serão responsáveis por executar o nosso compilador:

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc",        // Inicia o compilador, ao qual se encerra após realizar suas atribuições.
    "start": "tsc -w"       // Também inicia compilador, mas continua rodando em tempo real, observando o código.
  },
  ```
  
  

## Últimos passos:

Dentro da pasta do projeto vamos criar uma subpasta chamada `app` ( caso não exita ).

Dentro de `app` iremos criar outra subpasta chamada `ts`, onde vamos criar nossos arquivos TypeScript usando a extensão `.ts`.

Feito isso, tudo vai estar pronto para começar a programar em TypeScript!!
