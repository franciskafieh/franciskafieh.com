/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./astro.config.mjs'
	],
	theme: {
		fontFamily: {
			'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
			'mono': ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
		},
		extend: {
			typography: ({ theme }) => {
				return {
					DEFAULT: {
						css: {
							'h1, h2, h3, h4, h5, h6': {
							}
						}
					}	
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
