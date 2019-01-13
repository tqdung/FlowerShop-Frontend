<template>
  <div class="home">
    <slider></slider>
    <section-page></section-page>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Slider from '@/components/Slider.vue'
import SectionPage from '@/components/Section.vue'

export default {
  name: 'home',
  components: {
    Slider,
    SectionPage
  }
}
</script>
