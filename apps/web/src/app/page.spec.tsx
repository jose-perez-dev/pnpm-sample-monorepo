import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from './page';

describe('Home Page', () => {
  it('renders the Next.js logo', () => {
    render(<Home />);
    const logo = screen.getByAltText('Next.js logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the \'Deploy now\' button', () => {
    render(<Home />);
    const button = screen.getByRole('link', { name: /deploy now/i });
    expect(button).toBeInTheDocument();
  });

  it('renders the footer links', () => {
    render(<Home />);
    expect(screen.getByText(/Learn/i)).toBeInTheDocument();
    expect(screen.getByText(/Examples/i)).toBeInTheDocument();
    expect(screen.getByText(/Go to nextjs.org/i)).toBeInTheDocument();
  });
});
