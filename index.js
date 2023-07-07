module.exports = {
	arrowParens: "always",
	bracketSameLine: false,
	bracketSpacing: true,
	endOfLine: "lf",
	htmlWhitespaceSensitivity: "css",
	insertPragma: false,
	jsxSingleQuote: false,
	printWidth: 100,
	proseWrap: "always",
	semi: true,
	singleQuote: false,
	useTabs: true,
	trailingComma: "es5",
	overrides: [
		{
			files: "*.{yml,yaml}",
			options: {
				useTabs: false,
				tabWidth: 4,
			},
		},
	],
};
