import { dirname, join } from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
	framework: {
		name: getAbsolutePath("@storybook/react-vite"),
		options: {
			builder: {
				viteConfigPath: 'vite.config.ts',
			},
		},
	},
	staticDirs: ['../public'],
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs

function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, "package.json")));
}
