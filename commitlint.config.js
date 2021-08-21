const types = [
    'build',
	'ci',
	'docs',
	'feat',
	'fix',
	'perf',
	'refactor',
	'revert',
	'style',
	'test',
    'ui',
    'deps',
    'docs'
];

module.exports = {
    extends: ['@commitlint/config-angular'],
    rules: {
        'type-enum': [2, 'always', types],
    }
};