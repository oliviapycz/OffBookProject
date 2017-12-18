<template lang="html">
  <div class="">
    <form class="" action="index.html" method="post">
      <fieldset>
        <legend> Sign In</legend>
        <div class="form-group">
          <label for="lastname"></label>
          <input type="text" name="lastname" value="" placeholder="lastname">
        </div>
        <div class="form-group">
          <label for="firstname"></label>
          <input type="text" name="firstname" value="" placeholder="firstname">
        </div>
        <div class="form-group">
          <label for="email"></label>
          <input type="email" name="email" value="" placeholder="email">
        </div>
        <div class="form-group">
          <label for="password"></label>
          <input type="password" name="password" value="" placeholder="password">
        </div>
        <div class="form-group">
          <label for="retapePassword"></label>
          <input type="password" name="retapePassword" value="" placeholder="retape your password">
        </div>
        <div class="">
          <input type="submit" name="" value="send">
        </div>
      </fieldset>
    </form>
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
