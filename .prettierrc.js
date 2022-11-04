module.exports = {
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	useTabs: true,
	overrides: [
		{
			files: "**/*astro",
			options: {
				parser: "astro",
			},
		},
	],
};