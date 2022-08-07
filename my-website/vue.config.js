const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "@/scss/base/variables.scss";
        `
      }
    }
  }
})
