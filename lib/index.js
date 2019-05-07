function cardValidator(card) {
  const inputCard = convertInputToArrayString(card);
  const arrayCard = parseToInt(inputCard);
  const arrayLuhn = calcArrayLuhn(arrayCard);
  const digitLuhn = calcAccLuhn(arrayLuhn);
  if (((digitLuhn*9)%10) === arrayCard[arrayCard.length - 1]) {
    return true;
  }
  return false;
}

function convertInputToArrayString(card) {
  if (typeof card === 'string') {
    return cpf.replace(/\D/g, '').split('');
  } else if (typeof cpf === 'number') {
    return cpf.toString().split('');
  }
  throw new Error(`Tipo de entrada inválida: ${typeof cpf}`);
}

function parseToInt(arrayCard) {
  if (arrayCard.length === 16) {
    return arrayCard.map((currentValue) => {
      return parseInt(currentValue);
    });
  }
  throw new Error(`Tamanho da entrada inválida: ${arrayCard.length}`)
}

function calcArrayLuhn(arrayCard) {
  return arrayCard.map((currentValue, index) => {
    if (index < arrayCard.length - 1) {
      if (index % 2 === 0) {
        let doubleValue = currentValue * 2;
        return toSingleDigit(doubleValue);
      }
      return currentValue;
    }
  });
}

function toSingleDigit(doubleValue) {
  if (doubleValue > 9) {
    let newArray = arrayEven[index].toString().split('');
    return parseInt(newArray[0]) + parseInt(newArray[1])
  }
  return doubleValue;
}

function calcAccLuhn(arrayLuhn) {
  return arrayLuhn.reduce((acc, currentValue) => {
    return acc += currentValue;
  }, 0);
}

module.exports = cardValidator;

