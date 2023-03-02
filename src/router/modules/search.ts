import {RouteRecordRaw} from 'vue-router';

import Search from '@/modules/search/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/search',
    name: 'search',
    component: Search,
  },
];

export default routes;
