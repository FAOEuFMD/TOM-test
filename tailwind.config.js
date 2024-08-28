const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f2f7f5",
          100: "#e6efeb",
          200: "#c0d7cd",
          300: "#9abfaf",
          400: "#74a791",
          500: "#69927f", // base color
          600: "#5e8372",
          700: "#4e6d5f",
          800: "#3e574c",
          900: "#2e413a",
        },
        secondary: {
          50: "#f2f7f5",
          100: "#e6efeb",
          200: "#cddfd7",
          300: "#b4cfc3",
          400: "#9bbfaf",
          500: "#69927f", // base color
          600: "#5e8372",
          700: "#4e6d5f",
          800: "#3e574c",
          900: "#2e413a",
          950: "#1f2d28",
        },
        accent: {
          50: "#E6F7F2",
          100: "#CCEFE5",
          200: "#99DFC9",
          300: "#66CFAE",
          400: "#33BF93",
          500: "#065F46", // base color
          600: "#054E3A",
          700: "#043C2D",
          800: "#032B21",
          900: "#021A14",
          950: "#010D0A",
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
          color: theme("colors.secondary.900"),
          "&::selection": {
            backgroundColor: "#ADD8E6", // Light blue background color
            color: "#333333", // Dark grey text color
          },
        },
        ".h2": {
          fontSize: theme("fontSize.3xl"),
          fontWeight: theme("fontWeight.semibold"),
          lineHeight: theme("lineHeight.snug"),
          marginBottom: theme("spacing.3"),
          color: theme("colors.secondary.800"),
          "&::selection": {
            backgroundColor: "#FFB7B7",
            color: "#333333",
          },
        },
        ".h3": {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.medium"),
          lineHeight: theme("lineHeight.snug"),
          marginBottom: theme("spacing.2"),
          color: theme("colors.secondary.800"),
          "&::selection": {
            backgroundColor: "#ADD8E6",
            color: "#333333",
          },
        },
        ".h4": {
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.medium"),
          lineHeight: theme("lineHeight.snug"),
          marginBottom: theme("spacing.2"),
          color: theme("colors.secondary.700"),
          "&::selection": {
            backgroundColor: "#ADD8E6",
            color: "#333333",
          },
        },
        ".subheader": {
          fontSize: theme("fontSize.lg"),
          fontWeight: theme("fontWeight.normal"),
          lineHeight: theme("lineHeight.relaxed"),
          marginBottom: theme("spacing.4"),
          color: theme("colors.secondary.600"),
          "&::selection": {
            backgroundColor: "#ADD8E6",
            color: "#333333",
          },
        },
      };

      addComponents(headers);
    }),
  ],
};
