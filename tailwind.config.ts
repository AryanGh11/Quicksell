import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        peanut_butter_crust: "#C9A489",
        based_color_peanut_butter_crust: "#C9A489",
      },
      borderWidth: {
        onepx: "1px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        black: {
          primary: "#F36090",
          secondary: "#202020",
          accent: "#343232",
          neutral: "#272626",
          "base-100": "#000000",
          info: "#0000ff",
          success: "#008000",
          warning: "#ffff00",
          error: "#ff0000",
        },
        light: {
          primary: "#DFC8B8",
          secondary: "#0C0D12",
          accent: "#E97171",
          neutral: "#ffffff",
          "base-100": "#F9F5EA",
        },
      },
    ],
  },
};
export default config;
