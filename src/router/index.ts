import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import AuthRoutes from '@/router/modules/auth';
import HomeRoutes from '@/router/modules/home';

const routes: Array<RouteRecordRaw> = [...AuthRoutes, ...HomeRoutes];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
