<template lang="html">
  <div class="wrapper-list col-md-11">
    <div class="title">
        <h4>List Of Books</h4>
    </div>

      <div class="row col-md-12 list" v-for="list in allLists" :key="list.id_list">
        <router-link :to="{ path: 'list/' + list.id_list}" append class="row col-md-12"><div class="row col-md-12 box">
          <div class="col-md-12 row">
            <h5 class="col-md-6">{{ list.name_list }}</h5>
            <h6 class="col-md-6"> <i style="font-size: 0.8em">list proposed by</i> {{ list.username }}</h6>
          </div>
          <p class="col-md-6">{{ list.description_list }}</p>
          <div class="col-md-6 illustration"></div>
        </div></router-link>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allLists: [],
      username: '',
      mapped: [],
      booksList: [],
    };
  },
  methods: {
    fetchAllLists() {
      this.axios.get('/lists')
        .then((response) => {
          this.allLists = response.data.rows;
          console.log('allLists', this.allLists);
        })
    },
  },
  mounted() {
    this.fetchAllLists();
  },
};
</script>

<style lang="css" scoped="">
/******MOBILE FIRST******/
.wrapper-list {
  margin-top: 5px;
  padding: 5px;
  min-height: 80vh !important;
}
.illustration {
  background-image: url(../assets/library.webp);
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
a {
  text-decoration: none !important;
  color: black !important;
}
.box{
  background-color: white;
  padding: 5px 8px !important;
  border: 2px solid lightgrey;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0px lightgrey;
}
.list {
  padding: 0 3px !important;
  margin-bottom: 4px !important;
}
.list h5, .list h6 {
  text-align: center;
}

/******DESKTOP******/
@media (min-width: 640px) {
  .wrapper-list {
    margin: auto;
    width: 70%;
  }
  .list {
    padding: inherit !important;
  }
  .list h6 {
    text-align: right;
  }
}
</style>
