# Trivia Game Project

# Contexto

Este projeto foi desenvolvido ao finalizar os  _Blocos 10 a 15 do curso da Trybe.  Este projeto foi realizado em **grupo** ! O objetivo era colocar em prática tudo o que aprendemos  sobre _React e Redux ⚛️_ e praticar a organização de um projeto em equipe com a metodologia **Agile Kanban** .

O objetivo era desenvolver um jogo de perguntas e respostas baseado no jogo Trivia, parecido um show do milhão americano, utilizando React e Redux.

O app começa com uma tela onde a pessoa que joga coloca seu nome e seu e-mail. O e-mail será usado para buscar a foto associada no site Gravatar, se houver.

Logo após, ela é redirecionada para o jogo onde deve escolher uma das respostas disponíveis para cada uma das perguntas. A resposta deve ser marcada antes de o contador de tempo chegar a zero, caso contrário a resposta deve ser considerada como errada.

Cada acerto dá à pessoa que joga pontos que deverão ser computados num placar no header da aplicação. Após 5 perguntas respondidas, a pessoa que joga é redirecionada para uma tela de score, onde o texto mostrado vai depender do número de acertos. No final de cada jogo, a pessoa que joga pode acessar o ranking com as melhores pontuações.

### _[Clique aqui](http://trivia-game-flax.vercel.app/ "trivia-game-flax.vercel.app")  para visualizar o projeto_

## APIs utilizadas:

### API de Trivia

Utilizamos a [API do Trivia](https://opentdb.com/api_config.php) para:
-   **Pegar o token de sessão da pessoa que está jogando**
-   **Pegar perguntas e respostas**
###  API do Gravatar

Utilizamos a API do [Gravatar](https://br.gravatar.com/site/implement/images/) para:
- **Vincular a fota cadastrada no Gravatar**

## Durante o desenvolvimento deste projeto fixamos os conhecimentos em:

-   Store Redux em aplicações React
    
-   Reducers no Redux em aplicações React
    
-   Actions no Redux em aplicações React
    
-   Dispatchers no Redux em aplicações React
    
-   Conectar Redux aos componentes React
    
-   Actions assíncronas na aplicação React que faz uso de Redux.

## Tecnologias usadas

### Stack e bibliotecas principais:

> Front-end:

 Desenvolvido usando: React, Redux, ES6, EsLint, CryptoJS, CSS,  Bootstrap

## Grupo formado por :

- **_André Melo_**
> [Linkedin](https://www.linkedin.com/in/adr-smelo/)
> [GitHub](https://github.com/Andre-S-Melo)
- **_Nathan Nunes_**
> [Linkedin](https://www.linkedin.com/in/nathannunes-/)
> [GitHub](https://github.com/NunesNathan)
- **_Renata Magno_** 
> [Linkedin](https://www.linkedin.com/in/renata-magno-656b3931/)
> [GitHub](https://github.com/re-magno)

## Instalando Dependências

> Front-end:

npm install

## Executando aplicação

> Para rodar o Front-end::
    
    ```
     npm start
    
    ```
## To-do 

Melhoras para este projeto:
- Realizar testes unitários
- Melhorar responsividade
- Alterar redirecionamento do botão "jogar novamente"
- Ajustar quebra de linha de perguntas extensas
