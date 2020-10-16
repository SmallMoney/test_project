export default (serviceHelper) => ({
  ...serviceHelper({
    get: {
      getUserInfo: '/getUserInfo',
      login: '/hrm_web/login',
      logout: '/logout',
    },
    post: {},
    put: {},
    delete: {},
  }),
});
