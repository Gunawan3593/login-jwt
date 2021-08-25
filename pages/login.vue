<template>
  <div>
    <login />
  </div>
</template>

<script>
import Login from '~/components/Login.vue'
export default {
  components: { Login },
  middleware: 'isGuest',
  beforeMount () {
    if (this.$store.state.auth.loggedIn) {
      if (this.$route.query.lastRoute === undefined) {
        this.$router.push('/')
      } else {
        this.$router.push(this.$route.query.lastRoute)
      }
    }
  }
}
</script>

<style></style>
