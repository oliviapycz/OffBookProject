<template lang="html">
  <div class="wrapper-library col-md-11">
    <div class="title row justify-content-between">
      <div class="">
        <router-link :to="{ name: 'AddWishBook', params: {id_user} }"><button class="btn btn-outline-success btn-sm" type="button" name="button">{{ windowWidth > 640 ? addBookDesktop : addBookMobile }}</button></router-link>
      </div>
      <div class="">
        <h4>Your Wish List</h4>
      </div>
      <div class="">
        <div class="dropdown">
        <button class="btn btn-outline-success btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Order By
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#" @click="added_last">Added Last</a>
          <a class="dropdown-item" href="#" @click=" filter = rating">Rating</a>
          <a class="dropdown-item" href="#" @click=" filter = 'year_book'">Year</a>
          <a class="dropdown-item" href="#" @click=" filter = 'author_book' ">Author</a>
        </div>
      </div>
      </div>
    </div>

    <div v-if="!this.books.length" class="noData">
      <p>Oops, no books in your wish list yet</p>
      <p>Click on Add a new book above</p>
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
            <router-link :to="{ path: 'updatewishbook/' + book.id_book}" append><button class=" btn btn-outline-success btn-sm" type="button" name="button" >UPDATE</button></router-link>
            <button type="button" name="button" class=" btn btn-outline-success btn-sm " @click="(() =>{triggerModal(book.id_book)})">DELETE</button>
            <button @click="(()=>{addToLibrary(book.id_book)})" class=" btn btn-outline-success btn-sm" type="button" name="button">MOVE TO LIBRARY</button>
          </div>
        </div>
        <a href="#"></a>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-md-4 box">
        <div class="row col-md-12">
          <div class="col-md-12">
            <h6>{{ title }} - {{ author }} - {{ year }}</h6>
          </div>
          <div class="col-md-6 illustration"></div>
          <p class="col-md-6">{{ description }}</p>
          <div class="col-md-12" style="margin-top: 7px">
            <button class=" btn btn-outline-success btn-sm" type="button" name="button">UPDATE</button>
            <button class=" btn btn-outline-success btn-sm offset-md-1" type="button" name="button">DELETE</button>
            <button class=" btn btn-outline-success btn-sm offset-md-1" type="button" name="button">ADD TO LIBRARY</button>
          </div>

        </div>
      </div>
    </div> -->
    <div class="row" v-if="openedModal">
      <div class="col-md-4 col-md-offset-2 modale" v-for="book in selectBook">
        <p>You didn't read it yet....</p>
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
      this.books.reverse();
    },
    manageCoverBook (pic) {
      const fakeCover = 'background-image: url(../../static/images//library.webp)';
      let cover = { 'background-image': 'url(../../static/uploads/covers/' + pic + ')' }
      if ( pic.length > 0) {
         return cover
      } else {
        return fakeCover
      }
    },
    fetchData () {
      this.axios.get('/' + this.id_user + '/wishbook')
        .then(response => {
          this.books = response.data.rows;
        });
    },
    deleteBook (id_book) {
      this.openedModal = false;
      this.axios.delete('/wishbook/' + id_book)
        .then(response => {
          this.books = response.data.rows;
        })
        .then(this.fetchData());
        // this.$router.go(-1);
    },
    triggerModal (id_book) {
      this.openedModal = true;
      this.axios.get('/wishbook/' + id_book)
        .then(response => {
          return this.selectBook = response.data.rows;
        });
    },
    addToLibrary (id_book) {
      const pathId = this.id_user;
      const urlApi = '/book';
      this.axios.get('/wishbook/' + id_book)
        .then(response => {
          this.books = response.data.rows;
        }).then(() => {
          this.axios.post('/' + pathId + urlApi, this.books[0])
        }).then(() => {
          this.axios.delete('/wishbook/' + id_book);
          this.$router.go(-1);
        });
    }
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="css" scoped="">
.wrapper-library {
  margin-top: 5px;
  padding: 5px;
  min-height: 80vh !important;
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
    margin: 15px auto;
    margin-top: 10px;
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
