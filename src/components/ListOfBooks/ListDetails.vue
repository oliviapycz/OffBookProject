<template lang="html">
  <div class="wrapper-list-details col-md-11">
    <div class="row" v-for=" li in list">
      <div class="row col-md-6 col-12">
        <div class="title col-12">
          <h4>{{ li.name_list }}</h4>
        </div>
        <h5 class="col-12"> <i>list proposed by</i> {{ li.username }}</h5>
      </div>
      <p class="col-md-6" style="background-color: lightgreen; padding: 10px">{{ li.description_list }}</p>
      <div v-for="li in newMapped" class="row box" style="margin-bottom: 5px !important">
        <div class="col-md-2 illustration"></div>
        <div class="col-md-10 row">
          <li class="col-md-8 offset-md-2" style="list-style-type: none; margin-bottom: 15px">{{ li.author_book }} - {{ li.name_book }} - {{ li.year_book }}</li>
          <p class="col-md-8 offset-md-2"> {{ li.description_book }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      books: [],
      list: [],
      mapped: [],
      id_list: this.$route.params.id_list,
      newMapped: []
    };
  },
  methods: {
    fetchBooks () {
      this.axios.get('http://localhost:3000/book')
        .then(response => {
          console.log('books', response.data);
          this.books = response.data;
        });
    },
    fetchList () {
      this.axios.get('http://localhost:3000/lists/' + this.id_list)
        .then(response => {
          console.log('list', response.data);
          this.list = response.data;
          let booksArr = [];
          let newRes = [];
          let map1 = [];
          for (var li of this.list) {
            booksArr = li.books_arr.substring(2, li.books_arr.length-2);
            var res = booksArr.split(",");
            map1 = res.map(x => Number(x));
            console.log('mappedHere', map1);
            this.mapped = map1;
            console.log('to do', li.books_arr);
            this.newMapped = this.mapped.map(num => this.books.find((info) => info.id_book === num));
            console.log('newMapped', JSON.stringify(this.newMapped));
            // li.books_arr = newMapped;

            };
        });
    }
  },
  mounted() {
    this.fetchBooks();
    this.fetchList();
  }
}
</script>

<style lang="css" scoped="">
/******MOBILE FIRST******/

.illustration {
  background-image: url(../../assets/library.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 20vh;
}
.title {
  border-bottom: 2px solid lightgreen;
  margin-top: 10px !important;
  text-align: center;
  margin-bottom: 15px !important;
}
.box{
  background-color: white;
  padding: 5px 8px !important;
  border: 2px solid lightgrey;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0px lightgrey;
}
h5 {
  text-align: center;
}


/******DESKTOP******/
@media (min-width: 640px) {
  .wrapper-list-details {
    margin-top: 10px !important;
    margin: auto;
    padding: 5px;
    width: 80%;
  }
  h5 {
    text-align: inherit;
  }
}
</style>
