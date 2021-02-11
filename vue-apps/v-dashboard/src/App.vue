<template>
  <div id="app">
    <Header site_title="Viz dashboard"/>
    <MainDashboard/>
  </div>
</template>

<script>
import MainDashboard from './components/MainDashboard.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    MainDashboard,
    Header,
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: absolute;
  top: 0;
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
