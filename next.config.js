/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: { and: [/\.(js|ts|md)x?$/] },
			use: ['@svgr/webpack'],
		});
		
		return config;
	},
	images: {
		domains: [],
	},
};

module.exports = nextConfig;
