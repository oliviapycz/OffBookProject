<template>
  <div id="app" class="container-fluid">
    <app-navbar :id_user="id_user" @setIdUser="id_user = $event"></app-navbar>
    <router-view :id_user="id_user"></router-view>
    <!-- <app-footer id="footer"></app-footer> -->
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
  data() {
    return {
      id_user: this.$store.state.id_user,
    };
  },
  created() {
    this.$store.dispatch('tryAutoLogin');
    console.log('[app]', this.id_user);
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}
.container-fluid, .row {
  padding: inherit !important;
  margin: inherit !important;
}
/*#navbar {
  margin-bottom: 30px;
}
#footer {
  margin-top: 30px;
}*/
</style>
