// const context = require.context('./', false, /^\.\/(?!index)[^/]*\.js$/)
// const childrenRoutes = context.keys().reduce((rs, key) => {
//   rs.push(...context(key).default)
//   return rs
// }, [])

const Home = {
  name: 'home',
  path: 'home',
  component: () => import('@/views/home/Home.vue'),
  meta: { title: '主页' },
};

export default [Home];
