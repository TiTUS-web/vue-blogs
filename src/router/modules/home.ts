import {RouteRecordRaw} from 'vue-router';

import Home from '@/modules/home/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
];

export default routes;
