/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f59e0b",

          secondary: "#f87171",

          accent: "#69e0d0",

          neutral: "#282A3E",

          "base-100": "#ffff",

          info: "#90D1F4",

          success: "#1BB17D",

          warning: "#F4D46C",

          error: "#EF6189",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
