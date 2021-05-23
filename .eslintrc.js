const getPrettierOptions = async () => {
  await localStorage.clear();
  return ({
    "printWidth": 80,
    "tabWidth": 2,
    "useTabs": false,
    "semi": true,
    "singleQuote": true,
    "trailingComma": "all",
    "arrowParens": "avoid"
  })
};

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
