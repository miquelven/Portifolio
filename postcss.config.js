import purgecss from "@fullhuman/postcss-purgecss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const purgecssPlugin = purgecss({
  content: ["./public/**/*.html", "./src/**/*.vue"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [purgecssPlugin] : []),
  ],
};
