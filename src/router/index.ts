import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import AuthRoutes from '@/router/modules/auth';
import HomeRoutes from '@/router/modules/home';

const routes: Array<RouteRecordRaw> = [...AuthRoutes, ...HomeRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
