<template>
  <Dashboard header="Dashboard to be implemented"/>
</template>

<script>
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Dashboard
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: absolute;
  top: 50px; /*the navbar height*/
  bottom: 0;
  left: 0;
  right: 0;
  font-family: PoppinsRegular, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
