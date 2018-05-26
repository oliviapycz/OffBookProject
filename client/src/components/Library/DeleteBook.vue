<!-- <template lang="html">
  <div class="row">
    <div class="col-md-8 col-md-offset-2 modale" v-for="book in books">
      <p>Are you sure you want to delete this book?</p>
      <div class="" v-for="book in books">
        <div class="row col-md-12">
          <div class="col-md-12">
            <h6>{{ book.name_book }}</h6>
            <h6>{{ book.author_book }}</h6>
          </div>
        </div>
      </div>
      <button class="btn btn-outline-success btn-sm" type="button" @click="closeModal">CANCEL</button>
      <button class="btn btn-outline-danger btn-sm" type="button">CONFIRM</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ['id_user'],
  data() {
    return {
      openModal: true,
      books: [],
    };
  },
  methods: {
    fetchData () {
      this.axios.get('http://localhost:3000/' + this.id_user + '/book')
        .then(response => {
          console.log(response.data);
          this.books = response.data;
        });
    },
    closeModal () {
      this.$router.replace('account/' + this.id_user + '/library');
    }
  },
  mounted() {
    // console.log('created');
    this.fetchData();
  },
};
</script>

<style lang="css">
.modale {
  border: 2px solid lightgreen;
  box-shadow: 5px 5px 5px grey;
  background-color: white;
  z-index: 500;
  position: absolute;
  left: 20%;
  top: 15%;
  margin: auto;
}
</style> -->
