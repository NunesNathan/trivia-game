# Trivia Game Project

# Contexto

Este projeto foi realizado em **grupo**, aplicando a metodologia **Agile Kanban**, com o objetivo de colocar em prática as ferramentas: _React e Redux ⚛️_.

O objetivo era desenvolver um jogo de perguntas e respostas baseado no jogo Trivia. O app começa com uma tela onde o jogador insere seu nome e e-mail. Em seguida, o mesmo é redirecionada para o jogo onde deve escolher uma das respostas disponíveis para cada uma das perguntas. A resposta deve ser marcada antes do cronômetro chegar ao zero, caso contrário a resposta será considerada como errada.

Cada pergunta respondida corretamente fará com que o jogador receba pontos. Estes pontos serão computados no header da aplicação. Após 5 perguntas respondidas, o jogador é redirecionado para uma tela de score indicando a sua pontuação. No final de cada jogo, o jogador também poderá acessar um ranking com as melhores pontuações.

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
## Melhorias para este projeto:

- Realizar testes unitários
- Melhorar responsividade
- Alterar redirecionamento do botão "jogar novamente"
- Ajustar quebra de linha de perguntas extensas
