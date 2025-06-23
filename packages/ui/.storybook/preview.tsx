import type { Preview } from '@storybook/react-webpack5';

import { geistSans, geistMono } from '../src/fonts/fontLoader';

import './tailwind.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
  (Story) => (
    <div className={`font-normal ${geistSans.variable} ${geistMono.variable}`}>
      <Story />
    </div>
  ),
]
};

export default preview;
