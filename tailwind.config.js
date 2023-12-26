/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Naskh Arabic", "serif"],
        katibeh: ["Katibeh", "serif"],
      },
    },
  },
  plugins: [],
};
