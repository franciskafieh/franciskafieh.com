/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const themeSwapper = require('tailwindcss-theme-swapper');

module.exports = {
  content: ["./src/**/*.{astro,html,js,mdx,ts}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      typography: ({ theme }) => {
        return {
          DEFAULT: {
            css: {
              "h1, h2, h3, h4, h5, h6": {},
            },
          },
        };
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    themeSwapper({
			themes: [
			  {
				name: 'base',
				selectors: [':root'],
				theme: {
				  colors: {
					primary: '#0C101E',
					accent: '#704BE0',
					background: '#FCF5FF'
				  },
				},
			  },
			  {
				name: 'dark',
				selectors: ['.dark'],
				theme: {
				  colors: {
					primary: '#FCF5FF',
					accent: '#FFD500',
					background: '#0C101E'
				  },
				},
			  },
			],
		}),
  ],
};
