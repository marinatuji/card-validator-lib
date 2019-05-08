function cardValidator(card) {
  const inputCard = convertInputToArrayString(card);
  const arrayCard = parseToInt(inputCard);
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

function parseToInt(arrayCard) {
  if (arrayCard.length <= 19 && arrayCard.length >= 2) {
    return arrayCard.map(Number);
  }
  throw new Error(`Tamanho da entrada inválida: ${arrayCard.length}`)
}

function calcLuhn(arrayCard) {
  return arrayCard
    .slice(0, arrayCard.length - 1)
    .reverse()
    .map((currentValue, index) => (index % 2 === 0 ? currentValue : currentValue * 2))
    .map((currentValue, index, arr) => {
      if (currentValue !== 10) {
        return currentValue > 9 ? currentValue - 9 : currentValue
      }
      return 0;
    })
    .reduce((acc, currentValue,arr) => acc += currentValue);
}

module.exports = cardValidator;