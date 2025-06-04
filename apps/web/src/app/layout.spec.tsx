import React from 'react';
import { render, screen } from '@testing-library/react';

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
  it('should layout be defined', () => {
    expect(
      RootLayout({
        children: <div>test</div>,
        params: { lang: 'en' },
      })
    ).toBeDefined();
  });
});
