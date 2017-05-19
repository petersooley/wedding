import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router/dist/vue-router.esm';

import Ceremony from './views/Ceremony.vue';
import Eclipse from './views/Eclipse.vue';
import Journey from './views/Journey.vue';
import Visiting from './views/Visiting.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/ceremony' },
  { path: '/ceremony', component: Ceremony },
  { path: '/eclipse', component: Eclipse },
  { path: '/journey', component: Journey },
  { path: '/visiting', component: Visiting },
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
});

new Vue({
  router,
}).$mount('#wrapper');

