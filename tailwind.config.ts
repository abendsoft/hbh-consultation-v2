import type { Config } from "tailwindcss";

export default {
  content: ["./extension-frontend/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary), <alpha-value>)",
        secondry: "hsl(var(--secondry), <alpha-value>)",

        background: {
          DEFAULT: "hsl(var(--background), <alpha-value>)",
        },

        foreground: {
          DEFAULT: "hsl(var(--foreground), <alpha-value>)",
          varient: "hsl(var(--foreground-varient), <alpha-value>)",
        },

        info: "hsl(var(--info), <alpha-value>)",
        success: "hsl(var(--success), <alpha-value>)",
        warning: "hsl(var(--warning), <alpha-value>)",
        danger: "hsl(var(--destructive), <alpha-value>)",
      },
    },
  },
  plugins: [],
} satisfies Config;
