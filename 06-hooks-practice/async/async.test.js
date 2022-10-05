import { it, expect } from 'vitest'
import { generateToken, generateTokenPromise } from './async';

it('Gerar token', () => new Promise((resolve, reject) => {
  const userEmail = 'teste@test.com';

  generateToken(userEmail, (err, token) => {
    try {
      expect(token).toBeDefined();

      // expect(token).toEqual(32)
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}));

it('Gerar token promise (Resolves/Reject)', () => {
  const userEmail = 'teste@test.com';
  return expect(generateTokenPromise(userEmail)).resolves.toBeDefined();
})

it('Gerar token promise (Async/Await)', async () => {
  const userEmail = 'teste@test.com';
  const token = await generateTokenPromise(userEmail)
  expect(token).toBeDefined();
})
