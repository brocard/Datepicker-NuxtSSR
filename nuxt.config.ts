// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/scss/app.scss'],
  modules: ['@nuxtjs/tailwindcss'],
  plugins: [{
    src: '~/plugins/vCalendar.client', mode: 'client'
  }],
})
