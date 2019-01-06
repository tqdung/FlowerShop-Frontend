<template>
  <div id="app">
    <header-page></header-page>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <footer-page></footer-page>
  </div>
</template>

<script>
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'

export default {
  components: {
    HeaderPage,
    FooterPage,
  }
}
</script>

