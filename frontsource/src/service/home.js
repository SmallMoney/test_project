export default (serviceHelper) => ({
  ...serviceHelper({
    get: {
      getUserInfo: '/getUserInfo',
      login: '/login',
      logout: '/logout',
    },
    post: {},
    put: {},
    delete: {},
  }),
});
