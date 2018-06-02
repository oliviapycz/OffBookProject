<template lang="html">
  <div class="wrapper-update row">
    <div class="col-md-4  offset-1 image-preview " v-for="book in wishBooks">
      <img class="preview" :src="imageData.length>0 ? imageData : manageCoverBook(book.picture_path_book)">
    </div>
    <div class="col-md-6">
        <h4 class="offset-md-4 col-md-6">Update a Wish Book</h4>
      <form class=" col-md-12" @submit.prevent="onSubmit" v-for="book in wishBooks">
        <fieldset>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="updated_name_book">Title</label>
            <input
              type="text"
              id="updated_name_book"
              class="form-control col-md-10"
              :value = "book.name_book"
              @input = "name_book = $event.target.value"
              required>
          </div>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="updated_author_book">Author</label>
            <input
              type="text"
              id="updated_author_book"
              class="form-control col-md-10"
              :value = "book.author_book"
              @input = "author_book = $event.target.value"
              required>
          </div>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="updated_year_book">Year</label>
            <input
              type="number"
              id="updated_year_book"
              class="form-control col-md-10"
              :value = "book.year_book"
              @input = "year_book = $event.target.value"
              required>
          </div>
          <div class="from-group row marginTop15">
            <label class="col-md-2" for="uescription_book">Description</label>
            <textarea
              class="form-control col-md-10"
              id="updated_description_book"
              :value = "book.description_book"
              @input = "description_book = $event.target.value"
              rows="8" cols="80"></textarea>
          </div>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="updated_picture_path_book">Picture</label>
            <!-- <input
              type="text"
              id="updated_picture_path_book"
              class="form-control col-md-10"
              :value = "book.picture_path_book"
              @input = "picture_path_book= $event.target.value"
              required> -->
              <input type="file"
              @change="onFileChanged"
              accept="image/*">
          </div>
          <div class="form-group row marginTop15">
            <input  class="btn btn-secondary offset-md-5 col-md-4 " type="submit" name="" value="SEND">
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import axios from 'axios';

const urlApi = 'http://localhost:3000/wishbook/';
export default {
  props: ['id_user'],
  data() {
    return {
      name_book: '',
      author_book: '',
      year_book: '',
      description_book: '',
      picture_path_book: '',
      wishBooks: [],
      routeId: this.$route.params.id_book,
      imageData: '',
      selectedFile: null
    };
  },
  methods: {

    getBooks() {
      const bookApi = urlApi + this.routeId;
      this.axios.get(bookApi)
        .then((response) => {
        /* eslint-disable */
          // console.log('this.routeId', this.routeId);
          console.log('get response.data', response.data.rows);
          this.wishBooks = response.data.rows;
          console.log('this books ' + JSON.stringify(this.wishBooks));
          console.log(this.wishBooks[0].author_book);
        });
    },
    onFileChanged (event) {
        // Reference to the DOM input element
        var input = event.target;
        // Ensure that you have a file before attempting to read it
        if (input.files && input.files[0]) {
            // create a new FileReader to read this image and convert to base64 format
            var reader = new FileReader();
            // Define a callback function to run, when FileReader finishes its job
            reader.onload = (e) => {
                // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                // Read image as base64 and set to imageData
                this.imageData = e.target.result;
            }
            // Start the reader job - read file as a data url (base64 format)
            reader.readAsDataURL(input.files[0]);
            this.selectedFile = event.target.files[0]
            console.log('this.selectedFile', this.selectedFile);
        }
    },
    manageCoverBook (pic) {
      const fakeCover = '../../../../static/images/library.jpg';
      let cover =  '../../../../static/uploads/covers/' + pic
      if ( pic.length > 0) {
         return cover
      } else {
        return fakeCover
      }
    },
    onSubmit() {
      const bookApi = urlApi + this.routeId;

      if (this.selectedFile === null) {
        const updatedFormData = {
          name_book: this.name_book.length === 0 ? this.wishBooks[0].name_book : this.name_book,
          author_book: this.author_book.length === 0 ? this.wishBooks[0].author_book : this.author_book,
          year_book: this.year_book.length === 0 ? this.wishBooks[0].year_book : this.year_book,
          description_book: this.description_book.length === 0 ? this.wishBooks[0].description_book : this.description_book,
          picture_path_book: this.picture_path_book.length === 0 ? this.wishBooks[0].picture_path_book : this.picture_path_book
        };
        console.log('this.selectedFile === null');
        this.axios.put(bookApi, updatedFormData).then((updatedBooks) => {
          /* eslint-disable */
          this.updatedFormData = updatedBooks.data;
        })
        .then(() => {
          this.$router.go(-1);
        })
      } else {
        console.log('this.selectedFile !!!== null', this.selectedFile);
        const formData = new FormData()
        formData.append('cover', this.selectedFile, this.selectedFile.name)
        axios.post('/uploads', formData)
          .then((cover) => {
            this.picture_path_book = cover.data.filename
            console.log('this.picture_path_book',this.picture_path_book);
          })
          .then(()=> {
            const updatedFormData = {
              name_book: this.name_book.length === 0 ? this.wishBooks[0].name_book : this.name_book,
              author_book: this.author_book.length === 0 ? this.wishBooks[0].author_book : this.author_book,
              year_book: this.year_book.length === 0 ? this.wishBooks[0].year_book : this.year_book,
              description_book: this.description_book.length === 0 ? this.wishBooks[0].description_book : this.description_book,
              picture_path_book: this.picture_path_book.length === 0 ? this.wishBooks[0].picture_path_book : this.picture_path_book
            };
            console.log('updatedFormData',updatedFormData);
            this.axios.put(bookApi, updatedFormData).then((updatedBooks) => {
              /* eslint-disable */
              this.updatedFormData = updatedBooks.data;
            });
          })
          .then(() => {
            this.$router.go(-1);
          })

      }
    },
  },
  mounted() {
    this.getBooks();
  },
};
</script>

<style lang="css" scoped="">
.wrapper-update {
  min-height: 93vh;
  background-image: url(../../assets/half-books.jpg);
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
img.preview {
  margin-top: 30px;
  height: 80%;
  width: 80%;
}
</style>
