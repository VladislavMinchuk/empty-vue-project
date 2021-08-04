module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/base/_variables.scss";`
      }
    }
  }
};