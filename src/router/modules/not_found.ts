import {RouteRecordRaw} from 'vue-router';

import NotFound from '@/modules/not_found/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/not_found',
    name: 'not_found',
    component: NotFound,
  },
];

export default routes;
