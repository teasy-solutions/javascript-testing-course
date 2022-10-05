import { describe, it, expect } from "vitest";
import { generateResultText } from "./output";

describe('generateResultText()', () => {
    it('Deve retornar string independente do que eu passar', () => {
        const value1 = 'invalid'
        const value2 = 3
        const value3 = false

        const result1 = generateResultText(value1)
        const result2 = generateResultText(value2)
        const result3 = generateResultText(value3)

        expect(result1).toBeTypeOf('string')
        expect(result2).toBeTypeOf('string')
        expect(result3).toBeTypeOf('string')
    });

    it('O número deve conter na resposta', () => {
        const value = 5
        const result = generateResultText(value)
        expect(result).toContain(value.toString())
    });

    it('Em caso de no-calc deve retornar uma string vazia', () => {
        const value = 'no-calc'
        const result = generateResultText(value)
        expect(result).toBe('')
    });

    it('Em caso de invalid deve retornar uma string com Invalid junto', () => {
        const value = 'invalid'
        const result = generateResultText(value)
        expect(result).toContain('Invalid')
    });
})