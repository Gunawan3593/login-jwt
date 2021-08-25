export default function ({ app, store, redirect }) {
  const curPath = app.router.history.current.path
  if (!store.state.auth.loggedIn) {
    return redirect({ path: '/login', query: { lastRoute: curPath } })
  }
}
