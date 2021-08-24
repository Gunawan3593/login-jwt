<template>
  <div>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="fullname" class="form-label">Full Name</label>
        <input
          id="fullname"
          v-model="registerData.fullname"
          type="text"
          class="form-control"
        >
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          id="email"
          v-model="registerData.email"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
        >
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          id="password"
          v-model="registerData.password"
          type="password"
          class="form-control"
        >
      </div>
      <button type="submit" class="btn btn-primary w-100">
        Register
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      registerData: {
        fullname: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async register () {
      try {
        const user = await this.$axios.$post('/api/auth/signin', {
          fullname: this.registerData.fullname,
          email: this.registerData.email,
          password: this.registerData.password
        })
        console.log(user)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style></style>
