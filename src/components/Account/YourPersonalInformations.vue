<template lang="html">
  <div class="wrapper col-md-11">
    <div class="title row justify-content-center">
      <div class="">
        <h4>Your Personal Informations</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12">
            <h6>Your address mail : {{ mail }}</h6>
            </div>
            <div class="col-md-12">
              <h6>Your username: {{ username }}</h6>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <a href="#">Change my password</a>
            </div>
            <div class="col-md-12">
              <a href="#">Delete my account</a>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="row col-md-3 justify-content-center " style="height: 160px; background-color: red">
          <p>your picture</p>
        </div>
        <div class="row justify-content-center">
          <button class="btn btn-success btn-sm" type="button" name="button">UPDATE</button>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      mail: 'bouquiquineuse@offbook.com',
      username: 'bouquiquineuse',
      picture: 'path/to/avatar.jpg',
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
.title {
  border-bottom: 2px solid lightgreen;
}
</style>
