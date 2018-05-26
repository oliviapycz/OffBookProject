<template lang="html">
  <div class="wrapper-login row align-items-center">
    <form class="col-md-4 " @submit.prevent="onSubmit">
      <fieldset>
        <legend> Log In</legend>
        <div class="form-group">
          <label for="username">Username :</label>
          <input
            type="text"
            name="username"
            class="form-control"
            v-model="username"
            required
            placeholder="bouquiquineuse">
            <p v-if="!$v.username.required">This field must not be empty</p>
        </div>
        <div class="form-group">
          <label for="password">Password :</label>
          <input
            type="password"
            name="password"
            class="form-control"
            v-model="password"
            required
            placeholder="********">
            <p v-if="!$v.password.required">This field must not be empty</p>
        </div>
        <div class="form-group">
          <input  class="btn btn-secondary" type="submit" name="" value="SEND">
          <p v-if="!matchUsername">This username was not found in our database.</p>
          <p v-if="!matchPassword">Wrong Password.</p>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
// import axios from 'axios';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  props: ['id_user'],
  data() {
    return {
      matchUsername: true,
      matchPassword: true,
      username: '',
      password: '',
    };
  },
  validations: {
    username: {
      required,
    },
    password: {
      required,
    },
  },
  methods: {
    onSubmit() {
      const formData = {
        username: this.username,
        password: this.password,
      }
      console.log(formData);

      this.$store.dispatch('login', {username: formData.username, password: formData.password})



      // .then(() => {
      //   this.$router.push('/account/' + user.id_user);
      // })
      // .then(() => {
      //   if(localStorage.getItem('token')!== null || undefined ){
      //     this.$router.push('/account/' + this.$store.state.userId);
      //     console.log('store state userId', this.$store.state.userId);
      //     console.log('store state token', this.$store.state.token);
      //   } else {
      //     console.log('not set');
      //   }
      // })
      // .then( () => {
      //   console.log('path', '/account/' + this.id_user);
      //   this.$router.push('/account/' + this.id_user);
      // })

      // this.axios.get('http://localhost:3000/users/usernames/' + this.username)
      //   .then((res) => {
      //     console.log('data', res.data);
      //     const fetchData = res.data;
      //     if (fetchData.length === 0 ) {
      //       this.matchUsername = false;
      //       return console.log('this username was not found in our database');
      //     };
      // this.axios.post('http://localhost:3000/login', formData)
      //   .then((res) => {
      //     console.log('data send');
      //     console.log(res.data);
        // })

          // } else if (fetchData[0].password_user !== this.password) {
          //   this.matchPassword = false;
          //   return console.log('wrong password');
          // } else {
          //     localStorage.setItem('username', this.username);
          //     localStorage.setItem('id_user', fetchData[0].id_user);
              // this.$router.push('account/' + fetchData[0].id_user);
          //     console.log('account/' + fetchData[0].id_user);
          // }
        // });
    },
  },
};
</script>

<style lang="css" scoped="">
.wrapper-login {
  height: 89vh;
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

/******DESKTOP******/
@media (min-width: 640px) {
  .wrapper-login {
    height: 90vh;
  }
}
</style>
