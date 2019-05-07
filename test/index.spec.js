const expect = require('chai').expect;
const cardValidator = require('../lib/index');

describe('cardValidator()', () => {
  describe('Número de cartão válido:'), () => {
    it('Retorna true: Entrada válida de 16 dígitos', () => { 
      expect(cardValidator(4984235062514488)).to.equal(false);
    });
    it('Retorna false: Entrada inválida (menor que 16 dígitos)', () => {
      expect(cardValidator(49842350)).to.equal(false);
    });

  describe('Número de cartão inválido:', () => {
    it('Retorna false: Cartão inválido', () => {
      expect(cardValidator()).to.equal(false);
    });
    
  });


  
})
