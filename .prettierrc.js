module.exports = {
  ...require('gts/.prettierrc.json'),
  overrides: [
    {
      files: '**/*.{js,ts,tsx}',
      options: {
        bracketSpacing: true,
      },
    },
  ],
};
