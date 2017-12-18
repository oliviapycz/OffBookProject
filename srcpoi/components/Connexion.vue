<template lang="html">
  <div class="wrapper">
    <form class="
    col-lg-offset-4
    col-lg-4
    col-md-offset-3
    col-md-6
    col-sm-offset-2
    col-sm-8
    col-xs-offset-2
    col-xs-8"
    action="index.html" method="post">
      <fieldset class="">
        <legend>Entrez votre code :</legend>
        <div class="form-group">
          <label for="code"></label>
          <input class="form-control" type="text" name="code" value="" placeholder="code">
        </div>
        <div class="form-group col-lg-offset-3 col-lg-6">
          <input class="form-control"type="submit" name="" value="envoyer">
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  // data: {
  //   return {
  //
  //   }
  // },
  // methods: {
  //   compareCode {
  //     let
  //   }
  // }
}
</script>

<style lang="css" scoped="">
  .wrapper {
    height: 80vh;
    position: relative;
    background-image: url(../assets/wedding-bouquet-2.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  legend {
    color: ligthgrey;
  }
  form {
    border: 2px solid white;
    border-radius: 3px;
    background-color: white;
    opacity: 0.9;
    box-shadow: 3px 3px 3px lightgrey;
    width: 33%;
    position: absolute;
    top: 30%;
  }
  input {
    width:90%;
    margin: auto;
    height: 35px;
  }
</style>
