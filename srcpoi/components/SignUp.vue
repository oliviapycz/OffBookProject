<template lang="html">
  <div class="">
    <form class="" action="index.html" method="post">
      <fieldset>
        <legend> Sign Up</legend>
        <div class="form-group">
          <label for="email"></label>
          <input type="email" name="email" value="" placeholder="email">
        </div>
        <div class="form-group">
          <label for="password"></label>
          <input type="password" name="password" value="" placeholder="password">
        </div>
        <div class="">
          <input type="submit" name="" value="send">
        </div>
      </fieldset>
    </form>
    <p>Not yet Register?<router-link to="/SignIn"><a>Create an account</a></router-link></p>

  </div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped="">
  form {
    height: 70vh;
  }
  input {
    width: 250px;
    height: 35px;
  }
</style>
