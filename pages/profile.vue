<template>
  <div>
    <user />
  </div>
</template>

<script>
import User from '~/components/User.vue'
export default {
  components: {
    User
  },
  middleware: 'isAuthenticated' // it will use `isAuthenticated` middleware
}
</script>

<style></style>
