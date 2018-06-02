<template lang="html">
  <div class="wrapper row align-items-center">
    <form class="col-md-4 " @submit.prevent="onSubmit">
      <fieldset>
        <legend> Register</legend>
        <div class="form-group input" :class="{invalid: $v.username.$error}">
          <label for="username">Username :</label>
          <input
            type="text"
            id="username"
            class="form-control"
            v-model.lazy="username"
            @blur="$v.username.$touch()"
            placeholder="bouquiquineuse">
             <p v-if="!$v.username.required">This field must not be empty</p>
            <p v-if="!$v.username.minLen">You're username should have at least {{ $v.username.$params.minLen.min }} characters.</p>
            <p v-if="!$v.username.unique">This username is already taken.</p>
            
        </div>
        <div class="form-group input" :class="{invalid: $v.email.$error}">
          <label for="email">Email Address :</label>
          <input
            type="email"
            id="email"
            class="form-control"
            v-model.lazy="email"
            @blur="$v.email.$touch()"
            placeholder="bouquiquineuse@offbooks.com">
            <p v-if="$v.email.$error || !$v.email.email">Please provide a valid email address</p>
            <p v-if="!$v.email.required">This field must not be empty</p>
            <p v-if="!$v.email.unique">This email address is already taken.</p>
        </div>
        <div class="form-group input" :class="{invalid: $v.password.$error}">
          <label for="password">Password :</label>
          <input
            type="password"
            id="password"
            class="form-control"
            @blur="$v.password.$touch()"
            v-model="password"
            placeholder="********">
            <p v-if="!$v.password.required">This field must not be empty</p>
            <p v-if="!$v.password.minLen">You're password should have at least {{ $v.password.$params.minLen.min }} characters.</p>
        </div>
        <div class="form-group input" :class="{invalid: $v.confirmPassword.$error}">
          <label for="confirm-password">Confirm Password :</label>
          <input
           type="password"
           id="confirm-password"
           class="form-control"
           v-model="confirmPassword"
           @blur="$v.confirmPassword.$touch()"
           placeholder="********">
           <p v-if="!$v.confirmPassword.required">This field must not be empty</p>
           <p v-if="password !== confirmPassword">You're password should be the same.</p>
        </div>
        <!-- <div class="form-group">
          <label for="picture"></label>
          <input
          type="file"
          class="form-control-file">
        </div> -->
        <div class="form-group">
          <input  class="btn btn-secondary" type="submit" :disabled="$v.$invalid" value="SEND">
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
const urlApi = 'http://localhost:3000/users';
import axios from 'axios';
import { required, email, minValue, minLength, sameAs, requiredUnless } from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  validations: {
    username: {
      required,
      minLen: minLength(6),
      unique: val => {
        if (val === '') return true
        return axios.get('http://localhost:3000/users/usernames/' + val )
        .then((res) => {
          console.log(res.data);
          // let fetchUsername = res.data;
          return Object.keys(res.data).length === 0
        });
      }
    },
    email: {
      /*required: required,
      email: email
      if key name = to value you can ommit value*/
      required,
      email,
      unique: val => {
        if (val === '') return true
        return axios.get('http://localhost:3000/users/emails/' + val)
          .then(res => {
            return Object.keys(res.data).length === 0
          })
      }
    },
    password: {
      required,
      minLen: minLength(6)
    },
    confirmPassword: {
      required,
      sameAs: sameAs('password')
      /*sameAs: sameAs(vm => {
        return vm.password
      })*/
    },
  },
  methods: {
    onSubmit() {
      const formData = {
        username: this.username,
        email_user: this.email,
        password_user: this.password,
        confirmPassword: this.confirmPassword,
      };
      /* eslint-disable */
      console.log('in register.vue', formData);
      // axios.post(urlApi, formData).then((user) => {
      //   /* eslint-disable */
      //   this.formData = user.data;
      // });
      // this.$router.push('account/');
      this.$store.dispatch('register', formData)
    },
  },
};
</script>

<style lang="css" scoped="">
  .wrapper {
    min-height: 89vh;
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
    border: inherit !important;
    border-bottom: 1px solid lightgreen !important;
  }
  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }
  .input.invalid input {
    border: 1px solid red;
    background-color: #ffc9aa;
  }

  /******DESKTOP******/
  @media (min-width: 640px) {
    .wrapper{
      height: 89vh;
    }
  }
</style>
