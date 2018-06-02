<template lang="html">
  <div class="wrapper-list col-md-11">
    <div class="title row justify-content-between">
      <div class="">
        <router-link :to="{ name: 'AddList', params: {id_user} }"><button class="btn btn-outline-success btn-sm" type="button" name="button">{{ windowWidth > 640 ? addListDesktop : addListMobile }}</button></router-link>
      </div>
      <div class="">
        <h4>Your Lists</h4>
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

    <div v-if="!this.lists.length" class="noData">
      <p>Oops, no list in your lists yet</p>
      <p>Click on Add a new list above</p>
    </div>
    <div v-if="this.lists.length" class="row">
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
          <div class="col-md-12" style="margin-top: 7px">
            <!-- <router-link :to="{ path: 'updatebook/' + book.id_book}" append><button class=" btn btn-outline-success btn-sm" type="button" name="button" >UPDATE</button></router-link> -->
            <button type="button" name="button" class=" btn btn-outline-success btn-sm offset-md-3" @click="(() =>{triggerModal(list.id_list)})">DELETE</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="footer row justify-content-center">
      <router-link to="account/yourlibrary/addbook"><button class="btn btn-success btn-sm" type="button" name="button">SEE ALL</button></router-link>
    </div> -->

      <div class="row" v-if="openedModal">
        <div class="col-md-8 col-md-offset-2 modale" v-for="list in selectList">
          <p>Are you sure you want to delete this list?</p>
          <div class="">
            <div class="row col-md-12">
              <div class="col-md-12">
                <h6>{{ list.name_list }}</h6>
                <p>{{ list.description_list  }}</p>
              </div>
            </div>
          </div>
          <button class="btn btn-outline-success btn-sm" type="button" @click="openedModal = false">CANCEL</button>
          <button class="btn btn-outline-danger btn-sm" type="button" @click="(() =>{deleteList(list.id_list)})">CONFIRM</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['id_user'],
  data() {
    return {
      windowWidth: window.innerWidth,
      addListDesktop: '+ Add a new list',
      addListMobile: '+',
      lists: [],
      selectList: [],
      bookList: [],
      listedBooks: [],
      delists: [],
      openedModal: false,
    };
  },
  methods: {
    fetchData () {
      this.axios.get('/' + this.id_user + '/book')
        .then(response => {
          this.booksList = response.data.rows;
          console.log('booksList',this.booksList);
          
        });
    },
    fetchDataList () {
      this.axios.get('/' + this.id_user + '/lists')
        .then(response => {
          this.lists = response.data;
          console.log('lists', this.lists);
          
         })
    },
    deleteList(id_list) {
      this.openedModal = false;
      this.axios.delete('/lists/' + id_list)
        .then(response => {
          this.delists = response.data.rows;
        })
        .then(this.fetchData());
        // this.$router.go(-1);
    },
    triggerModal (id_list) {
      this.openedModal = true;
      this.axios.get('/lists/' + id_list)
        .then(response => {
          return this.selectList = response.data.rows;
        });
    },
  },
  mounted() {
    this.fetchData();
    this.fetchDataList();
  },
};
</script>

<style lang="css" scoped="">
.wrapper-list {
  margin-top: 5px;
  padding: 5px;
  min-height: 80vh !important;
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
  padding: 5px 8px !important;
  border: 2px solid lightgrey;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0px lightgrey;
  margin-bottom: 10px !important;
}
.title {
  border-bottom: 2px solid lightgreen;
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

@media (min-width: 640px) {
  .wrapper-list {
    margin: 15px auto;;
    min-height: 80vh !important;
    margin-top: 10px;
    padding: 5px;
    width: 90%;
  }
  .paddingMobile {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
}
</style>
