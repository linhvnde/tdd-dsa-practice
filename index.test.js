const solve = require('./index');

describe('movements after running solve one step  ', () => {
  it('moves up correctly', () => {
    expect(solve('U', 5, 5, 20, 20)).toEqual([5, 4]);
  });
  it('moves down correctly', () => {
    expect(solve('D', 5, 5, 20, 20)).toEqual([5, 6]);
  });
  it('moves left correctly', () => {
    expect(solve('L', 5, 5, 20, 20)).toEqual([4, 5]);
  });
  it('moves right correctly', () => {
    expect(solve('R', 5, 5, 20, 20)).toEqual([6, 5]);
  });
});

describe('movements within the boundaries  ', () => {
  it('moves up correctly within the boundaries', () => {
    expect(solve('U', 0, 0, 20, 20)).toEqual([0, 0]);
  });
  it('moves down correctly within the boundaries', () => {
    expect(solve('D', 0, 19, 20, 20)).toEqual([0, 19]);
  });
  it('moves left correctly within the boundaries', () => {
    expect(solve('L', 0, 0, 20, 20)).toEqual([0, 0]);
  });
  it('moves right correctly within the boundaries', () => {
    expect(solve('R', 19, 0, 20, 20)).toEqual([19, 0]);
  });
});
