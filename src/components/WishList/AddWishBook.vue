<template lang="html">
  <div class="wrapper-add row">
    <div class="col-md-6">
        <h4 class="offset-md-3 col-md-8">Add a new Book to the Wish List</h4>
      <form class="col-md-12" @submit.prevent="onSubmit">
        <fieldset>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="name_book">Title :</label>
            <input
              type="text"
              id="name_book"
              class="form-control col-md-10"
              v-model="name_book"
              required
              placeholder="ex: au bonheur des dames">
          </div>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="author_book">Author :</label>
            <input
              type="text"
              id="author_book"
              class="form-control col-md-10"
              v-model="author_book"
              required
              placeholder="ex: emile zola">
          </div>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="year_book">Year :</label>
            <input
              type="number"
              id="year_book"
              class="form-control col-md-10"
              v-model="year_book"
              required
              placeholder="ex: 1898">
          </div>
          <div class="from-group row marginTop15">
            <label class="col-md-2" for="description_book">Description :</label>
            <textarea
              class="form-control col-md-10"
              id="description_book"
              v-model="description_book"
              rows="8" cols="80"
              placeholder="ex: lorem ipsum"></textarea>
          </div>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="picture_path_book">Picture :</label>
            <input
              type="text"
              id="picture_path_book"
              class="form-control col-md-10"
              v-model="picture_path_book"
              required
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
      const urlApi = '/wishbook';
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
