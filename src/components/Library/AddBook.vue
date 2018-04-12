<template lang="html">
  <div class="wrapper-add row">
    <div class="col-md-6">
        <h4 class="offset-md-4 col-md-5">Add a new Book</h4>
      <form class="col-md-12" @submit.prevent="onSubmit">
        <fieldset>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="name_book">Title :</label>
            <input
              type="text"
              id="name_book"
              class="form-control col-md-10"
              v-model="name_book"
              :maxlength = "maxNameBook"
              :disabled="maxNameBook == 0"
              required
              placeholder="ex: au bonheur des dames">
              <p class="offset-md-2" v-if="maxNameBook- name_book.length == 0">Maximum 50 characters</p>
          </div>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="author_book">Author :</label>
            <input
              type="text"
              id="author_book"
              class="form-control col-md-10"
              v-model="author_book"
              :maxlength = "maxAuthorBook"
              :disabled="maxAuthorBook == 0"
              required
              placeholder="ex: emile zola">
              <p class="offset-md-2" v-if="maxAuthorBook- author_book.length == 0">Maximum 50 characters</p>
          </div>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="year_book">Year :</label>
            <input
              type="number"
              id="year_book"
              class="form-control col-md-10"
              v-model="year_book"
              max = "2018"
              min = "0"
              required
              placeholder="ex: 1898">
              <p class="offset-md-2" v-if="year_book > 2018">We're not here yet</p>
          </div>
          <div class="from-group row marginTop15">
            <label class="col-md-2" for="description_book">Description : <br>{{maxDescriptionBook - description_book.length}} char left</label>
            <textarea
              class="form-control col-md-10"
              id="description_book"
              v-model="description_book"
              :maxlength="maxDescriptionBook"
              :disabled="maxDescriptionBook == 0"
              rows="8" cols="80"
              placeholder="maximum 350 characters"></textarea>
              <p class="offset-md-2" v-if="max - description_book.length == 0">Maximum de characters atteint</p>
          </div>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="picture_path_book">Picture : </label>
            <input
              type="text"
              id="picture_path_book"
              class="form-control col-md-10"
              v-model="picture_path_book"
              placeholder="ex: /img.jpg">
          </div>
          <div class="form-group row marginTop15">
            <input  class="btn btn-secondary offset-md-5 col-md-4 " type="submit" name="" value="SEND">
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

// const urlApi = this.id_user + '/book';
export default {
  props: ['id_user'],
  data() {
    return {
      name_book: '',
      author_book: '',
      year_book: '',
      description_book: '',
      picture_path_book: '',
      maxDescriptionBook: 350,
      maxNumberYear: 4,
      maxNameBook: 50,
      maxAuthorBook: 50,
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        name_book: this.name_book,
        author_book: this.author_book,
        year_book: this.year_book,
        description_book: this.description_book,
        picture_path_book: this.picture_path_book,
        user_id: this.id_user,
      };
      const pathId = formData.user_id;
      const urlApi = '/book';
      axios.post(pathId + urlApi, formData).then((books) => {
        /* eslint-disable */
        this.formData = books.data;
      });
      // axios.post('http://localhost:3000/user_books' + this.id_user, formData).then((books) => {
      //   /* eslint-disable */
      //   this.formData = books.data;
      // });
      /* eslint-disable */
      console.log(formData);
      this.$router.go(-1);
    },
  }
};
</script>

<style lang="css" scoped="">
.wrapper-add {
  min-height: 93vh;
  background-image: url(../../assets/books-half.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 15px !important;
  /*opacity: 0.8;*/
}
label {
  padding: inherit !important;
}
.marginTop15 {
  margin-top: 15px !important
}
h4 {
  text-align: center;
}
</style>
