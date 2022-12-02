import Icons from "unplugin-icons/vite";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  vite: {
    plugins: [
      Icons({
        autoInstall: true,
      }),
    ],
  },
});
