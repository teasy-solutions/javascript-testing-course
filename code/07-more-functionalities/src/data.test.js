import { describe, it, expect, vi } from 'vitest';
import { generateReportData } from './data';

describe('generateReportData()', () => {
  it('Deve ser chamado o método', () => {
    const logger = vi.fn();

    // logger.mockImplementationOnce(() => {})

    generateReportData(logger);
    expect(logger).toBeCalled();
  });
})