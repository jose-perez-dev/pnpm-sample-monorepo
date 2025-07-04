import React from 'react';

import RootLayout from './layout';

jest.mock('next/font/google', () => ({
  Geist: jest.fn().mockReturnValue({
    weight: jest.fn(),
    style: jest.fn(),
    subsets: jest.fn(),
    display: jest.fn(),
  }),
  Geist_Mono: jest.fn().mockReturnValue({
    weight: jest.fn(),
    style: jest.fn(),
    subsets: jest.fn(),
    display: jest.fn(),
  }),
}));

describe('RootLayout', () => {
  it('should layout be defined', () => expect(
    RootLayout({
      children: <div>test</div>,
      params: Promise.resolve({ lang: 'en' }),
    }),
  ).toBeDefined());
});
