import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import AuthRoutes from '@/router/modules/auth';
import HomeRoutes from '@/router/modules/home';
import SettingsRoutes from '@/router/modules/settings';

const routes: Array<RouteRecordRaw> = [...AuthRoutes, ...HomeRoutes, ...SettingsRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
