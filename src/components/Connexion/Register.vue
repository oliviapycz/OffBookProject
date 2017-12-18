<template lang="html">
  <div class="wrapper row align-items-center">
    <form class="col-md-4 " @submit.prevent="onSubmit">
      <fieldset>
        <legend> Register</legend>
        <div class="form-group">
          <label for="username">Username :</label>
          <input
            type="text"
            id="username"
            class="form-control"
            v-model="username"
            required
            placeholder="bouquiquineuse">
        </div>
        <div class="form-group">
          <label for="email">Email Address :</label>
          <input
            type="email"
            id="email"
            class="form-control"
            v-model="email"
            required
            placeholder="bouquiquineuse@offbooks.com">
        </div>
        <div class="form-group">
          <label for="password">Password :</label>
          <input
            type="password"
            id="password"
            class="form-control"
            v-model="password"
            required
            placeholder="********">
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirm Password :</label>
          <input
           type="password"
           id="confirm-password"
           class="form-control"
           v_model="confirmPassword"
           required
           placeholder="********">
        </div>
        <!-- <div class="form-group">
          <label for="picture"></label>
          <input
          type="file"
          class="form-control-file">
        </div> -->
        <div class="form-group">
          <input  class="btn btn-secondary" type="submit" name="" value="SEND">
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      /* eslint-disable */ 
      console.log(formData);
    },
  },
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
    /*width: 40%;*/
    /*margin: auto;*/
    border: inherit;
    border-bottom: 1px solid lightgreen;
  }
  .btn-secondary {
    /*width: 5%;*/

  }
</style>
