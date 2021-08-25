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
