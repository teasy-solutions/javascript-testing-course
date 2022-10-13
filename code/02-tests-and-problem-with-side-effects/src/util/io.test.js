import { it, expect } from 'vitest';
import writeData from './io';

it('Deve ser executado o writeFile', () => {
  const data = "Test";
  const filename = "test.txt";
  return expect(writeData(data, filename)).resolves.toBeUndefined();
});