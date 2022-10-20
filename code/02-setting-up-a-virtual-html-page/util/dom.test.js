import fs from 'fs'
import path from 'path'

import { expect, it, vi } from 'vitest'
import { showError } from './dom'

import { Window } from 'happy-dom'

const htmlPath = path.join(process.cwd(), 'index.html');
const htmlDocument = fs.readFileSync(htmlPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocument);

vi.stubGlobal('document', document);

// it('first test', () => {
//   showError('test');
// })

it('Adicionar um novo paragrafo com o id="errors" no elemento', () => {
  showError('Test');

  const errorElement = document.getElementById('errors');
  const errorParagraph = errorElement.firstElementChild;

  expect(errorParagraph).not.toBeNull();
});