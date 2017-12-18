<template lang="html">
  <div class="wrapper row align-items-center">
    <form class="col-md-4 " action="index.html" method="post">
      <fieldset>
        <legend> Log In</legend>
        <div class="form-group">
          <label for="username">Username :</label>
          <input
            type="text"
            name="username"
            class="form-control"
            value=""
            required
            placeholder="bouquiquineuse">
        </div>
        <div class="form-group">
          <label for="password">Password :</label>
          <input
            type="password"
            name="password"
            class="form-control"
            value=""
            required
            placeholder="********">
        </div>
        <div class="form-group">
          <input  class="btn btn-secondary" type="submit" name="" value="SEND">
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="css" scoped="">
  .wrapper {
    height: 93vh;
    background-image: url(../../assets/books.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  form {
    background-color: white;
    margin: auto;
    border: 1px solid lightgrey;
    border-radius: 6px;
    box-shadow: 2px 2px 5px lightgrey;
  }
  legend {
    text-align: center;
  }
  input {
    border: inherit;
    border-bottom: 1px solid lightgreen;
  }
  .btn-secondary {
    /*width: 5%;*/

  }
</style>
