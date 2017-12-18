<template lang="html">
  <div class="header">

    <div class="col-lg-3">
      <!-- <router-link to="/"><a><img src="../assets/logo.png"></a></router-link> -->
    </div>

    <div class="col-lg-6">
      <h1>Header goes here</h1>
    </div>

    <div class="col-lg-3">
      <!-- <ul class="nav nav-pills">
        <li role="presentation"><router-link to="/SignIn">SIGN IN</router-link></li>
        <li role="presentation"><router-link to="/SignUp">SIGN UP</router-link></li>
      </ul> -->
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped="">
img{
  width: 60px;
  height: auto;
}
  .header{
    border-bottom: 1px solid lightgrey;
    box-shadow: 3px 3px 3px lightgrey;
    background-color: rgb(249,248,246);
    color: white;
    height: 10vh;
  }
  h1{
    margin: 0;
  }
</style>
