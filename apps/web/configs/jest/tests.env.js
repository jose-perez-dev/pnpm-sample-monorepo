require('../../../../configs/jest/jest.env');

const path = require('path');
const dotenv = require('dotenv');

const env = dotenv.config({ path: path.resolve(__dirname, '../../.env.example') });

if (env.error) {
  throw env.error;
}

process.env = {
  ...process.env,
  ...env.parsed,
};
