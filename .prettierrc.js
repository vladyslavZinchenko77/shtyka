module.exports = {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  plugins: ['@shopify/prettier-plugin-liquid'],
  overrides: [
    {
      files: '*.liquid',
      options: {
        parser: 'liquid-html',
      },
    },
  ],
};
