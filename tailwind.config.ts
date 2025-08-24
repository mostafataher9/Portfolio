import type { Config } from 'tailwindcss'



// Tailwind CSS configuration file
// This file is used to configure Tailwind CSS for the project
// It specifies the content paths, theme extensions, and plugins
//here we need down the files that we want to use tailwind with them
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      //I download font, cover file and insert in proj burtons.ttf and I extend as a theme
      /*What theme.extend does

It merges your custom tokens into Tailwind’s default theme without overwriting defaults.
Use it to add colors, spacing, fonts, etc., while keeping all built-ins.
How font-burtons was defined

In tailwind.config.ts:
extend.fontFamily creates a new utility class named by the key (burtons → font-burtons).
*/
      fontFamily: {
        burtons: "burtons",
      },
    },
  },
  plugins: [],
}

export default config
