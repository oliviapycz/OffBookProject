<template lang="html">
  <div class="wrapper-list-details col-md-11">
    <div class="row" v-for=" list in lists">
      <div class="row col-md-6 col-12">
        <div class="title col-12">
          <h4>{{ list.name_list }}</h4>
        </div>
        <h5 class="col-12"> <i>list proposed by</i> {{ list.username }}</h5>
      </div>
      <p class="col-md-6" style="background-color: lightgreen; padding: 10px">{{ list.description_list }}</p>
      <div v-for="(l, index) in list.books" :key="index" class="row box" style="margin-bottom: 5px !important">
        <div class="col-md-2 illustration"
          :style="manageCoverBook(l.picture_path_book)">
        </div>
        <div class="col-md-10 row">
          <li class="col-md-8 offset-md-2" style="list-style-type: none; margin-bottom: 15px">{{ l.author_book }} - {{ l.name_book }} - {{ l.year_book }}</li>
          <p class="col-md-8 offset-md-2"> {{ l.description_book }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // books: [],
      lists: [],
      id_list: this.$route.params.id_list,
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
    // fetchBooks () {
    //   this.axios.get('http://localhost:3000/book')
    //     .then(response => {
    //       console.log('books', response.data);
    //       this.books = response.data;
    //     });
    // },
    fetchList () {
      this.axios.get('http://localhost:3000/lists/' + this.id_list)
        .then(response => {
          this.lists = response.data;
          console.log('[===this.list===]', JSON.stringify(this.lists));
        });
    }
  },
  mounted() {
    // this.fetchBooks();
    this.fetchList();
  }
}
</script>

<style lang="css" scoped="">
/******MOBILE FIRST******/
.wrapper-list-details {
  margin-top: 5px;
  padding: 5px;
  min-height: 80vh !important;
  }
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
    margin: auto;
    width: 70%;
  }
  h5 {
    text-align: inherit;
  }
}
</style>
