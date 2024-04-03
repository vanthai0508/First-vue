<!-- <template>
  <div class="about">
    <h1>This is an about page</h1>
    <Test />
  </div>
  <br><br>
  <div>
    <FormTest></FormTest>
  </div>
</template>
<script>
  import Test from '../components/Test.vue'
  import FormTest from '../components/FormTest.vue'

  export default {
    data() {
      return {
        isShow: true,
      }
    },
    components: {
      FormTest,
      Test
    }
  }
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style> -->
<template>
  <div class="container">
  <div class="item item1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
  <div class="item item4">4</div>
  <div class="item item5">5</div>
  <div class="item item6">6</div>
  <div class="item item7">7</div>
  <div class="item item8">8</div>
  <div class="item item9">9</div>
  <div class="item item10">10</div>
</div>
</template>

<script>

</script>
<style>
/* html, body {
  height: 100%;
  margin: 0;
} */
.container {
  padding-left: 0px;
  background-image: linear-gradient(to right bottom, #ffa400, #e74c3c);
  height: 100vh;
  width: 200vh;
  padding: 50px;
  display: grid;
  grid-template-columns: 100%;
}
.item {
  color: black;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  border: 2px solid orange;
}
</style>