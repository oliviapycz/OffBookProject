<template lang="html">
  <div class="wrapper-add row">
    <div class="col-md-6">
        <h4 class="offset-md-4 col-md-5">Add a new Book</h4>
      <form class="col-md-12" @submit.prevent="onSubmit">
        <fieldset>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="name_book">Title :</label>
            <input
              type="text"
              id="name_book"
              class="form-control col-md-10"
              v-model="name_book"
              :maxlength = "maxNameBook"
              :disabled="maxNameBook == 0"
              required
              placeholder="ex: au bonheur des dames">
              <p class="offset-md-2" v-if="maxNameBook- name_book.length == 0">Maximum 50 characters</p>
          </div>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="author_book">Author :</label>
            <input
              type="text"
              id="author_book"
              class="form-control col-md-10"
              v-model="author_book"
              :maxlength = "maxAuthorBook"
              :disabled="maxAuthorBook == 0"
              required
              placeholder="ex: emile zola">
              <p class="offset-md-2" v-if="maxAuthorBook- author_book.length == 0">Maximum 50 characters</p>
          </div>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="year_book">Year :</label>
            <input
              type="number"
              id="year_book"
              class="form-control col-md-10"
              v-model="year_book"
              max = "2018"
              min = "0"
              required
              placeholder="ex: 1898">
              <p class="offset-md-2" v-if="year_book > 2018">We're not here yet</p>
          </div>
          <div class="from-group row marginTop15">
            <label class="col-md-2" for="description_book">Description : <br>{{maxDescriptionBook - description_book.length}} char left</label>
            <textarea
              class="form-control col-md-10"
              id="description_book"
              v-model="description_book"
              :maxlength="maxDescriptionBook"
              :disabled="maxDescriptionBook == 0"
              rows="8" cols="80"
              placeholder="maximum 350 characters"></textarea>
              <p class="offset-md-2" v-if="maxDescriptionBook - description_book.length == 0">Maximum de characters atteint</p>
          </div>
          <div class="form-group row marginTop15">
            <label class="col-md-2" for="picture_path_book">Picture : </label>
            <!-- <input
              type="text"
              id="picture_path_book"
              class="form-control col-md-10"
              v-model="picture_path_book"
              placeholder="ex: /img.jpg"> -->
              <input type="file" @change="onFileChanged" accept="image/*">
          </div>
          <!-- <div class="file-upload-form">
              Upload an image file:

          </div> -->
          <div class="form-group row marginTop15">
            <input  class="btn btn-secondary offset-md-5 col-md-4 " type="submit" name="" value="SEND">
          </div>
        </fieldset>
      </form>
    </div>
    <div class="col-md-4 offset-md-1 image-preview " v-if="imageData.length > 0">
        <img class="preview" :src="imageData">
    </div>
  </div>
</template>

<script>
import axios from 'axios';

// const urlApi = this.id_user + '/book';
export default {
  props: ['id_user'],
  data() {
    return {
      name_book: '',
      author_book: '',
      year_book: '',
      description_book: '',
      picture_path_book: '',
      maxDescriptionBook: 350,
      maxNumberYear: 4,
      maxNameBook: 50,
      maxAuthorBook: 50,
      imageData: '',
      selectedFile: null
    };
  },
  methods: {
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
    onSubmit() {
      if (this.selectedFile === null) {
        const formDatas = {
          name_book: this.name_book,
          author_book: this.author_book,
          year_book: this.year_book,
          description_book: this.description_book,
          picture_path_book: this.picture_path_book,
          user_id: this.id_user,
        };
        const pathId = formDatas.user_id;
        const urlApi = '/book';
        axios.post(pathId + urlApi, formDatas).then((books) => {
          /* eslint-disable */
          this.formDatas = books.data;
        }).then(() => {
          this.$router.go(-1);
        })
      } else {
        const formData = new FormData()
        formData.append('cover', this.selectedFile, this.selectedFile.name)
        axios.post('/uploads', formData)
          .then((cover) => {
            this.picture_path_book = cover.data.filename
          })
          .then(() => {
            const formDatas = {
              name_book: this.name_book,
              author_book: this.author_book,
              year_book: this.year_book,
              description_book: this.description_book,
              picture_path_book: this.picture_path_book,
              user_id: this.id_user,
            };
            const pathId = formDatas.user_id;
            const urlApi = '/book';
            axios.post(pathId + urlApi, formDatas).then((books) => {
              /* eslint-disable */
              this.formDatas = books.data;
            });
          }).then(() => {
            this.$router.go(-1);
          })
      }

    },
  }
};
</script>

<style lang="css" scoped="">
.wrapper-add {
  min-height: 93vh;
  background-image: url(../../../static/images/books-half.jpg);
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
