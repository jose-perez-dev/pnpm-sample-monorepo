import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render button correctly', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument();
  });

  it('should render primary button', () => {
    render(<Button label="Primary Button" primary />);
    const button = screen.getByRole('button', { name: 'Primary Button' });
    expect(button).toHaveClass('storybook-button--primary');
  });
});
