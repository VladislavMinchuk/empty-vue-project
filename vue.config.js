module.exports = {
  publicPath: '/empty-vue-project',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/base/_variables.scss";`
      }
    }
  }
};