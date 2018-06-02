<template lang="html">
  <div class="">

  <div class="wrapper-account">
    <div class="title row justify-content-between align-items-end">
      <div class="col-xs-2">
        <router-link :to="{ name: 'AddBook', params: {id_user} }"><button class="btn btn-outline-success btn-sm addBtn" type="button" name="button">{{ windowWidth > 640 ? addBookDesktop : addBookMobile }}</button></router-link>
      </div>
        <router-link class="col-xs-5":to="{ name: 'YourLibrary', params: {id_user} }"><h4>Your Library</h4></router-link>
        <p class="col-xs-5" style="margin-bottom: 0 !important">Last added</p>
    </div>
    <div v-if="!this.books.length" class="noData">
      <p>Oops, no books in your library yet</p>
      <p>Click on Add a new book above</p>
    </div>
    <div v-if="this.books.length" class="row">
      <div class="col-md-4 paddingMobile" v-for="book in books">
        <div class="row col-md-12 box">
          <div class="col-md-12">
            <h6>{{ book.name_book }}</h6>
            <h6>{{ book.author_book }} - {{ book.year_book }}</h6>
          </div>
          <div class="col-md-6 illustration"
          :style="manageCoverBook(book.picture_path_book)">
          </div>
          <p class="col-md-6">{{ book.description_book }}</p>
          <div class="col-md-12" style="margin-top: 7px">
            <router-link :to="{ path:  id_user + '/yourlibrary/updatebook/' + book.id_book}" ><button class=" btn btn-outline-success btn-sm" type="button" name="button" >UPDATE</button></router-link>
            <button type="button" name="button" class=" btn btn-outline-success btn-sm offset-md-3" @click="(() =>{triggerModal(book.id_book)})">DELETE</button>
          </div>
        </div>
        <a href="#"></a>
      </div>
    </div>
    <div v-if="this.books.length > 2" class="footer row justify-content-center align-items-end">
      <router-link :to="{ name: 'YourLibrary', params: {id_user} }"><button class="btn btn-success btn-sm" type="button" name="button">SEE ALL</button></router-link>
    </div>
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

  <div class="wrapper-account">
    <div class="title row justify-content-between align-items-end">
      <div class="col-xs-2">
        <router-link :to="{ name: 'AddList', params: {id_user} }"><button class="btn btn-outline-success btn-sm addBtn" type="button" name="button">{{ windowWidth > 640 ? addListDesktop : addListMobile }}</button></router-link>
      </div>
        <router-link class="col-xs-5":to="{ name: 'YourLists', params: {id_user} }"><h4>Your Lists</h4></router-link>
        <p class="col-xs-5" style="margin-bottom: 0 !important">Last added</p>
    </div>
    <div v-if="!this.lists.length" class="noData">
      <p>Oops, no list in your library yet</p>
      <p>Click on Add a new list above</p>
    </div>
    <div  v-if="this.lists.length" class="row">
      <div class="col-md-4 paddingMobile" v-for="list in lists">
        <div class="row col-md-12 box">
          <div class="col-md-12">
            <h6>{{ list.name_list }}</h6>
          </div>
          <div class="col-md-12 row">
            <div class="col-md-12">
              <li class="col-md-12" v-for="(l, index) in list.books" :key="index">{{ l.author_book }} - {{ l.name_book }}</li>
            </div>
            <p class="col-md-12">{{ list.description_list }}</p>
          </div>
          <!-- <div class="col-md-12" style="margin-top: 7px">
            <router-link :to="{ path:  id_user + '/yourlibrary/updatebook/' + book.id_book}" ><button class=" btn btn-outline-success btn-sm" type="button" name="button" >UPDATE</button></router-link>
            <button type="button" name="button" class=" btn btn-outline-success btn-sm offset-md-3" @click="(() =>{triggerModal(book.id_book)})">DELETE</button>
          </div> -->
        </div>
        <a href="#"></a>
      </div>
    </div>
    <div v-if="this.lists.length > 2" class="footer row justify-content-center align-items-end">
      <router-link :to="{ name: 'YourLists', params: {id_user} }"><button class="btn btn-success btn-sm" type="button" name="button">SEE ALL</button></router-link>
    </div>
      <!-- <div class="row" v-if="openedModal">
        <div class="col-md-8 col-md-offset-2 modale" v-for="book in selectBook">
          <p>Are you sure you want to delete this list?</p>
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
      </div> -->
  </div>

    <div class="wrapper-account">
      <div class="title row justify-content-between align-items-end">
        <div class="col-xs-2">
          <router-link :to="{ name: 'AddWishBook', params: {id_user} }"><button class="btn btn-outline-success btn-sm addBtn" type="button" name="button">{{ windowWidth > 640 ? addBookDesktop : addBookMobile }}</button></router-link>
        </div>

          <router-link class="col-xs-5":to="{ name: 'YourWishList', params: {id_user} }"><h4>Your Wish List</h4></router-link>


          <p class="col-xs-5" style="margin-bottom: 0 !important">Last added</p>

      </div>
      <div v-if="!this.wishBooks.length" class="noData">
        <p>Oops, no books in your wish list yet</p>
        <p>Click on Add a new book above</p>
      </div>
      <div v-if="this.wishBooks.length" class="row">
        <div class="col-md-4 paddingMobile" v-for="book in wishBooks">
          <div class="row col-md-12 box">
            <div class="col-md-12">
              <h6>{{ book.name_book }}</h6>
              <h6>{{ book.author_book }} - {{ book.year_book }}</h6>
            </div>
            <div class="col-md-6 illustration"
              :style="manageCoverBook(book.picture_path_book)">
            </div>
            <p class="col-md-6">{{ book.description_book }}</p>
            <div class="col-md-12" style="margin-top: 7px">
              <router-link :to="{ path:  id_user + '/wishlist/updatewishbook/' + book.id_book}" ><button class=" btn btn-outline-success btn-sm" type="button" name="button" >UPDATE</button></router-link>
              <button type="button" name="button" class=" btn btn-outline-success btn-sm" @click="(() =>{triggerModalWishBook(book.id_book)})">DELETE</button>
              <button @click="(()=>{addToLibrary(book.id_book)})" class=" btn btn-outline-success btn-sm btn-sm" type="button" name="button">MOVE TO LIBRARY</button>
            </div>
          </div>
          <a href="#"></a>
        </div>
      </div>
      <div v-if="this.wishBooks.length > 2" class="footer row justify-content-center align-items-end" style="margin-bottom:15px !important">
        <router-link :to="{ name: 'YourWishList', params: {id_user} }"><button class="btn btn-success btn-sm" type="button" name="button">SEE ALL</button></router-link>
      </div>

        <div class="row" v-if="openedWishModal">
          <div class="col-md-4 col-md-offset-4 modale" v-for="book in selectWishBook">
            <p>Are you sure you want to delete this book?</p>
            <div class="">
              <div class="row col-md-12">
                <div class="col-md-12">
                  <h6>{{ book.name_book }}</h6>
                  <h6>{{ book.author_book }}</h6>
                </div>
              </div>
            </div>
            <button class="btn btn-outline-success btn-sm" type="button" @click="openedWishModal = false">CANCEL</button>
            <button class="btn btn-outline-danger btn-sm" type="button" @click="(() =>{deleteWishBook(book.id_book)})">CONFIRM</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import YourLibrary from './YourLibrary';
