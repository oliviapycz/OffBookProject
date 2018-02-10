<template lang="html">
  <div class="divBg row align-items-center">
    <div class="col">
      <h1>Put Some Order<br><br>In Your<br><br>Library</h1><br>
      <button class="btn btn-light"type="" name="button">Learn More</button>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="css" scoped="">
  .divBg {
    color: black;
    height: 89vh;
    background-image: url(../../assets/library.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.8;
    text-align: center;
  }
  h1 {
    font-size: 36px;
  }

  @media (min-width: 640px) {
    .divBg {
      height: 93vh;
    }
  }
</style>
