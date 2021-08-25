<template>
  <div>
    <register />
  </div>
</template>

<script>
import Register from '~/components/Register.vue'
export default {
  components: { Register },
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
