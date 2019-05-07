# Validador de Cartão de Crédito v.1.0.0 (Projeto com objetivo pedagógico)

Esta biblioteca se destina à validação de cartão de crédito, utilizando o algoritmo de [Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm) para uso em aplicações desenvolvidas em JavaScript.

## Como instalar:

```node
> npm install card-validator-lib
```

## Como utilizar:

```shell
> const result = require("card-validator-lib");
> result.cpfValidator(cpfNumber)
> // retorna "CPF válido" ou "CPF inválido"
```

## Roadmap Oficial do Projeto

Versão 1.1.0 (Maio/2019)

  * funcionalidades: validação de cartão de crédito;
  * tipo de entrada de dados: para números de cartão de crédito com e sem máscara. 

Versão 1.0.0 (Released)

  * estrutura inicial do projeto, utilizando a prática de desenvolvimento TDD (Test Driven Development), sem funcionalidades implementadas.


## Conceitos

O cartão de crédito é formado por uma sequência de 16 dígitos, criada de acordo com um algoritmo. Essa sequência segue a máscara #### #### #### ####.

Os primeiros dígitos referem-se a bandeira do cartão, essas regras foram definidas pela norma ISO/IEC 7812, veja alguns exemplos abaixo:
  * VISA começa com 4
  * Mastercard entre 51-55
  * American Express entre 34-37

Os primeiros 6 dígitos são para identificar a bandeira do cartão e o tipo (débito ou crédito), os 9 dígitos na sequência são para identificar o cliente do cartão, e o último dígito é definido por uma fórmula matemática inventada por Hans Peter Luhn (em 1954), essa fórmula é inteligente o suficiente para detectar qualquer erro único (de um único dígito, por exemplo), tal como trocar o 9 por um 6.

### Validação do cartão de crédito

Exemplo da validação de um cartão: 4 9 8 4   2 3 5 0   6 2 5 1   4 4 8 8
A soma dos dígitos em posição impares por 2 e no caso, se o número tiver dois dígitos some o primeiro com o segundo, exemplo 12 seria 1 + 2 = 3, multiplique os números em posição ímpar por 1.

https://contaembanco.com.br/servicos/quais-e-quantos-sao-os-numeros-dos-cartoes-de-credito/
https://www.youtube.com/watch?v=72AEnGWo2r8
- Somente números, num total de 16 dígitos nas bandeiras master e visa
- Sendo 15 numeros bandeira Amex e 14 Diners
- Primeiros 6 dígitos, identifica a instituição Visa, Mastercard etc
- Os 9 seguintes identifica o cliente do cartão
- Último dígito é o verificador
- Para calcular basta multiplicar os números em posição ímpar por 2, (Se o número tiver dois dígitos some o primeiro com o segundo, exemplo 12 seria 1 + 2 = 3). E multiplique os números em posição par por 1.
- Some todos os números. O número verificador é um multiplo de 10 então o resultado de 62 é quantidade de números que falta para chegar em 70, nesse caso 8.

4 9 8 4   2 3 5 0   6 2 5 1   4 4 8     8
8 9 7 4   4 3 1 0   3 2 1 1   8 4 7     62