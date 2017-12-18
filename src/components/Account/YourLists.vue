<template lang="html">
  <div class="wrapper col-md-11">
    <div class="title row justify-content-between">
      <div class="">
        <router-link to="account/yourlibrary/addlist"><button class="btn btn-outline-success btn-sm" type="button" name="button">+ Add a new list</button></router-link>
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

    <div class="row">
      <div class="col-md-4 box">
        <div class="row col-md-12">
          <div class="col-md-12">
            <h6>{{ title }}</h6>
          </div>
          <div class="col-md-6 illustration"></div>
          <p class="col-md-6">{{ description }}</p>
          <div class="col-md-12" style="margin-top: 7px">
            <button class=" btn btn-outline-success btn-sm" type="button" name="button">UPDATE</button>
            <button class=" btn btn-outline-success btn-sm offset-md-3" type="button" name="button">DELETE</button>
          </div>

        </div>
      </div>
    </div>
    <div class="footer row justify-content-center">
      <router-link to="account/yourlibrary/addbook"><button class="btn btn-success btn-sm" type="button" name="button">SEE ALL</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Best Books Ever',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    };
  },
};
</script>

<style lang="css" scoped="">
.wrapper {
  border: 2px solid lightgreen;
  margin: auto;
  border-radius: 3px;
  box-shadow: 2px 2px 5px lightgreen;
  padding: 5px;
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
  padding: 2px;
  border-right: 2px solid lightgreen;
}
.title {
  border-bottom: 2px solid lightgreen;
}
</style>
