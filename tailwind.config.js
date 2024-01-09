import { nextui } from "@nextui-org/react";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //* customize tailwind css container class
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2rem",
      },
    },

    //* customize tailwind css breakpoints
    screens: {
      xxs: "320px",
      xs: "375px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1600px",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "primary-dark": {
          extend: "dark",
          colors: {
            background: "#161616",
            foreground: "#ffffff",
            primary: {
              50: "#E8FFE8",
              100: "#D1FED1",
              200: "#A1FCA1",
              300: "#6EF96C",
              400: "#46F842",
              500: "#30F729",
              600: "#24F71C",
              700: "#17DC11",
              800: "#06C306",
              900: "#00A900",
              DEFAULT: "#06B906",
              foreground: "#ffffff",
            },
          },
        },
      },
    }),
  ],
};
export default config;
