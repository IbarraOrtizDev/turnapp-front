// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-quasar-ui"],
  quasar: {
    config: {
      brand: {
        // primary: "#f44336",
        // secondary: "#9c27b0",
        // accent: "#2196f3",
        // dark: "#1d1d1d",
        // positive: "#21ba45",
        // negative: "#ff4d4d",
        // info: "#31ccec",
        // warning: "#f2c037",
      },
    },
    plugins: [
      'Notify', 'Screen', 'Dialog', 'Loading'
    ],
  },
  runtimeConfig: {
    baseUrl: 'http://64.23.245.70:8080'
  },
  css: [
    '~/assets/index.css'
  ],
})