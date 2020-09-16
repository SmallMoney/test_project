import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/views/main/Main';
import Login from '@/views/login/Login';
const context = require.context('./', true, /index\.js$/);
const childrenRoutes = context.keys().reduce((rs, key) => {
  if (key !== './index.js') {
    rs.push(...context(key).default);
  }
  return rs;
}, []);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      redirect: {
        name: 'home',
      },
      children: childrenRoutes,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
