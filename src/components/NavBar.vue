<template lang="html">
  <!-- <nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <a class="navbar-brand" href="/">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
    </ul>
  </div>
  </nav> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand padNavLeft"  to="/">OffBook</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navClass" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
        <router-link class="nav-item nav-link" to="/listofbooks">List of Books</router-link>
        <a class="nav-item nav-link" href="#">About Us</a>
        <a class="nav-item nav-link" href="#">Contact Us</a>
      </div>
      <ul class="nav nav-pills">
        <li v-if="!auth" role="presentation"><router-link :to="{ name: 'LogIn'}"><button type="button" class="btn btn-outline-success btn-sm">LOG IN</button></router-link></li>
        <li v-if="!auth" role="presentation"><router-link :to="{ name: 'Register'}"><button type="button" class="btn btn-outline-success btn-sm">REGISTER</button></router-link></li>
        <!-- <p v-if="username">Welcome {{ username }} </p> -->

        <!-- <li v-if="auth" role="presentation"><button type="button" class="btn btn-outline-success btn-sm  dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ACCOUNT</button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">My Account</a>
            <router-link :to="{ path: 'yourlibrary'}" append class="dropdown-item">Library</router-link>
            <a class="dropdown-item" href="#">Lists</a>
            <a class="dropdown-item" href="#">Wish List</a>
            <a class="dropdown-item" href="#">Personal Informations</a>
          </div></li> -->
          <ul class="nav nav-pills" v-if="auth" >
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" exact :to="{ name: 'Account', params: {id_user} }">Account</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" :to="{ name: 'YourLibrary', params: {id_user} }">Library</router-link>
              <!-- <a class="nav-link" href="#">Library</a> -->
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" :to="{ name: 'YourLists', params: {id_user} }">Lists</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" :to="{ name: 'YourWishList', params: {id_user} }">Wish List</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Personal Informations</a>
            </li>
        </ul>
        <button @click="onLogout" v-if="auth" type="button" class="btn btn-outline-success btn-sm">LOG OUT</button>
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
      id_user: this.$store.state.id_user,
    };
  },
  computed: {
    auth () {
      return this.$store.getters.isAuthenticated
    },
    username () {
      if (localStorage.getItem('username') !== null || undefined) {
        return localStorage.getItem('username')
      }
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
    }
  },
};
</script>

<style lang="css" >

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
    margin-top: 10px;
  }
  ul {
    margin-bottom: 3px !important;
    margin-left: 3px !important;
    justify-content: center;
  }
  .navClass {
    background-color:  white !important;
    padding: inherit !important;
  }
  @media (min-width: 640px) {
    nav {
      height: 10vh;
      background-color: inherit !important;
    }
    .navClass {
      justify-content: space-between;
      background-color: inherit !important;
    }
  }
  .nav-pills > li > a.active {
    background-color: inherit !important;
    border-top: 2px solid green !important;
    border-bottom: 2px solid green !important;
    color: lightgreen !important;
  }
  .nav-pills li a {
    color: black !important;
  }
</style>
