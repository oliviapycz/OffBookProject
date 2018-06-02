<template lang="html">
  <div class="wrapper-info col-md-11">
    <div class="title row justify-content-center">
      <div class="">
        <h4>Your Personal Informations</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="row" v-for="user in users">
          <div class="col-md-12">
            <h6>Your address mail : {{ user.email_user }}</h6>
            </div>
            <div class="col-md-12">
              <h6>Your username: {{ user.username }}</h6>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <a href="#" @click="triggerModal">Change my password</a>
            </div>
            <div class="col-md-12">
              <a href="#">Delete my account</a>
          </div>
        </div>
      </div>

      <!-- <div class="col-md-6">
        <div class="row col-md-3 justify-content-center " style="height: 160px; background-color: red">
          <p>your picture</p>
        </div>
        <div class="row justify-content-center">
          <button class="btn btn-success btn-sm" type="button" name="button">UPDATE</button>
        </div>
      </div> -->

      <div class="row" v-if="openedModal" v-for="user in users">
        <div class="col-md-8 col-md-offset-2 modale">
          <p>Change Password</p>
          <div class="">
            <div class="row col-md-12">
              <div class="col-md-12">
                <form class=" col-md-12" @submit.prevent="onSubmit"
                  <fieldset>
                    <div class="form-group input" :class="{invalid: $v.oldPassword.$error}">
                      <label for="password">Actual Password :</label>
                      <input
                        type="password"
                        id="oldPassword"
                        class="form-control"
                        @blur="$v.oldPassword.$touch()"
                        v-model="oldPassword"
                        placeholder="********">
                        <p v-if="!$v.oldPassword.required">This field must not be empty</p>
                        <p v-if="!$v.oldPassword.minLen">You're password should have at least {{ $v.oldPassword.$params.minLen.min }} characters.</p>
                    </div>

                    <div class="form-group input" :class="{invalid: $v.password.$error}">
                      <label for="password">New Password :</label>
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
                      <label for="confirm-password">Confirm New Password :</label>
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

                    <div class="form-group">
                      <input  class="btn btn-outline-success btn-sm" @click="(() =>{updatePassword(user.id_user)})" type="submit" :disabled="$v.$invalid" value="CHANGE PASSWORD">
                    </div>
                  </fieldset>
                </form>
                <h6>Pour info : {{ user.password_user }}</h6>
              </div>
            </div>
          </div>
          <button class="btn btn-outline-success btn-sm" type="button" @click="openedModal = false">CANCEL</button>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
/* eslint-disable */
import { required, minLength, sameAs } from 'vuelidate/lib/validators';
export default {
  props: ['id_user'],
  data() {
    return {
      users: [],
      picture: 'path/to/avatar.jpg',
      openedModal: false,
      oldPassword: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    fetchData() {
      console.log('id_user',this.id_user);
      const pathId = this.id_user;
      this.axios.get('/user/' + pathId)
        .then(response => {
          this.users = response.data;
        });
    },
    triggerModal () {
      this.openedModal = true;
    },
    onSubmit() {
      const updatedformData = {
        password_user: this.password_user.length === 0 ? this.users[0].password_user : this.password_user,
      };
      this.axios.put('/user/' + pathId, updatedFormData).then((updatedPassword) => {
        /* eslint-disable */
        this.updatedFormData = updatedPassword.data;
      });
    }
  },
  validations: {
    oldPassword: {
      required,
      minLen: minLength(6)
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
  mounted() {
    // console.log('created');
    this.fetchData();
  },
};
</script>

<style lang="css" scoped="">
.wrapper-info {
  margin-top: 10px !important;
  margin: auto;
  padding: 5px;
  width: 90%;
  min-height: 80vh !important;
}
.title {
  border-bottom: 2px solid lightgreen;
}
.modale {
  border: 2px solid lightgreen;
  box-shadow: 5px 5px 5px grey;
  background-color: white;
  z-index: 500;
  position: absolute;
  left: 30%;
  top: 15%;
  margin: auto;
}
</style>
