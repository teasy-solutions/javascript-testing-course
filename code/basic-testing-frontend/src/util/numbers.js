import { validateStringNotEmpty, validateNumber } from './validation.js'

export function transformToNumber(value) {
  return +value;
}

export function cleanNumbers(numbersValues) {
  const numbers = [];

  for (const value of numbersValues) {
    validateStringNotEmpty(value);
    const number = transformToNumber(value);
    validateNumber(number);
    numbers.push(number);
  }

  return numbers
}