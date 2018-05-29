<template>
  <div id="app" class="container-fluid">
    <app-navbar :id_user="id_user" @setIdUser="id_user = $event"></app-navbar>
    <router-view :id_user="id_user"  @setIdUser="id_user = $event"></router-view>
    <app-footer id="footer"></app-footer>
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
      id_user: ''
    };
  },
  created() {
    this.$store.dispatch('tryAutoLogin');
    console.log('[APP]', this.id_user);
  },
};
</script>

<style>
/******MOBILE FIRST******/
#app {
  font-family: 'Titilium Web', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}

.container-fluid, .row {
  padding: inherit !important;
  margin: inherit !important;
}
h1 {
  font-size: 2rem;
  font-family: 'Titillium Web', sans-serif;
}
h2 {
  font-size: 1.6rem;
  font-family: 'Titillium Web', sans-serif;
}
h3 {
  font-size: 1.4rem;
  font-family: 'Titillium Web', sans-serif;
}
h4 {
  font-size: 1.2rem;
  font-family: 'Titillium Web', sans-serif;
}
h5 {
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
}
h6 {
  font-size: 0.8rem;
  font-family: 'Raleway', sans-serif;
}
p {
  font-size: 0.7rem;
  font-family: 'Raleway', sans-serif;
}
button {
  font-family: 'Raleway', sans-serif;
}
  /******DESKTOP******/
  @media (min-width: 640px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2.4rem;
    }
    h3 {
      font-size: 2.1rem;
    }
    h4 {
      font-size: 1.8rem;

    }
    h5 {
      font-size: 1.5rem;
    }
    h6 {
      font-size: 1.2rem;
    }
    p {
      font-size: 1rem;
    }
  }
#footer {
  /*position: fixed;
  margin-bottom: 0 !important;*/
}
</style>
