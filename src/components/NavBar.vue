<template lang="html">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <router-link class="navbar-brand padNavLeft"  to="/">OffBook</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse navClass" id="navbarNavAltMarkup">

      <div class="navbar-nav">
        <router-link class="nav-item nav-link" active-class="active" exact to="/">Home</router-link>
        <router-link class="nav-item nav-link" active-class="active" exact to="/listofbooks">List of Books</router-link>
        <router-link class="nav-item nav-link" active-class="active" exact to="/aboutus">About Us</router-link>
      </div>

      <ul class="nav nav-pills">
        <div class="hamToLog">
          <li v-if="!auth" role="presentation">
            <router-link :to="{ name: 'LogIn'}">
              <button type="button" class="btn btn-outline-success btn-sm">LOG IN</button>
            </router-link>
          </li>
          <li v-if="!auth" role="presentation">
            <router-link :to="{ name: 'Register'}">
              <button type="button" class="btn btn-outline-success btn-sm">REGISTER</button>
            </router-link>
          </li>
        </div>


          <ul class="nav nav-pills hamLog col-12" v-if="auth" >
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" exact :to="{ name: 'Account', params: getUserId }">Account</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" :to="{ name: 'YourLibrary', params: getUserId }">Library</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" :to="{ name: 'YourLists', params: getUserId }">Lists</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" :to="{ name: 'YourWishList', params: getUserId }">Wish List</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" :to="{ name: 'YourPersonalInformations', params: getUserId }">Personal Infos</router-link>
            </li>
            <button @click="onLogout" v-if="auth" type="button" class="btn btn-outline-success btn-sm btn-logout" >LOG OUT</button>
        </ul>



      </ul>

    </div>

  </nav>


</template>

<script>
/* eslint-disable */
export default {
  // props: ['id_user'],
  data() {
    return {
      id_user: '',
    };
  },
  computed: {
    auth () {
      console.log('this.$store.getters.isAuthenticated',this.$store.getters.isAuthenticated);
      return this.$store.getters.isAuthenticated
    },
    getUserId () {
      console.log('this.auth', this.auth);
      if (this.auth && this.id_user === '') {
        console.log('this.id_user',this.id_user);
        // return this.id_user = this.$route.params.id_user
        return this.id_user = localStorage.getItem('id_user')
      } else {
        return this.id_user = ''
      }
    },
    // username () {
    //   if (localStorage.getItem('username') !== null || undefined) {
    //     return localStorage.getItem('username')
    //   }
    // },
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout');
      this.id_user = '';
      // this.username = '';
    }
  },
  beforeMount() {
    console.log('[NAVBAR]', this.id_user);
  }
};
</script>

<style lang="css" scoped="">

  nav {
    height: 11vh;
    box-shadow: 0 5px 7px lightgrey;
    z-index: 600;
    padding: inherit !important;
  }
  li {
    margin-right: 6px;
  }
  .padNavLeft {
    padding-left: 10px;
  }
  button {
    margin-right: 5px;
    height: 30px;
  }
  .navbar-toggler {
    height: auto;
  }
  .hamLog {
    display: flex;
    flex-direction: column !important;
  }
  .navClass{
    background-color:  #f8f9fa !important;
    /*padding: inherit !important;*/
  }
  .navbar-nav {
    padding-left: 15px !important;
  }
  .btn-logout {
    margin-bottom: 5px;
    margin-left: 15px !important;
  }
  .nav-pills > li > a.active {
    background-color: inherit !important;
    color: lightgreen !important;
  }
  .nav-pills li a {
    color: black !important;
  }
  .hamToLog {
    display: flex;
    flex-direction: column;
    margin-left: 15px !important;
  }
  .hamToLog li {
    margin-bottom: 5px;
  }

  /******DESKTOP******/
  @media (min-width: 640px) {
    nav {
      height: 10vh;
      background-color: inherit !important;
    }
    .navClass {
      justify-content: space-between;
      background-color: inherit !important;
    }

    .hamLog {
      flex-direction: row !important;
    }
    .btn-logout {
      margin: inherit;
      margin-top: 5px;
    }
    .hamToLog {
      display: flex;
      flex-direction: row;
    }
    .hamToLog li {
      margin-bottom: inherit;
    }
  }

</style>
