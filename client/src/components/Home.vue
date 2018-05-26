<template lang="html">
  <div class="">
    <app-container1></app-container1>
    <app-container2></app-container2>
    <app-container3></app-container3>
  </div>
</template>

<script>
import Container1 from './Home/Container1';
import Container2 from './Home/Container2';
import Container3 from './Home/Container3';

export default {
  components: {
    appContainer1: Container1,
    appContainer2: Container2,
    appContainer3: Container3,
  },
};
</script>

<style lang="css">
</style>
