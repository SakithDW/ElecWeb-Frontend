/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "palette-1": {
          1: "#680241",
          2: "#8e0258",
          3: "#650037",
          4: "#31001b",
        },
      },
    },
  },
  plugins: [],
};
