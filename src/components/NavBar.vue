<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand"  to="/">OffBook</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <router-link class="nav-item nav-link" to="/listofbooks">List of Books</router-link>
      <a class="nav-item nav-link" href="#">About Us</a>
      <a class="nav-item nav-link" href="#">Contact Us</a>
    </div>
  </div>
  <ul class="nav nav-pills">
    <li role="presentation"><router-link to="/login"><button type="button" class="btn btn-outline-success btn-sm">LOG IN</button></router-link></li>
    <li role="presentation"><router-link to="/register"><button type="button" class="btn btn-outline-success btn-sm">REGISTER</button></router-link></li>
  </ul>
</nav>
</template>

<script>
export default {
};
</script>

<style lang="css" scoped="">
  nav {
    height: 7vh;
    box-shadow: 0 5px 7px lightgrey;
  }
  li {
    margin-right: 6px;
  }
</style>
