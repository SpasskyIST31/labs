import { TransferStatusPipe } from './transfer-status.pipe';

describe('TransferStatusPipe', () => {
  const pipe = new TransferStatusPipe();

  it('should transform "Active" to "🟢 Активный трансфер"', () => {
    expect(pipe.transform('Active')).toBe('🟢 Активный трансфер');
  });

  it('should transform "Rumored" to "🟡 Слухи о трансфере"', () => {
    expect(pipe.transform('Rumored')).toBe('🟡 Слухи о трансфере');
  });

  it('should transform unknown status to original value', () => {
    expect(pipe.transform('Unknown')).toBe('Unknown');
  });
});