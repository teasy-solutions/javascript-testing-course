import { it, expect } from 'vitest'
import { generateToken } from './async'

it('Gerar Token', () => {
  const userEmail = 'test@test.com'
  generateToken(userEmail, (error, token) => {
    expect(token).toBe(2)
  })
})