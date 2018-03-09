<template lang="html">
  <div class="component row">

    <div class="col-md-5 leftPart">

      <div class="">
        <h6 style="margin-top: 10vh !important">OffBooks is an App that allows you <br><br>to remember which book you read <br><br>and if you liked it.<br><br><br>You won't read twice <br><br>the same book without knowing it!<br><br><br><br>OffBooks is easy to use and, of course, is free!
        </h6><br><br>
        <router-link :to="{ name: 'Register'}">
          <button class="btn btn-success btn-sm"type="" name="button">Register Now!</button>
        </router-link>
      </div>
    </div>

    <div class="col-md-7 rightPart d-none d-sm-block"></div>

  </div>
</template>

<script>
export default {
};
</script>

<style lang="css" scoped="">
/******MOBILE FIRST******/
.component {
  height: 100vh;
  text-align: center;
}
.rightPart {
  background-image: url(../../assets/hands-page-book-pages.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
  height: 100vh;
}

.leftPart {
  height: 100vh;
  background-color: #faf7fa;
}

button {
  font-size: 20px;
  background-color: inherit;
  width: 200px;
  height: 60px;
  color: grey;
  border-style: none;
  border: 3px solid rgb(251, 53, 27);
  cursor: pointer;
  transition: 0.3s;
}
button:hover {
  transition: 0.3s;
  background-color: #ECF8F9;
  color: rgb(251, 53, 27);
  border: 1px solid rgb(251, 53, 27);
}

  /******DESKTOP******/
  @media (min-width: 640px) {

  }
</style>
