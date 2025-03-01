// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/style/style.css"],
  modules: ["@nuxtjs/color-mode", "@nuxt/fonts", "@nuxtjs/mdc"],
  colorMode: {
    preference: "system",
    fallback: "latte",
    classSuffix: "-theme",
  },
  fonts: {
    experimental: {
      processCSSVariables: true,
    },
    priority: ["fontshare", "bunny"],
    providers: {
      google: false,
      googleicons: false,
    },
  },
  vite: {
    server: {
      allowedHosts: [".local"],
    },
  },
  nitro: {
    static: true,
  },
})
