// nuxt.config.js

export default {
  // Global page headers
  server: {
    port: 3000,
  },
  head: {
    title: "form-practice",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global CSS
  css: [
    '@quasar/extras/material-icons/material-icons.css', /// material icons from quasar
    "quasar/dist/quasar.css", // Import Quasar CSS
  ],

  // Plugins to run before rendering page
  plugins: [
    "@/plugins/quasar", // Add Quasar plugin
    "@/plugins/vee-validate.js"  // Add VeeValidate plugin
  ], 
  // Auto import components
  components: true,

  // Modules for dev and build (recommended)
  buildModules: [],

  // Modules
  modules: [],

  // Build Configuration
  build: {
    transpile: ["quasar"], // Ensure Quasar is transpiled
  },
};
