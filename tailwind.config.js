const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f2f7f5",
          100: "#e6efeb",
          200: "#c0d7cd",
          300: "#9abfaf",
          400: "#74a791",
          500: "#69927f", // Your base color
          600: "#5e8372",
          700: "#4e6d5f",
          800: "#3e574c",
          900: "#2e413a",
        },
        gray: {
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#434343",
          800: "#333333", // Your base color
          900: "#242424",
          950: "#1a1a1a",
        },
        // Complementary colors
        coral: {
          500: "#ff7f50",
        },
        sand: {
          500: "#f4a460",
        },
        sky: {
          500: "#87ceeb",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const headers = {
        ".h1": {
          fontSize: theme("fontSize.4xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
          marginBottom: theme("spacing.4"),
          color: theme("colors.gray.900"),
        },
        ".h2": {
          fontSize: theme("fontSize.3xl"),
          fontWeight: theme("fontWeight.semibold"),
          lineHeight: theme("lineHeight.snug"),
          marginBottom: theme("spacing.3"),
          color: theme("colors.gray.800"),
        },
        ".h3": {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.medium"),
          lineHeight: theme("lineHeight.snug"),
          marginBottom: theme("spacing.2"),
          color: theme("colors.gray.800"),
        },
        ".h4": {
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.medium"),
          lineHeight: theme("lineHeight.snug"),
          marginBottom: theme("spacing.2"),
          color: theme("colors.gray.700"),
        },
        ".subheader": {
          fontSize: theme("fontSize.lg"),
          fontWeight: theme("fontWeight.normal"),
          lineHeight: theme("lineHeight.relaxed"),
          marginBottom: theme("spacing.4"),
          color: theme("colors.gray.600"),
        },
      };

      addComponents(headers);
    }),
  ],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
};
