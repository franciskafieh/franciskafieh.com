/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const themeSwapper = require("tailwindcss-theme-swapper");

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,mdx,ts,jsx,tsx,svelte}",
    "astro.config.mjs",
  ],
  // safelist: [
  //   // generate pl classes for Overview component since it is not detected by tailwindcss
  //   "pl-5",
  //   "pl-10",
  // ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      typography: ({ theme }) => {
        return {
          DEFAULT: {
            css: {
              "--tw-prose-headings": theme("colors.accent"),
              "--tw-prose-body": theme("colors.primary"),
              // heading links
              "h1, h2, h3, h4": {
                position: "relative",
                "&:hover > a > span": {
                  visibility: "visible",
                },
              },
              "h3, h4": {
                color: "var(--tw-prose-body)",
              },
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
          name: "base",
          selectors: [":root"],
          theme: {
            colors: {
              primary: "#0C101E",
              secondary: "#F8FAFC",
              accent: "#704BE0",
              background: "#FCF5FF",
            },
          },
        },
        {
          name: "dark",
          selectors: [".dark"],
          theme: {
            colors: {
              primary: "#FCF5FF",
              secondary: "#0F172A",
              accent: "#FFD500",
              background: "#0C101E",
            },
          },
        },
      ],
    }),
  ],
};
