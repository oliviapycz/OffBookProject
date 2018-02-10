<template lang="html">
  <div class="wrapper-update row">
    <div class="col-md-6 offset-md-6">
        <h4 class="offset-md-5 col-md-4">Update a Book</h4>
      <form class=" col-md-12" @submit.prevent="onSubmit" v-for="book in books">
        <fieldset>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="updated_name_book">Title</label>
            <input
              type="text"
              id="updated_name_book"
              class="form-control col-md-10"
              :value = "book.name_book"
              @input = "name_book = $event.target.value"
              required>
          </div>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="updated_author_book">Author</label>
            <input
              type="text"
              id="updated_author_book"
              class="form-control col-md-10"
              :value = "book.author_book"
              @input = "author_book = $event.target.value"
              required>
          </div>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="updated_year_book">Year</label>
            <input
              type="number"
              id="updated_year_book"
              class="form-control col-md-10"
              :value = "book.year_book"
              @input = "year_book = $event.target.value"
              required>
          </div>
          <div class="from-group row marginTop15">
            <label class="col-md-2" for="uescription_book">Description</label>
            <textarea
              class="form-control col-md-10"
              id="updated_description_book"
              :value = "book.description_book"
              @input = "description_book = $event.target.value"
              rows="8" cols="80"></textarea>
          </div>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="updated_picture_path_book">Picture</label>
            <input
              type="text"
              id="updated_picture_path_book"
              class="form-control col-md-10"
              :value = "book.picture_path_book"
              @input = "picture_path_book= $event.target.value"
              required>
          </div>
          <div class="form-group row marginTop15">
            <input  class="btn btn-secondary offset-md-5 col-md-4 " type="submit" name="" value="SEND">
          </div>
        </fieldset>
      </form>
      <!-- <form class="col-md-6" @submit.prevent="onSubmit" v-for="book in books">
        <fieldset>
          <div class="form-group">
            <label for="updated_name_book">Title :</label>
            <input
              type="text"
              id="updated_name_book"
              class="form-control"
              :value = "book.name_book"
              @input = "updated_name_book = $event.target.value"
              required>
          </div>
          <div class="form-group">
            <label for="updated_author_book">Author :</label>
            <input
              type="text"
              id="updated_author_book"
              class="form-control"
              v-model = "book.author_book"
              required>
          </div>
          <div class="form-group">
            <label for="updated_year_book">Year :</label>
            <input
              type="number"
              id="updated_year_book"
              class="form-control"
              v-model = "book.year_book"
              required>
          </div>
          <div class="from-group">
            <label for="updated_description_book">Description :</label>
            <textarea
              class="form-control"
              id="updated_description_book"
              v-model = "book.description_book"
              rows="8" cols="80"></textarea>
          </div>
          <div class="form-group">
            <label for="updated_picture_path_book">Picture :</label>
            <input
              type="text"
              id="updated_picture_path_book"
              class="form-control"
              v-model = "book.picture_path_book"
              required>
          </div>
          <div class="form-group">
            <input  class="btn btn-secondary" type="submit" name="" value="SEND">
          </div>
        </fieldset>
      </form> -->
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import axios from 'axios';

const urlApi = 'http://localhost:3000/book/';
export default {
  props: ['id_user'],
  data() {
    return {
      name_book: '',
      author_book: '',
      year_book: '',
      description_book: '',
      picture_path_book: '',
      books: [],
      routeId: this.$route.params.id_book,
    };
  },
  methods: {

    getBooks() {
      const bookApi = urlApi + this.routeId;
      this.axios.get(bookApi)
        .then((response) => {
        /* eslint-disable */
          // console.log('this.routeId', this.routeId);
          console.log('get response.data', response.data);
          this.books = response.data;
          console.log('this books ' + JSON.stringify(this.books));
          console.log(this.books[0].author_book);
          // this.books = [response.data.find((book) => book.id_book == this.routeId)];
        });
    },
    onSubmit() {
      const bookApi = urlApi + this.routeId;
      const updatedFormData = {
        name_book: this.name_book.length === 0 ? this.books[0].name_book : this.name_book,
        author_book: this.author_book.length === 0 ? this.books[0].author_book : this.author_book,
        year_book: this.year_book.length === 0 ? this.books[0].year_book : this.year_book,
        description_book: this.description_book.length === 0 ? this.books[0].description_book : this.description_book,
        picture_path_book: this.picture_path_book.length === 0 ? this.books[0].picture_path_book : this.picture_path_book
      };
      console.log('updatedFormData', updatedFormData);
      this.axios.put(bookApi, updatedFormData).then((updatedBooks) => {
        /* eslint-disable */
        this.updatedFormData = updatedBooks.data;
      });
      this.$router.go(-1);
    },
  },
  mounted() {
    this.getBooks();
  },
};
</script>

<style lang="css" scoped="">
.wrapper-update {
  min-height: 93vh;
  background-image: url(../../assets/half-books.jpg);
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
