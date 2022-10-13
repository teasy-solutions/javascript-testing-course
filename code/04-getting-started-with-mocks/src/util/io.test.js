import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';
import writeData from './io';

vi.mock('fs');

it('Deve ser executado o writeFile', () => {
  const data = "Test";
  const filename = "test.txt";
  writeData(data, filename);
  // return expect(writeData(data, filename)).resolves.toBeUndefined(); // v1
  expect(fs.writeFile).toBeCalled();
});