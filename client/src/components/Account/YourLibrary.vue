<template lang="html">
  <div class="wrapper-library col-md-11">
    <div class="title row justify-content-between">
      <div class="">
        <router-link :to="{ name: 'AddBook', params: {id_user} }"><button class="btn btn-outline-success btn-sm" type="button" name="button">{{ windowWidth > 640 ? addBookDesktop : addBookMobile }}</button></router-link>
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
          <a class="dropdown-item" href="#" @click=" added_last">Added Last</a>
          <a class="dropdown-item" href="#" @click=" filter = year_book">Year</a>
          <a class="dropdown-item" href="#" @click=" filter = 'author_book' ">Author</a>
        </div>
      </div>
      </div>
    </div>
    <div v-if="!this.books.length" class="noData">
      <p>Oops, no books in your library yet</p>
      <p>Click on Add a new book below</p>
    </div>
    <div v-if="this.books.length" class="row">
      <div class="col-md-4 paddingMobile" v-for="book in orderBy(books, filter)">
        <div class="row col-md-12 box">
          <div class="col-md-12">
            <h6>{{ book.name_book }}</h6>
            <h6>{{ book.author_book }} - {{ book.year_book }}</h6>
          </div>
          <div class="col-md-6 illustration"
              :style="manageCoverBook(book.picture_path_book)"></div>
          <p class="col-md-6">{{ book.description_book }}</p>
          <div class="col-md-12" style="margin-top: 7px">
            <router-link :to="{ path: 'updatebook/' + book.id_book}" append><button class=" btn btn-outline-success btn-sm" type="button" name="button" >UPDATE</button></router-link>
            <button type="button" name="button" class=" btn btn-outline-success btn-sm offset-md-3" @click="(() =>{triggerModal(book.id_book)})">DELETE</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="footer row justify-content-center">
      <router-link to="account/yourlibrary/addbook"><button class="btn btn-success btn-sm" type="button" name="button">SEE ALL</button></router-link>
    </div> -->

      <div class="row" v-if="openedModal">
        <div class="col-md-4 col-md-offset-4 modale" v-for="book in selectBook">
          <p>Are you sure you want to delete this book?</p>
          <div class="">
            <div class="row col-md-12">
              <div class="col-md-12">
                <h6>{{ book.name_book }}</h6>
                <h6>{{ book.author_book }}</h6>
              </div>
            </div>
          </div>
          <button class="btn btn-outline-success btn-sm" type="button" @click="openedModal = false">CANCEL</button>
          <button class="btn btn-outline-danger btn-sm" type="button" @click="(() =>{deleteBook(book.id_book)})">CONFIRM</button>
        </div>
      </div>

  </div>
</template>

<script>
/* eslint-disable */
// const urlApi = 'http://localhost:3000/book';
// import DeleteBook from './../Library/DeleteBook';
export default {
  // components: {
  //   appDeletebook: DeleteBook,
  // },
  props: ['id_user'],
  // routeId: this.$route.params.id_user,
  data() {
    return {
      windowWidth: window.innerWidth,
      addBookDesktop: '+ Add a new book',
      addBookMobile: '+',
      books: [],
      selectBook: [],
      openedModal: false,
      id_book: '',
      filter: 'author_book',
    };
  },
  methods: {
    added_last () {
      if (this.books.length > 1) {
        this.books.reverse();
      }
    },
      year_book () {
        if (this.books.length > 1) {
        }
    },
    manageCoverBook (pic) {
      const fakeCover = 'background-image: url(../../static/images//library.jpg)';
      let cover = { 'background-image': 'url(../../../static/uploads/covers/' + pic + ')' }
      if ( pic.length > 0) {
         return cover
      } else {
        return fakeCover
      }
    },
    fetchData () {
      this.axios.get('http://localhost:3000/' + this.id_user + '/book')
        .then(response => {
          this.books = response.data;
        });
    },
    deleteBook (id_book) {
      this.openedModal = false;
      this.axios.delete('http://localhost:3000/book/' + id_book)
        .then(response => {
          this.books = response.data;
        })
        .then(this.fetchData());
        // this.$router.go(-1);
    },
    triggerModal (id_book) {
      this.openedModal = true;
      this.axios.get('http://localhost:3000/book/' + id_book)
        .then(response => {
          return this.selectBook = response.data;
        });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="css" scoped="">
.wrapper-library {
  min-height: 80vh !important;
  margin-top: 5px;
  padding: 5px;
}
.paddingMobile {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.illustration {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 50vh;
}
.footer {
  background-color: lightgreen;
}
.box{
  padding: 5px 8px !important;
  border: 2px solid lightgrey;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0px lightgrey;
  margin-bottom: 10px !important;
}
.title {
  border-bottom: 2px solid lightgreen;
  margin: 0 !important;
}
.modale {
  border: 2px solid lightgreen;
  box-shadow: 5px 5px 5px grey;
  background-color: white;
  z-index: 500;
  position: fixed;
  left: 20%;
  top: 45%;
  margin: auto;
}

@media (min-width: 640px) {
  .wrapper-library {
    /*border: 2px solid lightgreen;*/
    margin: 15px auto;
    margin-top: 10px;
    /*border-radius: 3px;
    box-shadow: 2px 2px 5px lightgreen;*/
    padding: 5px;
    width: 90%;
  }
  .paddingMobile {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
}
.noData {
  margin-top: 5px;
  height: 35vh;
  background-color: rgba(211, 211, 211, 0.38);
  color: grey;
  font-size: 24px;
  text-align: center;
  padding-top: 7vh;
}
</style>
