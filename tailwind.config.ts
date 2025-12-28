import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          50: "#f3f7ff",
          100: "#e4edff",
          500: "#1f57ff",
          600: "#1844cc",
          800: "#0f2b80"
        }
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};

export default config;
