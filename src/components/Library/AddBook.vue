<template lang="html">
  <div class="col-md-11">
    <div class="title row ">
      <div class="col-md-12">
        <h4>Add a new Book</h4>
      </div>
      <form class="col-md-6" @submit.prevent="onSubmit">
        <fieldset>
          <div class="form-group">
            <label for="name_book">Title :</label>
            <input
              type="text"
              id="name_book"
              class="form-control"
              v-model="name_book"
              required
              placeholder="ex: au bonheur des dames">
          </div>
          <div class="form-group">
            <label for="author_book">Author :</label>
            <input
              type="text"
              id="author_book"
              class="form-control"
              v-model="author_book"
              required
              placeholder="ex: emile zola">
          </div>
          <div class="form-group">
            <label for="year_book">Year :</label>
            <input
              type="number"
              id="year_book"
              class="form-control"
              v-model="year_book"
              required
              placeholder="ex: 1898">
          </div>
          <div class="from-group">
            <label for="description_book">Description :</label>
            <textarea
              class="form-control"
              id="description_book"
              v-model="description_book"
              rows="8" cols="80"
              placeholder="ex: lorem ipsum"></textarea>
          </div>
          <div class="form-group">
            <label for="picture_path_book">Picture :</label>
            <input
              type="text"
              id="picture_path_book"
              class="form-control"
              v-model="picture_path_book"
              required
              placeholder="ex: /img.jpg">
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
import axios from 'axios';

const urlApi = 'http://localhost:3000/book';
export default {
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
      };
      axios.post(urlApi, formData).then((books) => {
        /* eslint-disable */
        this.formData = books.data;
      });
      /* eslint-disable */
      console.log(formData);
    },
  }
};
</script>

<style lang="css">
</style>
