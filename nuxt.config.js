export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'loginJwt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth: {
    strategies:
    { // The strategies are ways that we want to implement our authentication with here we just use local strategy
      local: { // The name of our strategy
        token: { // The token config
          property: 'token', // The token property name that API will provide us when we log in
          global: true, // This determines if the authentication token is automatically included in all custom axios requests.
          required: true, // This option can be used to disable all token handling.
          type: 'Bearer' // Authorization header type to be used in axios requests.
          //  We don't use maxAge, because we provide expiry time for token from API
        },
        user: {
          property: 'user', // The user object that API will provide us when we log in
          autoFetch: true // if it was true will send a request to API to call the user endpoint
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' }, // our endpoint for sending request to the API
          logout: false, //  we don't have an endpoint for our logout in our API and we just remove the token from localstorage
          user: { url: '/api/auth/user', method: 'get' } // our endpoint for getting data from the API
        }
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:8080'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
