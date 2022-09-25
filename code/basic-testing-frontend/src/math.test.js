import { it, expect } from 'vitest'
import { add } from './math'

it('teste de soma usando apenas números ex 1', () => {
  expect(4).toBe(add([2,2]))
})

it('teste de soma usando apenas números ex 2', () => {
  // Arrange
  const numbers = [2,2]

  // Act
  const result = add(numbers)

  // Assert
  expect(result).toBe(4)
})

it('teste de soma usando apenas números ex 3', () => {
  // Arrange
  const numbers = [2,2]

  // Act
  const result = add(numbers)

  // Assert
  const expectedResult = numbers.reduce((prev, curr) => prev + curr , 0)
  expect(result).toBe(expectedResult)
})

it('Retornar NaN caso tenha algum número inválido', () => {
  const numbers = ['invalid', 1]
  const result = add(numbers)
  expect(result).toBeNaN()
})

it('Somar corretamente caso tenha String com número', () => {
  const numbers = ['1', '2']
  const result = add(numbers)
  const expectedResult = numbers.reduce((prev, curr) => +prev + +curr , 0)
  expect(result).toBe(expectedResult) 
})
