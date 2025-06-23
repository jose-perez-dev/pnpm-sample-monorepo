import { geistSans, geistMono } from './fontLoader';

jest.mock('next/font/google');

describe('fontLoader', () => {
  it('should export mocked fonts', () => {
    expect(geistSans).toEqual({ variable: '--mocked-geist-sans' });
    expect(geistMono).toEqual({ variable: '--mocked-geist-mono' });
  });
});