import { JwtVerifyMiddleware } from './jwt-verify.middleware';

describe('JwtVerifyMiddleware', () => {
  it('should be defined', () => {
    expect(new JwtVerifyMiddleware()).toBeDefined();
  });
});
