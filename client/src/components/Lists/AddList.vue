<template lang="html">
  <div class="wrapper-add row">

    <div class="col-md-6">
        <h4 class="offset-md-3 col-md-8">Add a new List</h4>
      <form class="col-md-12" @submit.prevent="onSubmit">
        <fieldset>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="name_list">Title :</label>
            <input
              type="text"
              id="name_book"
              class="form-control col-md-10"
              v-model="name_list"
              required
              placeholder="ex: my favorite 10 books">
          </div>

          <div class="inBox">
            <draggable element="span" v-model="list" :options="dragOptions" :move="onMove">
                <transition-group name="no" class="list-group d-flex flex-row flex-wrap" tag="ul">
                  <li class="list-group-item col-md-2 paddingMobile" v-for="book in list" :key="book.name_book">
                    <!-- <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                    {{element.name}}
                    <span class="badge">{{element.order}}</span> -->
                    <div class="row col-md-12 boxForm">
                      <div class="col-md-12" style="padding:inherit !important">
                        <h6 style="font-size:10px">{{ book.name_book }}</h6>
                        <h6 style="font-size:10px">{{ book.author_book }}</h6>
                      </div>
                      <div class="col-md-12 illustration"
                          :style="manageCoverBook(book.picture_path_book)"></div>
                    </div>
                  </li>
                </transition-group>
            </draggable>
          </div>

          <div class="from-group row marginTop15">
            <label class="col-md-2" for="description_list">Description :</label>
            <textarea
              class="form-control col-md-10"
              id="description_book"
              v-model="description_list"
              rows="6" cols="80"
              placeholder="ex: lorem ipsum"></textarea>
          </div>

          <div class="form-group row marginTop15">
            <input  class="btn btn-secondary offset-md-5 col-md-4 " type="submit" name="" value="SEND">
          </div>
        </fieldset>
      </form>
    </div>

    <div class="row col-md-6">
      <draggable  class=" col-md-12 list-group" element="ul" v-model="books" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
        <transition-group type="transition" :name="'flip-list'" class="d-flex flex-row flex-wrap">
          <li class="list-group-item col-md-3 col-6 paddingMobile " v-for="book in books" :key="book.name_book">
            <!-- <i :class="book.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i> -->
            <!-- {{element.name}}
            <span class="badge">{{element.order}}</span> -->
              <div class="row col-md-12 box">
                <div class="col-md-12" style="padding:inherit !important">
                  <h6 style="font-size:10px">{{ book.name_book }}</h6>
                  <h6 style="font-size:10px">{{ book.author_book }}</h6>
                </div>
                <div class="col-md-12 illustration" :style="manageCoverBook(book.picture_path_book)"></div>
              </div>
          </li>
        </transition-group>
    </draggable>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import axios from 'axios';
import draggable from 'vuedraggable'
// const urlApi = this.id_user + '/book';
export default {
  props: ['id_user'],
  components: {
    draggable,
  },
  data() {
    return {
      editable:true,
      isDragging: false,
      delayedDragging:false,
      books: [],
      list: [],
      name_book: '',
      author_book: '',
      year_book: '',
      description_book: '',
      picture_path_book: '',
      name_list: '',
      description_list: '',
      username: '',
      id_list: '',
    };
  },
  methods: {
    manageCoverBook (pic) {
      const fakeCover = 'background-image: url(../../../static/images//library.jpg)';
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
          this.books = response.data.rows;
        });
    },
    getUsername() {
      this.axios.get('http://localhost:3000/users/' + this.id_user + '/username')
      .then((res) => {
        this.username = res.data[0].username;
      })
    },
    onSubmit() {
      let listIdBook = [];
      this.list.map( (book) => {
        listIdBook.push(book.id_book)
      });
      const formData = {
        name_list: this.name_list,
        description_list: this.description_list,
        user_id: this.id_user,
        username: this.username,
      };
      const pathId = formData.user_id;
      const urlApi = '/lists';
      axios.post(pathId + urlApi, formData).then((list) => {
        /* eslint-disable */
        // this.formData = list.data;
        console.log('formData', list.data);
        
        this.id_list = list.data[0].id_list;
        console.log('id_list',this.id_list);
        
      }).then(() =>{
        for (var i = 0; i < listIdBook.length; i++) {
          let formDataBooks = {
            list_id: this.id_list,
            book_id : listIdBook[i]
          }
          axios.post(pathId + '/list-books', formDataBooks);
        }
      }).then(() => {
        this.$router.go(-1);
      })
    },
    // orderList () {
    //   this.list = this.list.sort((one,two) =>{return one.order-two.order; })
    // },
    onMove ({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    },
  },
  computed: {
    dragOptions () {
      return  {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      };
    },
  },
  watch: {
    isDragging (newValue) {
      if (newValue){
        this.delayedDragging= true
        return
      }
      this.$nextTick( () =>{
           this.delayedDragging =false
      })
    }
  },
  mounted() {
    this.fetchData();
    this.getUsername();

  },
  updated() {
    console.log(this.list);
  }
};
</script>

<style lang="css" scoped="">
.wrapper-add {
  min-height: 93vh;
  background-image: url(../../assets/books-half.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 15px !important;
  /*opacity: 0.8;*/
}
label {
  padding: inherit !important;
}
.marginTop15 {
  margin-top: 15px !important
}
h4 {
  text-align: center;
}
.inBox {
  height: 45vh;
  background-color: white;
  border-radius: 5px;
  margin-top: 10px;
}
.box{
  background-color: white;
  padding: 5px 8px !important;
  border: 2px solid lightgrey;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0px lightgrey;
  /*margin-bottom: 10px !important;*/
}
.boxForm{
  background-color: white;
  /*padding: 5px 8px !important;*/
  border: 2px solid lightgrey;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0px lightgrey;
  /*margin-bottom: 10px !important;*/
}
.boxForm > .illustration {
  min-height: 15vh;
}
.illustration {
  background-image: url(../../assets/library.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 30vh;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: .5;
  background: #C8EBFB;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  padding: 0 !important;
  cursor: move;
}
li {
  margin: 0
}
.list-group-item i{
  cursor: pointer;

}
</style>
