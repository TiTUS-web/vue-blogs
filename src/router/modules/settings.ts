import { RouteRecordRaw } from 'vue-router';

import Settings from '@/modules/settings/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  },
];

export default routes;
