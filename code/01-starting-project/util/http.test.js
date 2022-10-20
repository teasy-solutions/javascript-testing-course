import { it, expect, vi } from 'vitest';
import { HttpError } from './errors';
import { sendDataRequest } from './http';

const testDataResponse = { testKey: "testValue" };

const fetchMocked = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== 'string') {
      return reject('Not is a string.')
    }
    const response = {
      json: () => {
        return new Promise((resolve, reject) => {
          resolve(testDataResponse);
        })
      },
      ok: true
    }
    resolve(response);
  })
});

vi.stubGlobal('fetch', fetchMocked);

it('Verificar se estamos recebendo uma response', () => {
  const data = { key: "test" }
  return expect(sendDataRequest(data)).resolves.toEqual(testDataResponse);
});


it('Verificar se o data foi convertido para JSON stringify', async () => {
  const data = { key: "test" }
  let errorMessage;
  try {
    await sendDataRequest(data);
  } catch (error) {
    errorMessage = error;
  }

  expect(errorMessage).not.toBe('Not is a String.');
});

it('Verificar a instancia HttpError em casos de falha', async () => {
  fetchMocked.mockImplementationOnce((url, options) => {
    return new Promise((resolve, reject) => {
      const response = {
        json: () => {
          return new Promise((resolve, reject) => {
            resolve(testDataResponse);
          })
        },
        ok: false
      }
      resolve(response);
    })
  });
  const data = { key: "test" }
  return expect(sendDataRequest(data)).rejects.toBeInstanceOf(HttpError);
});