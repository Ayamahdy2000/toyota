// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles/main.scss", "~/assets/styles/main.css"],
  runtimeConfig: {
    public: {
      VUE_APP_BASE_URL: process.env.VUE_APP_BASE_URL,
    },
  },

  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "toyota",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
