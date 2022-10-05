import { it, expect } from 'vitest'
import { generateToken, generateTokenPromise } from './async'

it('Gerar Token (Callback)', () => new Promise((resolve, reject) => {
  const userEmail = 'test@test.com'
  generateToken(userEmail, (error, token) => {
    try {
      expect(token).toBeDefined()
      resolve()
    } catch (err) {
      reject(err)
    }
  })
}))

it('Gerar token (Resolves/Reject)', () => {
  const userEmail = 'test@test.com'
  return expect(generateTokenPromise(userEmail)).resolves.toBeDefined()
})


it('Gerar token (Async/Await)', async () => {
  const userEmail = 'test@test.com'
  const result = await generateTokenPromise(userEmail)
  expect(result).toBeDefined()
})