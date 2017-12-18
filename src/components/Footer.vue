<template lang="html">
  <footer class="">
    <div class="row justify-content-between align-items-center">
      <div class="col-md-4">
        <div class="card">
          <div class="card1">
            <h3>OffBook is a final year Project</h3>
            <ul>
              <li>Vuejs</li>
              <li>Bootstrap</li>
              <li>NodeJs</li>
            </ul>
          </div>
          <div class="card2">
            <h3>If you want to know more about my work</h3>
            <ul>
              <li>GitHub</li>
              <li>LinkedIn</li>
              <li>PorteFolio</li>
            </ul>
          </div>
        </div>
      </div>
      <form class="col-md-4" action="index.html" method="post">
        <fieldset>
          <legend>Contact Us</legend>
          <div class="form-group">
            <label for="email"></label>
            <input
              type="email"
              name="email"
              class="form-control"
              value=""
              required
              placeholder="enter your email *">
          </div>
          <div class="form-group">
            <label for="name"></label>
            <input
              type="text"
              name="name"
              class="form-control"
              value=""
              required
              placeholder="enter your name *">
          </div>
          <div class="from-group">
            <textarea class="form-control" name="name" rows="8" cols="80" placeholder="enter your comments *"></textarea>
          </div>
          <div class="form-group">
            <input  class="btn btn-secondary" type="submit" name="" value="SEND">
          </div>
        </fieldset>
      </form>
    </div>
    <div class="row align-items-end">
      <div class="col">
        <p>All Right Reserved | Olivia Py-Cz</p>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
};
</script>

<style lang="css" scoped="">
footer {
  /*height: 60vh;*/
  background-color: lightgreen;
  text-align: center;
}
.card {
  margin-top: 10px;
  border: 1px solid white;
  border-radius: 9px;
  background-color: white;
}
.card1, .card2 {
  margin: 10px 20px;
  border: 1px solid lightblue;
  /*border-radius: 9px;*/
  background-color: lightblue;
}
input, textarea {
  border: inherit;
  border-bottom: 1px solid lightgreen;
}
.btn-secondary {
  width: 5vw;
  text-align: center;
}
</style>
