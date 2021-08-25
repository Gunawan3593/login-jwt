<template>
  <div>
    <Header />
    <div class="container">
      <br>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  components: { Header }
}
</script>

<style>
/* @import url("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"); */
</style>
