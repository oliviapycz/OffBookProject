<template>
  <div id="app" class="container-fluid">
    <app-navbar></app-navbar>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from './components/Footer';
import NavBar from './components/NavBar';

export default {
  name: 'app',
  components: {
    appFooter: Footer,
    appNavbar: NavBar,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container-fluid, .row {
  padding: inherit !important;
  margin: inherit !important;
}
</style>
