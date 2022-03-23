import Vue from 'vue';
import VueRouter from 'vue-router';
import perzeptionMain from '../sections/perzeption-main';
import perzeptionPublication from '../sections/perzeption-publication';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'perzeption-main',
    component: perzeptionMain,
  },
  {
    path: '/publication',
    name: 'perzeption-publication',
    component: perzeptionPublication,
  },
];

const router = new VueRouter({
  routes
});

export default router;
Object.freeze(routes);
export { routes };
