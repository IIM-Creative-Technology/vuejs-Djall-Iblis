<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <header_component></header_component>
  <manage-page></manage-page>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import managePage from './components/managePage.vue'
import header_component from './components/header_component.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    managePage,
    header_component,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
