<template>
  <div class="home">
    <img alt="Vue logo" :src="lgogImg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    lgogImg() {
      return require('@/assets/logo.png');
    }
  }
}
</script>

<style src="./Home.scss" lang="scss" />
