<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <nuxt-link class="navbar-brand" to="/">
          Navbar
        </nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <template v-if="!isAuthenticated">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link active"
                  aria-current="page"
                  to="/auth/login"
                >
                  Login
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link active"
                  aria-current="page"
                  to="/auth/register"
                >
                  Register
                </nuxt-link>
              </li>
            </template>
            <template v-else>
              <li class="nav-item" @click="logout">
                <nuxt-link
                  class="nav-link active"
                  aria-current="page"
                  to="#"
                >
                  Logout
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  class="nav-link active"
                  aria-current="page"
                  to="/profile"
                >
                  Profile
                </nuxt-link>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated () {
      return this.$store.getters.isAuthenticated // it check if user isAuthenticated
    }
  },
  methods: {
    async logout () {
      await this.$auth.logout() // this method will logout the user and make token to false on the local storage of the user browser
    }
  }
}
</script>

  <style></style>
