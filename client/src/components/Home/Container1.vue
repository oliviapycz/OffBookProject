<template lang="html">
  <div class="component row align-items-center">
    <div class="col" style="margin-top: 15vh !important">
      <h1>Put Some Order<br><br> In Your<br><br> Library</h1><br>
      <!-- <button class="btn btn-success btn-sm "type="" name="button">Learn More</button> -->
      <img src="../../assets/mouse.png" alt="mouse" class="mouse">
</a>
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
    color: white;
    height: 89vh;
    background-image: url(../../assets/library.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.8;
    text-align: center;
  }

  .mouse {
    width:20vh !important;
    height: 20vh !important;
  }
  /*button {
    width: 150px;
    height: 50px;
    border-radius: 30px;
    background-color: inherit;
    border-style: none;
    border: 2px solid white;
    color: white;
    font-weight: bold;
    transition: 0.2s;
  }
  button:hover {
    transition: 0.2s;
    background-color: #71423A;
    color: lightgreen;
  }*/

/******DESKTOP******/
  @media (min-width: 640px) {
    .component {
      min-height: 90vh;
    }
  }
</style>
