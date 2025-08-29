module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

	addons: [
		'@storybook/addon-docs',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},

	core: {
		disableTelemetry: true,
	},

	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: require.resolve('babel-loader'),
					options: {
						presets: [require.resolve('@babel/preset-typescript')],
					},
				},
			],
		});
		config.resolve.extensions.push('.ts', '.tsx');

		// Add fallbacks for Node.js core modules
		config.resolve = config.resolve || {};
		config.resolve.fallback = {
			...(config.resolve.fallback || {}),
			fs: false,
			path: require.resolve('path-browserify'),
		};
		return config;
	},

	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
		},
	},

	staticDirs: [
		'../public',
	],

	features: {
		buildStoriesJson: true,
	},
};
