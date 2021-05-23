const fs = require('fs');
const path = require('path');

const getPrettierOptions = () => JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  extends: [
    'react-app',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', getPrettierOptions()],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: { 'prettier/prettier': ['warn', getPrettierOptions()] },
    },
  ],
};
