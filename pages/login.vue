<template>
  <div>
    <login />
  </div>
</template>

<script>
import Login from '~/components/Login.vue'
export default {
  components: { Login },
  middleware: 'isGuest'
}
</script>

<style></style>
