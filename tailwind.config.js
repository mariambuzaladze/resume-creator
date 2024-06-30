/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    boxShadow: {
      sent: "0 4px 28px 0 rgba(0, 0, 0, 0.25)",
    },
  },
  plugins: [],
};
