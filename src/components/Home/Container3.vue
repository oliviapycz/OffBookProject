<template lang="html">
  <div class="component row">

      <div class="col-md-7 leftPart"></div>

      <div class="col-md-5 rightPart">
        <div class="">
          <h4 style="margin-top: 07vh !important">List Of Books</h4>
          <h6 style="margin-top: 07vh !important">
            Wishing to read a new book<br><br> but don't know which one?<br><br>Take a look at the amazing lists<br><br> that other booklovers do.<br><br><br>Share with other <br><br>your list of favorite books<br><br>or any list you want and give <br><br>some great advices yo other to!
          </h6>
          <router-link :to="{ name: 'ListOfBooks'}">
            <button class="btn btn-success "type="" name="button" style="margin-top: 10vh !important">See Now!</button>
          </router-link>
        </div>
      </div>

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

 button {
   width: 160px;
   height: 40px;
   background-color: #A36F4D;
   border-style: none;
   border-radius: 30px;
   color: white;
   transition: 0.3s
 }
 button:hover {
   cursor: pointer;
   transition: 0.3s;
  background-color: white;
  border: 2px solid rgba(160, 111, 77, 0.5);
  color: rgba(160, 111, 77, 0.5);;
 }
 .leftPart {
  background-image: url(../../assets/bookspils-min.jpeg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
  height: 100vh;
 }
 .rightPart {
   height: 100vh;
   background-color: #faf7fa;
 }

 /******DESKTOP******/
   @media (min-width: 640px) {

   }
</style>
