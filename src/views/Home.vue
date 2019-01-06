<template>
  <div class="home">
    <slider></slider>
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Slider from '@/components/Slider.vue'

export default {
  name: 'home',
  components: {
    Slider
  }
}
</script>
