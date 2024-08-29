import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#624DE3',
        'gray': '#E0E0E0',
        'gray-input': '#9E9E9E',
        'purple-edit': '#624DE3',
        'red-delete': '#A30D11',
        'dark-blue': '#1D1E42',
        'selector-dark-blue': '#141432',
        'odd-product-dark-blue': '#26264F',
        'odd-product-light-purple': '#F7F6FE'
      },
    },
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
