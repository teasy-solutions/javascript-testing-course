import { it, expect } from 'vitest'
import { add } from './math'

it('test soma numeros do metodo add', () => {
  // Triple AAA
  // Arrange
  const numbers = [10 ,2, 2, 8]

  // Act
  const result = add(numbers)

  // Assert
  const expectedResult = numbers.reduce((prev, curr) => prev + curr, 0)
  expect(result).toBe(expectedResult)
})

it('Retornar NaN quando um número for inválido', () => {
  const numbers = [2, 'invalid']
  const result = add(numbers)
  expect(result).toBeNaN()
})

it('Somar corretamente, quando o número for string', () => {
  const numbers = [2, '2', '4', '20']
  const result = add(numbers)
  const expectedResult = numbers.reduce((prev, curr) => +prev + +curr, 0)
  expect(result).toBe(expectedResult)
})

it('Se eu não passar nada precisa dar uma exceção', () => {
  const resultFunction = () => add()
  expect(resultFunction).toThrow(/is not iterable/)
})

it('Múltiplos parâmetros', () => {
  const number1 = 2
  const number2 = 3

  const resultFunction = () => add(number1, number2)
  expect(resultFunction).toThrow(/is not iterable/)
})
