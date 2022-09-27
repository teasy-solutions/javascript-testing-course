import { it, expect } from 'vitest'
import { transformToNumber } from './numbers'

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
