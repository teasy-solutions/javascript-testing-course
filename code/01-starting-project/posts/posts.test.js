import { describe, expect, it, beforeEach } from "vitest";
import { extractPostData } from "./posts";

const testTitle = 'Test Title';
const testContent = 'Test Content';
let testForm;

describe('extractPostData()', () => {

  beforeEach(() => {
    testForm = {
      title: testTitle,
      content: testContent,
      get(key) {
        return this[key];
      }
    };
  });

  it('Deve ser retornado o título e o conteúdo', () => {
    const data = extractPostData(testForm);
    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });
});
