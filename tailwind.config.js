
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#0682b4",
        branddark: "#3f6b96",
        accent: "#d7be69"
      },
      boxShadow: {
        card: "0 8px 20px rgba(0,0,0,.08)"
      }
    },
  },
  plugins: [],
}
