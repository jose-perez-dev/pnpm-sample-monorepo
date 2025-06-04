Object.defineProperty(Intl, 'DateTimeFormat', {
  writable: true,
  value: () => ({
    resolveOptions: jest.fn(() => ({
      timeZone: 'America/New_York',
    })),
  }),
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: () =>
    jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
    })),
});
