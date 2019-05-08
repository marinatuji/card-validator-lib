function cardValidator(card) {
  const inputCard = convertInputToArrayString(card);
  const arrayCard = parseToNumber(inputCard);
  const luhnNumber = calcLuhn(arrayCard);
  if (((10 - (luhnNumber % 10)) === arrayCard[arrayCard.length - 1])) {
    return true;
  }
  return false;
}

function convertInputToArrayString(card) {
  if (typeof card === 'string') {
    return card.replace(/\D/g, '').split('');
  } else if (typeof card === 'number') {
    return card.toString().split('');
  }
  throw new Error(`Tipo de entrada inválida: ${typeof card}`);
}

function parseToNumber(arrayCard) {
  if (arrayCard.length === 16) {
    return arrayCard
    // .reverse()
    .map(Number);
  }
  throw new Error(`Tamanho da entrada inválida: ${arrayCard.length}`)
}

function calcLuhn(arrayCard) {
  return arrayCard
    .slice(0, arrayCard.length - 1)
    .map((currentValue, index) => (index % 2 === 0 ? currentValue * 2 : currentValue))
    .map((currentValue, index, arr) => ((currentValue > 9) ? (currentValue - 9) : currentValue)) 
    .reduce((acc, currentValue,arr) => acc += currentValue);
}

module.exports = cardValidator;