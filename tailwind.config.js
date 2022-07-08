/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./layouts/**/*.{js,ts,jsx,tsx}',
		'./stories/**/*.{js,ts,jsx,tsx}',
		'./tests/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'primary': '#F24B4A',
				'grey': '#838383',
				'lightGrey': '#ECEDF0',
				'veryLightGrey': '#F9F9F9',
				'lightRed': '#FFF4F5',
			},
			spacing: {
				'30': '120px',
			},
			boxShadow: {
				'classic': '5px 5px 25px rgba(159, 159, 159, 0.15)',
			},
		},
	},
	plugins: [],
};
