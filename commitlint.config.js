module.exports = {
  extends: ['@commitlint/config-conventional'],
  helpUrl:
    'https://www.conventionalcommits.org/en/v1.0.0/#summary — see scripts/print-commit-help.sh for repo examples',
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100],
  },
};
