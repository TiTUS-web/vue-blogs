import {RouteRecordRaw} from 'vue-router';

import Home from '@/modules/home/index.vue';
import CurrentPost from '@/modules/home/views/CurrentPost.vue';
import CurrentCategory from '@/modules/home/views/CurrentCategory.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/posts/:id',
    name: 'current-post',
    component: CurrentPost,
  },
  {
    path: '/categories/:id',
    name: 'current-category',
    component: CurrentCategory,
  },
];

export default routes;
