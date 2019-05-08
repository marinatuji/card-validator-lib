# Validador de Cartão de Crédito v.1.0.0 (Projeto com objetivo pedagógico)

Esta biblioteca se destina à validação de cartões de 16 dígitos, utilizando o algoritmo de [Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm) para uso em aplicações desenvolvidas em JavaScript.

## Como instalar:

```node
> npm install card-validator-lib
```

## Como utilizar:

```shell
> const result = require("card-validator-lib");
> result.cardValidator("4 9 8 4   2 3 5 0   6 2 5 1   4 4 8 8");
> // retorna true
```

## Roadmap Oficial do Projeto

Versão 1.1.0 (Maio/2019)

  * funcionalidades: validação de cartão de 16 dígitos;
  * tipo de entrada de dados: para números de cartão de crédito com e sem máscara. 

Versão 1.0.0 (Released)

  * estrutura inicial do projeto, utilizando a prática de desenvolvimento TDD (Test Driven Development), sem funcionalidades implementadas.


## Conceitos

O cartão é formado por uma sequência de dígitos, criada de acordo com convenções estabelecidas para seu uso. Essa sequência pode seguir a máscara #### #### #### ####.

Os primeiros dígitos referem-se a bandeira do cartão, essas regras foram definidas pela norma ISO/IEC 7812, veja alguns exemplos abaixo:
  * VISA começa com 4
  * Mastercard entre 51-55
  * American Express entre 34-37

Os primeiros 6 dígitos são para identificar a bandeira do cartão e o tipo (débito ou crédito), os 9 dígitos na sequência são para identificar o cliente do cartão, e o último dígito é definido por uma fórmula matemática inventada por Hans Peter Luhn (em 1954), essa fórmula é inteligente o suficiente para detectar qualquer erro único (de um único dígito, por exemplo), tal como trocar o 9 por um 6.

### Validação do cartão de crédito

Exemplo da validação de um cartão: 4 9 8 4   2 3 5 0   6 2 5 1   4 4 8 8
A soma dos dígitos em posição par por 2 e no caso, se o número tiver dois dígitos some o primeiro com o segundo, exemplo 12 seria 1 + 2 = 3, multiplique os números em posição ímpar por 1, somar todos os valores, verificar se é um multiplo de 10.
Para nosso exemplo o resultado de 62 conte a quantidade de números que falta para chegar em 70, nesse caso 8, compare esse número com o ultimo dígito do cartão, no caso de ser igual o cartão é válido.

4 9 8 4   2 3 5 0   6 2 5 1   4 4 8     8
8 9 7 4   4 3 1 0   3 2 1 1   8 4 7     62

[fonte:](https://contaembanco.com.br/servicos/quais-e-quantos-sao-os-numeros-dos-cartoes-de-credito/)