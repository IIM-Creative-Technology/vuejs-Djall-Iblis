<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <header_component></header_component>
  <manage-page></manage-page>

  <br>

  <create-page></create-page>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import managePage from './components/managePage.vue'
import header_component from './components/header_component.vue'
import CreationPage from "./components/CreationPage"

export default {
  name: 'App',
  components: {
    // HelloWorld,
    "manage-page": managePage,
    header_component,
    "create-page": CreationPage,
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
