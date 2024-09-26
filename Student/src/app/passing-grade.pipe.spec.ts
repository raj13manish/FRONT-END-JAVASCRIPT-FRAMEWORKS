import { PassingGradePipe } from './passing-grade.pipe';

describe('PassingGradePipe', () => {
  it('create an instance', () => {
    const pipe = new PassingGradePipe();
    expect(pipe).toBeTruthy();
  });
});
