import { describe, it, expect } from 'vitest'
import { cleanNumbers, transformToNumber } from './numbers'

describe('transformToNumber()', () => {
  it('Número inválido', () => {
    const number = 'invalid'
    const result = transformToNumber(number)
    expect(result).toBeNaN()
  })

  it('Conversão de um número string em número', () => {
    const number = '2'
    const result = transformToNumber(number)
    expect(result).toBeTypeOf('number')
  })

  it('Conversão de um número já numérico', () => {
    const number = 2
    const result = transformToNumber(number)
    expect(result).toBeTypeOf('number')
  })
})

describe('cleanNumbers()', () => {
  it('É retornado um array de números quando informo um array de números no formato string', () => {
    const numberValues = ['1', '2'];
    const result = cleanNumbers(numberValues);
    expect(result[0]).toBeTypeOf('number');
  });

  it('Erro ao informar um valor invalido', () => {
    const numberValues = ['', 2];
    const resultFunction = () => cleanNumbers(numberValues);
    expect(resultFunction).toThrow();
  })
})