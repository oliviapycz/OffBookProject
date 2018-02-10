<template lang="html">
  <div class="">
    <!-- <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" href="#">My Account</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Library</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Lists</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Wish List</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Personal Informations</a>
      </li>
  </ul> -->
  <div class="wrapper-account">
    <div class="title row justify-content-between align-items-end">
      <div class="col-xs-2">
        <router-link :to="{ name: 'AddBook', params: {id_user} }"><button class="btn btn-outline-success btn-sm addBtn" type="button" name="button">{{ windowWidth > 640 ? addBookDesktop : addBookMobile }}</button></router-link>
      </div>

        <router-link class="col-xs-5":to="{ name: 'YourLibrary', params: {id_user} }"><h4>Your Library</h4></router-link>


        <p class="col-xs-5" style="margin-bottom: 0 !important">Last added</p>

    </div>

    <div class="row">
      <div class="col-md-4 paddingMobile" v-for="book in books">
        <div class="row col-md-12 box">
          <div class="col-md-12">
            <h6>{{ book.name_book }}</h6>
            <h6>{{ book.author_book }} - {{ book.year_book }}</h6>
          </div>
          <div class="col-md-6 illustration"></div>
          <p class="col-md-6">{{ book.description_book }}</p>
          <div class="col-md-12" style="margin-top: 7px">
            <router-link :to="{ path:  id_user + '/yourlibrary/updatebook/' + book.id_book}" ><button class=" btn btn-outline-success btn-sm" type="button" name="button" >UPDATE</button></router-link>
            <button type="button" name="button" class=" btn btn-outline-success btn-sm offset-md-3" @click="(() =>{triggerModal(book.id_book)})">DELETE</button>
          </div>
        </div>
        <a href="#"></a>
      </div>
    </div>
    <div class="footer row justify-content-center align-items-end">
      <router-link :to="{ name: 'YourLibrary', params: {id_user} }"><button class="btn btn-success btn-sm" type="button" name="button">SEE ALL</button></router-link>
    </div>

      <div class="row" v-if="openedModal">
        <div class="col-md-8 col-md-offset-2 modale" v-for="book in selectBook">
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

    <div class="row">
      <div class="col-md-4 paddingMobile" v-for="list in lists">
        <div class="row col-md-12 box">
          <div class="col-md-12">
            <h6>{{ list.name_list }}</h6>
          </div>
          <div class="col-md-6 ">
            <li>{{list.books_arr}}</li>
          </div>
          <p class="col-md-6">{{ list.description_list }}</p>
          <!-- <div class="col-md-12" style="margin-top: 7px">
            <router-link :to="{ path:  id_user + '/yourlibrary/updatebook/' + book.id_book}" ><button class=" btn btn-outline-success btn-sm" type="button" name="button" >UPDATE</button></router-link>
            <button type="button" name="button" class=" btn btn-outline-success btn-sm offset-md-3" @click="(() =>{triggerModal(book.id_book)})">DELETE</button>
          </div> -->
        </div>
        <a href="#"></a>
      </div>
    </div>
    <div class="footer row justify-content-center align-items-end">
      <router-link :to="{ name: 'YourLibrary', params: {id_user} }"><button class="btn btn-success btn-sm" type="button" name="button">SEE ALL</button></router-link>
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

      <div class="row">
        <div class="col-md-4 paddingMobile" v-for="book in wishBooks">
          <div class="row col-md-12 box">
            <div class="col-md-12">
              <h6>{{ book.name_book }}</h6>
              <h6>{{ book.author_book }} - {{ book.year_book }}</h6>
            </div>
            <div class="col-md-6 illustration"></div>
            <p class="col-md-6">{{ book.description_book }}</p>
            <div class="col-md-12" style="margin-top: 7px">
              <router-link :to="{ path:  id_user + '/wishlist/updatewishbook/' + book.id_book}" ><button class=" btn btn-outline-success btn-sm" type="button" name="button" >UPDATE</button></router-link>
              <button type="button" name="button" class=" btn btn-outline-success btn-sm" @click="(() =>{triggerModal(book.id_book)})">DELETE</button>
              <button @click="(()=>{addToLibrary(book.id_book)})" class=" btn btn-outline-success btn-sm btn-sm" type="button" name="button">MOVE TO LIBRARY</button>
            </div>
          </div>
          <a href="#"></a>
        </div>
      </div>
      <div class="footer row justify-content-center align-items-end">
        <router-link :to="{ name: 'YourLibrary', params: {id_user} }"><button class="btn btn-success btn-sm" type="button" name="button">SEE ALL</button></router-link>
      </div>

        <div class="row" v-if="openedModal">
          <div class="col-md-8 col-md-offset-2 modale" v-for="book in selectBook">
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
    <app-yourpersonalinformations :id_user="id_user"></app-yourpersonalinformations><br>
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
      moveBooks: [],
      wishBooks: [],
      selectBook: [],
      openedModal: false,
      id_book: '',
      b: [],
      listedBooks: [],
    };
  },
  methods: {
    fetchData () {
      this.axios.get('http://localhost:3000/' + this.id_user + '/book')
        .then(response => {
          console.log(response.data);
          console.log(response.data.length);
          this.books = response.data.slice(-3).reverse();
        });
    },
    fetchDataWish () {
      this.axios.get('http://localhost:3000/' + this.id_user + '/wishbook')
        .then(response => {
          console.log(response.data);
          console.log(response.data.length);
          this.wishBooks = response.data.slice(-3).reverse();
        });
    },
    fetchDataList () {
      this.axios.get('http://localhost:3000/' + this.id_user + '/lists')
        .then(response => {
          this.lists = response.data;
          console.log('this.lists', this.lists);
          var a = [];
          for (var list of this.lists) {
            console.log('list.list to string', list.books_arr.substring(2, list.books_arr.length-2));
            this.b = list.books_arr.substring(2, list.books_arr.length-2);
            this.b.split(',').map(item => {
              return parseInt(item)
            });
            a.push(this.b);
            console.log('b',this.b);
            console.log('a',this.a);
            }
         })
         .then(()=> {
           this.axios.get('http://localhost:3000/' + this.id_user + '/book')
             .then(response => {
               console.log(response.data);
               console.log(response.data.length);
               this.booksList = response.data;
           console.log('this.books', this.booksList);
           this.listedBooks = this.booksList.find((info) => info.id_book === this.b[0]);
           console.log('this.listedBooks ', JSON.stringify(this.listedBooks) );
         });
        });

    },
    deleteBook (id_book) {
      this.openedModal = false;
      console.log('select', this.selectBook);
      this.axios.delete('http://localhost:3000/book/' + id_book)
        .then(response => {
          console.log(response.data);
          this.books = response.data;
        })
        .then(this.fetchData());
        // this.$router.go(-1);
    },
    triggerModal (id_book) {
      this.openedModal = true;
      console.log(id_book);
      this.axios.get('http://localhost:3000/book/' + id_book)
        .then(response => {
          console.log('getBook', response.data);
          return this.selectBook = response.data;
          // console.log('selectedBook', this.selectBook);
          // console.log(this.$route.query.id_book);
        });
      console.log('e', id_book);
    },
    addToLibrary (id_book) {
      const pathId = this.id_user;
      const urlApi = '/book';
      this.axios.get('http://localhost:3000/wishbook/' + id_book)
        .then(response => {
          console.log('[get]', response.data);
          this.moveBooks = response.data;
        }).then(() => {
          this.axios.post('http://localhost:3000/' + pathId + urlApi, this.moveBooks[0])
          console.log('http://localhost:3000/' + pathId + urlApi);
        }).then(() => {
          this.axios.delete('http://localhost:3000/wishbook/' + id_book)
        }).then(() => {
          console.log('/account/' + this.id_user);
          this.$router.replace('/account/' + this.id_user)
        });
    }
  },
  mounted() {
    this.fetchData();
    this.fetchDataWish();
    this.fetchDataList();
  },
  created() {
    console.log(window.innerWidth);
    console.log('[account]', this.id_user);
    this.$emit('setIdUser', this.id_user)
  }
  // methods: {
  //   fetchData () {
  //     this.axios.get('http://localhost:3000/user_books/' + this.routeId)
  //       .then(response => {
  //         this.infos = response.data
  //         this.infos = [this.infos.find((info) => info.user_id === this.routeId)]
  //       })
  //   }
  // }
};
</script>

<style lang="css" scoped="">
.wrapper-account {
  margin-top: 10px !important;
  /*border: 2px solid lightgreen;*/
  margin: auto;
  /*border-radius: 3px;
  box-shadow: 2px 2px 5px lightgreen;*/
  padding: 5px;
  width: 90%;
}
.addBtn {
  height: 40px !important;
  font-size: 16px;
}
.illustration {
  background-image: url(../../assets/library.jpg);
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
  position: absolute;
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
  font-size: 24px;
  /*line-height: 30px !important;*/
  /*margin-bottom: 0 !important;*/
  color: green;
}
</style>
