import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';
import writeData from './io';

vi.mock('fs');
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1]
      }
    }
  };
});

it('Deve ser executado o writeFile', () => {
  const data = "Test";
  const filename = "test.txt";
  writeData(data, filename);
  // return expect(writeData(data, filename)).resolves.toBeUndefined(); // v1
  // expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(filename, data);
});

it('Deve ser analisado o retorno da promise', () => {
  const data = "Test";
  const filename = "test.txt";
  writeData(data, filename);
  return expect(writeData(data, filename)).resolves.toBeUndefined();
});