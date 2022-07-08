module.exports = {
	stories: [
		'../stories/**/*.stories.mdx',
		'../stories/**/*.stories.@(js|jsx|ts|tsx)'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		{
			name: '@storybook/addon-postcss',
			options: {
			  postcssLoaderOptions: {
				implementation: require('postcss'),
			  },
			},
		},
	],
	core: {
		builder: 'webpack5'
	},
	webpackFinal: config => { 
		const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
		fileLoaderRule.exclude = /\.svg$/;  
		
		config.module.rules.push({
			test: /\.svg$/,
			enforce: 'pre',
			loader: require.resolve('@svgr/webpack'),
		});
		
		return config;
	} 
}