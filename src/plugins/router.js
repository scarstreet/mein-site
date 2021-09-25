import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import MusicSheets from '@/views/MusicSheets.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/music-sheets',
    name: 'MusicSheets',
    component: MusicSheets,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
