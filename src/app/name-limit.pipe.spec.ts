import { NameLimitPipe } from './name-limit.pipe';

describe('NameLimitPipe', () => {
  it('create an instance', () => {
    const pipe = new NameLimitPipe();
    expect(pipe).toBeTruthy();
  });
});
