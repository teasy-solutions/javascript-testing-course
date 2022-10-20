import fs from 'fs'
import path from 'path'

import { expect, it, vi, beforeEach } from 'vitest'
import { showError } from './dom'

import { Window } from 'happy-dom'

const htmlPath = path.join(process.cwd(), 'index.html');
const htmlDocument = fs.readFileSync(htmlPath).toString();

const window = new Window();
const document = window.document;

vi.stubGlobal('document', document);

// it('first test', () => {
//   showError('test');
// })

beforeEach(() => {
  document.body.innerHTML = '';
  document.write(htmlDocument);
})

it('Adicionar um novo paragrafo com o id="errors" no elemento', () => {
  showError('Test');

  const errorElement = document.getElementById('errors');
  const errorParagraph = errorElement.firstElementChild;

  expect(errorParagraph).not.toBeNull();
});

it('Não devemos ter um paragráfo no início', () => {
  const errorElement = document.getElementById('errors');
  const errorParagraph = errorElement.firstElementChild;

  expect(errorParagraph).toBeNull();
})