/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlueOne: "var(--blue-1)",
        customBlueTwo: "var(--blue-2)",
        customLavenderOne: "var(--lavender-1)",
        customLavenderTwo: "var(--lavender-2)",
        customLavenderThree: "var(--lavender-3)",
        customPurple: "var(--purple)",
      },
    },
  },
  plugins: [],
};
