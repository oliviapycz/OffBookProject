<template lang="html">
  <div class="wrapper col-md-11">
    <div class="title row justify-content-between">
      <div class="">
        <router-link to="account/yourlibrary/addbook"><button class="btn btn-outline-success btn-sm" type="button" name="button">+ Add a new book</button></router-link>
      </div>
      <div class="">
        <h4>Your Library</h4>
      </div>
      <div class="">
        <div class="dropdown">
        <button class="btn btn-outline-success btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Order By
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Added Last</a>
          <a class="dropdown-item" href="#">Rating</a>
          <a class="dropdown-item" href="#">Year</a>
          <a class="dropdown-item" href="#">Alphabet</a>
        </div>
      </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 box" v-for="book in books">
        <div class="row col-md-12">
          <div class="col-md-12">
            <h6>{{ book.name_book }} - {{ book.author_book }} - {{ book.year_book }}</h6>
          </div>
          <div class="col-md-6 illustration"></div>
          <p class="col-md-6">{{ book.description_book }}</p>
          <div class="col-md-12" style="margin-top: 7px">
            <router-link :to="'account/yourlibrary/updatebook/' + book.id_book" ><button class=" btn btn-outline-success btn-sm" type="button" name="button">UPDATE</button></router-link>
            <router-link to="/yourlibrary/deletebook"><button class=" btn btn-outline-success btn-sm offset-md-3" type="button" name="button">DELETE</button></router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="footer row justify-content-center">
      <router-link to="account/yourlibrary/addbook"><button class="btn btn-success btn-sm" type="button" name="button">SEE ALL</button></router-link>
    </div> -->
  </div>
</template>

<script>
const urlApi = 'http://localhost:3000/book';
export default {
  data() {
    return {
      books: [],
      // title: 'Au Bonheur des Dames',
      // author: 'Emile Zola',
      // year: 1889,
      // description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit
      // , sed do eiusmod tempor incididunt ut  deserunt mollit anim id est laborum.',
    };
  },
  methods: {
    getBooks() {
      this.axios.get(urlApi).then((response) => {
        /* eslint-disable */
        console.log(response.data);
        this.books = response.data;
      });
    },
  },
  mounted() {
    // console.log('created');
    this.getBooks();
  },
};
</script>

<style lang="css" scoped="">
.wrapper {
  border: 2px solid lightgreen;
  margin: auto;
  border-radius: 3px;
  box-shadow: 2px 2px 5px lightgreen;
  padding: 5px;
}
.illustration {
  background-image: url(../../assets/library.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.footer {
  background-color: lightgreen;
}
.box{
  padding: 2px;
  border-right: 2px solid lightgreen;
}
.title {
  border-bottom: 2px solid lightgreen;
}
</style>
