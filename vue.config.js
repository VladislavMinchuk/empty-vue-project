module.exports = {
  publicPath: '/empty-vue-project/dist',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/base/_variables.scss";`
      }
    }
  }
};