import YourLists from './YourLists';
import YourWishList from './YourWishList';
import YourPersonalInformations from './YourPersonalInformations';

export default {
  components: {
    appYourlibrary: YourLibrary,
    appYourlists: YourLists,
    appYourwishlist: YourWishList,
    appYourpersonalinformations: YourPersonalInformations,
  },
  props: ['id_user'],
  data() {
    return {
      windowWidth: window.innerWidth,
      addBookDesktop: '+ Add a new book',
      addBookMobile: '+',
      addListDesktop: '+ Add a new list',
      addListMobile: '+',
      books: [],
      booksList: [],
      lists: [],
      lastList: [],
      moveBooks: [],
      wishBooks: [],
      selectBook: [],
      selectWishBook: [],
      openedModal: false,
      openedWishModal: false,
      id_book: '',
      listedBooks: [],
    };
  },
  methods: {
    manageCoverBook (pic) {
      const fakeCover = 'background-image: url(../../static/images/library.jpg)';
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
          this.booksList = response.data;
          this.books = response.data.rows.slice(-3).reverse();
        });
    },
    fetchDataWish () {
      this.axios.get('http://localhost:3000/' + this.id_user + '/wishbook')
        .then(response => {
          this.wishBooks = response.data.rows.slice(-3).reverse();
        });
    },
    fetchDataList () {
      this.axios.get('http://localhost:3000/' + this.id_user + '/lists')
        .then(response => {
          this.lists = response.data.slice(-3).reverse();
         })
    },
    deleteBook (id_book) {
      this.openedModal = false;
      this.axios.delete('http://localhost:3000/book/' + id_book)
        .then(response => {
          this.books = response.data.rows;
        })
        .then(() => {
          this.fetchData()
        });
        // this.$router.go(-1);
    },
    deleteWishBook (id_book) {
      this.openedWishModal = false;
      this.axios.delete('http://localhost:3000/wishbook/' + id_book)
        .then(response => {
          this.books = response.data.rows;
        })
        .then(()=> {
          this.fetchDataWish()
          this.fetchData()
        });
        // this.$router.go(-1);
    },
    triggerModal (id_book) {
      console.log('triggerModal', id_book);
      this.openedModal = true;
      this.axios.get('http://localhost:3000/book/' + id_book)
        .then(response => {
          console.log('response.data',JSON.stringify(response.data));
          return this.selectBook = response.data.rows;
        });
    },
    triggerModalWishBook (id_book) {
      this.openedWishModal = true;
      this.axios.get('http://localhost:3000/wishbook/' + id_book)
        .then(response => {
          return this.selectWishBook = response.data.rows;
        });
    },
    addToLibrary (id_book) {
      const pathId = this.id_user;
      const urlApi = '/book';
      this.axios.get('http://localhost:3000/wishbook/' + id_book)
        .then(response => {
          this.moveBooks = response.data.rows;
        }).then(() => {
          this.axios.post('http://localhost:3000/' + pathId + urlApi, this.moveBooks[0])
        }).then(() => {
          this.axios.delete('http://localhost:3000/wishbook/' + id_book)
        }).then(() => {
          this.fetchData();
          this.fetchDataWish();
        });
    }
  },
  mounted() {
    this.fetchData();
    this.fetchDataWish();
    this.fetchDataList();
  },
  created() {
    console.log('[account]', this.id_user);
    this.$emit('setIdUser', this.id_user);
  }
};
</script>

<style lang="css" scoped="">
.wrapper-account {
  margin-top: 10px !important;
  padding: 5px;
}
.addBtn {
  height: 30px !important;
  font-size: 20px;
  font-weight: bold;
  line-height: 13px;
}
.illustration {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 20vh;
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
.box{
  padding: 5px 8px !important;
  border: 2px solid lightgrey;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0px lightgrey;
  margin-bottom: 10px !important;
}
.title {
  border-bottom: 2px solid lightgreen;
  margin-bottom: 0 !important;
}
.footer {
  background-color: lightgreen;
}
h4 {
  color: green;
  line-height: 10px;

}
a:hover {
  text-decoration: none !important;
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

/******DESKTOP******/
@media (min-width: 640px) {
  .wrapper-account {
    margin-top: 10px !important;
    margin: auto;
    padding: 5px;
    width: 90%;
  }
  .addBtn {
    height: inherit !important;
    line-height: inherit;
    font-weight: inherit;
    font-size: 18px;
  }
}
</style>
