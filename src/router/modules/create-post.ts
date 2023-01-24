import { RouteRecordRaw } from 'vue-router';

import CreatePost from '@/modules/create-post/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/create-post',
    name: 'create-post',
    component: CreatePost,
  },
];

export default routes;
