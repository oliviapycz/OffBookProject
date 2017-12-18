<template lang="html">
  <div class="col-md-11">
    <div class="title row ">
      <div class="col-md-12">
        <h4>Update a Book</h4>
        <!-- <div class="" v-for="book in books">
          <p>name : {{ book.name_book }}</p>
        </div> -->
      </div>
      <form class="col-md-6" @submit.prevent="onSubmit" v-for="book in books">
        <fieldset>
          <div class="form-group">
            <label for="updated_name_book">Title :  </label>
            <input
              type="text"
              id="updated_name_book"
              class="form-control"
              v-model="updated_name_book"

              required>
          </div>
          <div class="form-group">
            <label for="updated_author_book">Author :</label>
            <input
              type="text"
              id="updated_author_book"
              class="form-control"
              v-model="updated_author_book"
              required>
          </div>
          <div class="form-group">
            <label for="updated_year_book">Year :</label>
            <input
              type="number"
              id="updated_year_book"
              class="form-control"
              v-model="updated_year_book"
              required>
          </div>
          <div class="from-group">
            <label for="updated_description_book">Description :</label>
            <textarea
              class="form-control"
              id="updated_description_book"
              v-model="updated_description_book"
              rows="8" cols="80">ooooooo</textarea>
          </div>
          <div class="form-group">
            <label for="updated_picture_path_book">Picture :</label>
            <input
              type="text"
              id="updated_picture_path_book"
              class="form-control"
              v-model="updated_picture_path_book"
              required>
          </div>
          <div class="form-group">
            <input  class="btn btn-secondary" type="submit" name="" value="SEND">
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import axios from 'axios';

const urlApi = 'http://localhost:3000/book';
export default {
  data() {
    return {
      book: {
        name_book: '',
        author_book: '',
        year_book: '',
        description_book: '',
        picture_path_book: '',
      },
      update_book: {
        updated_name_book: '',
        updated_author_book: '',
        updated_year_book: '',
        updated_description_book: '',
        updated_picture_path_book: '',
      },
      books: [],
      routeId: this.$route.params.id_book,
    };
  },
  methods: {

    getBooks() {
      this.axios.get(urlApi)
        .then((response) => {
        /* eslint-disable */
          console.log(this.routeId);
          console.log(response.data);
          this.books = response.data;
          console.log('thisbooks ' + this.books);
          this.books = [response.data.find((book) => book.id_book == this.routeId)];
        });
    },
    onSubmit() {
      const formData = {
        updated_name_book: this.updated_name_book,
        updated_author_book: this.updated_author_book,
        updated_year_book: this.updated_year_book,
        updated_description_book: this.updated_description_book,
        updated_picture_path_book: this.updated_picture_path_book,
      };
      this.axios.put(urlApi, formData).then((books) => {
        /* eslint-disable */
        this.formData = books.data;
      });
      /* eslint-disable */
      console.log(formData);
    },
  },
  mounted() {
    this.getBooks();
  },
};
</script>

<style lang="css">
</style>
