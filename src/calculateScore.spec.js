const calculateScore = require('./calculateScore');

describe('calculateScore', () => {
  it('should calculate a score of all misses', () => {
    expect(calculateScore('-----------')).toBe(0);
  });
  it('should calculate a score of all strikes', () => {
    expect(calculateScore('XXXXXXXXXXXX')).toBe(300);
  });
  it('should calculate a score of all numbers', () => {
    expect(calculateScore('111111111111')).toBe(12);
  });
  it('should calculate a score with misses', () => {
    expect(calculateScore('9-9-9-9-9-9-9-9-9-9-')).toBe(90);
  });
  it('should calculate a score with spares', () => {
    expect(calculateScore('5/5/5/5/5/5/5/5/5/5/5')).toBe(150);
  });
  it('should calculate a score with spares & strikes', () => {
    expect(calculateScore('5/5/5/5/5/5/5/5/5/5/X')).toBe(155);
  });
  it('should calculate a score with spares and strikes', () => {
    expect(calculateScore('5/5/5/5/5/5/5/5/5/XXx')).toBe(170);
  });
});
