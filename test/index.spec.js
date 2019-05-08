const expect = require('chai').expect;
const cardValidator = require('../lib/index');

describe('cardValidator()', () => {
  describe('Número de cartão válido:', () => {
    it('Retorna false: Entrada válida menor que 16 digitos', () => {
      expect(cardValidator(8532)).to.equal(false);
    });
    it('Retorna true: Entrada válida de 16 dígitos', () => {
      expect(cardValidator(4984235062514488)).to.equal(true);
    });
    it('Retorna true: Entrada válida como string', () => {
      expect(cardValidator('4984235062514488')).to.equal(true);
    });
  });
  
  describe('Número de cartão inválido:', () => {
    it('Retorna false: Cartão inválido', () => {
      expect(cardValidator('4984 2350 6251 4489')).to.equal(false);
    });
    it('Retorna false: Entrada inválida (menor que 16 dígitos)', () => {
      expect(cardValidator(49842350)).to.equal(false);
    });
    it('Retorna false: Entrada inválida (tipo booleano)', () => {
      expect(cardValidator(true)).to.equal(false);
    });
  });
})
